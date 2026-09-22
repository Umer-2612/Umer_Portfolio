"""Refresh the auto-generated parts of README.md from the GitHub API.

Rewrites the text between the ACTIVITY and STATS markers. Uses GITHUB_TOKEN if set
(higher rate limit); public data only. Run:  python3 scripts/update_activity.py
"""
from __future__ import annotations

import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER = "Umer-2612"
README = Path(__file__).resolve().parent.parent / "README.md"
RECENT_COUNT = 5
SKIP_REPOS = {USER.lower()}


def fetch(url: str):
    request = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json"})
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(request, timeout=20) as response:
        return json.load(response)


def own_public_repos() -> list[dict]:
    repos = fetch(f"https://api.github.com/users/{USER}/repos?per_page=100&sort=pushed")
    return [r for r in repos if not r["fork"] and r["name"].lower() not in SKIP_REPOS]


def activity_lines(repos: list[dict]) -> list[str]:
    lines = []
    for repo in repos[:RECENT_COUNT]:
        pushed = repo["pushed_at"][:10]
        about = repo["description"] or repo["language"] or ""
        about = about if len(about) <= 90 else about[:87].rstrip() + "..."
        suffix = f" · {about}" if about else ""
        lines.append(f"- `{pushed}` [{repo['name']}]({repo['html_url']}){suffix}")
    return lines


def contributions_last_year() -> int | None:
    """Total contributions in the last year; needs a token (GraphQL), else None."""
    token = os.environ.get("GITHUB_TOKEN")
    if not token:
        return None
    query = {"query": f'{{ user(login: "{USER}") {{ contributionsCollection {{ contributionCalendar {{ totalContributions }} }} }} }}'}
    request = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps(query).encode(),
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(request, timeout=20) as response:
        data = json.load(response)
    return data["data"]["user"]["contributionsCollection"]["contributionCalendar"]["totalContributions"]


def stats_line(repos: list[dict]) -> str:
    user = fetch(f"https://api.github.com/users/{USER}")
    joined = datetime.fromisoformat(user["created_at"].replace("Z", "+00:00")).year
    parts = [f"on github since {joined}", f"{len(repos)} public repos"]
    contributions = contributions_last_year()
    if contributions is not None:
        parts.append(f"{contributions} contributions in the last year")
    last_push = max(r["pushed_at"][:10] for r in repos)
    parts.append(f"last push {last_push}")
    return "<samp>" + " · ".join(parts) + "</samp>"


def replace_block(text: str, marker: str, content: str) -> str:
    pattern = re.compile(rf"(<!-- {marker}:START -->\n)(?:.*?\n)?(<!-- {marker}:END -->)", re.S)
    if not pattern.search(text):
        raise SystemExit(f"README is missing the {marker} markers")
    return pattern.sub(lambda m: m.group(1) + content + "\n" + m.group(2), text)


def main() -> int:
    try:
        repos = own_public_repos()
        text = README.read_text(encoding="utf-8")
        text = replace_block(text, "ACTIVITY", "\n".join(activity_lines(repos)))
        text = replace_block(text, "STATS", stats_line(repos))
    except OSError as error:
        print(f"GitHub API request failed, README left unchanged: {error}", file=sys.stderr)
        return 1
    README.write_text(text, encoding="utf-8")
    print("README activity and stats updated")
    return 0


if __name__ == "__main__":
    sys.exit(main())
