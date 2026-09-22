"""Generate every SVG card in this profile README, in light and dark variants.

Cards: header, impact panels, one card per featured repo, and a GitHub activity card.
Repo and activity data come from the GitHub API (set GITHUB_TOKEN for the activity
chart). Run:  python3 scripts/build_cards.py
"""
from __future__ import annotations

import json
import os
import urllib.request
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from xml.sax.saxutils import escape

USER = "Umer-2612"
THEME = "ops"            # "ops" (green dashboard) or "blueprint" (blue architecture)
HEADER = "timeline"      # "timeline" or "architecture"
ASSETS = Path(__file__).resolve().parent.parent / "assets"

NAME = "Umer Karachiwala"
ROLE = "Backend & DevOps Engineer · Dublin, Ireland"
STATUS = "Available · backend, platform, DevOps & SRE roles"

SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"
MONO = "'JetBrains Mono','SF Mono',Menlo,Consolas,monospace"

PALETTES = {
    "ops": {
        "dark": {"bg": "#0d1117", "panel": "#161b22", "border": "#30363d", "text": "#e6edf3",
                 "muted": "#8b949e", "accent": "#3fb950", "soft": "#3fb95026", "idle": "#21262d", "grid": "#0d1117"},
        "light": {"bg": "#ffffff", "panel": "#f6f8fa", "border": "#d0d7de", "text": "#1f2328",
                  "muted": "#59636e", "accent": "#1a7f37", "soft": "#1a7f371f", "idle": "#eaeef2", "grid": "#ffffff"},
    },
    "blueprint": {
        "dark": {"bg": "#0a1628", "panel": "#0f2140", "border": "#1f3d6b", "text": "#e6f0ff",
                 "muted": "#8aa4c8", "accent": "#4da3ff", "soft": "#4da3ff26", "idle": "#15294a", "grid": "#122a4d"},
        "light": {"bg": "#f5f9ff", "panel": "#ffffff", "border": "#c6d8f2", "text": "#0b1f3a",
                  "muted": "#4a6285", "accent": "#1f6feb", "soft": "#1f6feb1a", "idle": "#e3ecf9", "grid": "#e4eefb"},
    },
}

LANGUAGE_COLORS = {
    "Python": "#3572A5", "TypeScript": "#3178c6", "JavaScript": "#f1e05a", "C++": "#f34b7d",
    "C#": "#178600", "Java": "#b07219", "Shell": "#89e051", "Jupyter Notebook": "#DA5B0B",
    "HTML": "#e34c26", "CSS": "#663399", "Go": "#00ADD8", "Dockerfile": "#384d54",
}


@dataclass(frozen=True)
class Row:
    label: str
    span: str
    start: tuple[int, int]
    end: tuple[int, int]


@dataclass(frozen=True)
class Panel:
    title: str
    value: str
    detail: str
    source: str


@dataclass(frozen=True)
class Featured:
    repo: str
    summary: str
    stack: tuple[str, ...]


TIMELINE = (
    Row("Apple · Software Engineer Intern", "Mar – Sep 2026", (2026, 3), (2026, 9)),
    Row("ATU · MSc Computing (DevOps)", "Sep 2025 – Sep 2026", (2025, 9), (2026, 9)),
    Row("WebOsmotic · Jr Backend Engineer", "Apr 2024 – Jun 2025", (2024, 4), (2025, 6)),
    Row("WebOsmotic · Software Engineer Intern", "Oct 2023 – Mar 2024", (2023, 10), (2024, 3)),
)
TIMELINE_START, TIMELINE_MONTHS = (2023, 10), 36

PANELS = (
    Panel("APPLE STORE URLS", "900K+", "SEO changes schedulable", "Apple · 2026"),
    Panel("CHANGESETS UNBLOCKED", "~100", "after a Cassandra fix", "Apple · 2026"),
    Panel("RESOLUTION TIME", "−80%", "for stuck changesets", "Apple · 2026"),
    Panel("LIVE AUDIO LATENCY", "<1 s", "Teams bot → AI server", "WebOsmotic · 2024–25"),
)

FEATURED = (
    Featured("realtime-meeting-intelligence",
             "Zoom and Teams bots that capture live audio and video and stream it to a Python analysis server.",
             ("C++", ".NET", "Python", "AWS EKS")),
    Featured("msc-devops-dissertation",
             "Greening the Pipeline: the carbon cost of CI/CD across 5 open-source projects, with a replication package.",
             ("Python", "GitHub Actions", "CI/CD")),
    Featured("realtime-transcribe",
             "Self-hosted WebSocket speech-to-text with a model that decides when a speaker has finished.",
             ("Python", "FunASR", "WebSockets", "Docker")),
    Featured("memory-core",
             "Memory service for AI apps with semantic search on PostgreSQL and pgvector.",
             ("FastAPI", "PostgreSQL", "pgvector")),
)

ARCHITECTURE = (
    ("CLIENTS", ("web apps", "meeting bots", "devices")),
    ("SERVICES", ("Java · Spring Boot", "Node.js · FastAPI", ".NET")),
    ("EVENTS", ("SQS / SNS", "WebSockets", "event pipelines")),
    ("DATA", ("Cassandra · Postgres", "OpenSearch · Solr", "Redis")),
)
PLATFORM = "PLATFORM   AWS · Azure · Kubernetes · Docker · Terraform · GitHub Actions · Jenkins"
AI_NODE = ("AI", ("RAG · pgvector", "speech-to-text"))


# ── GitHub data ──────────────────────────────────────────────────────────────

def _request(url: str, body: dict | None = None):
    data = json.dumps(body).encode() if body else None
    request = urllib.request.Request(url, data=data, headers={"Accept": "application/vnd.github+json"})
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def fetch_repos() -> list[dict]:
    repos = _request(f"https://api.github.com/users/{USER}/repos?per_page=100")
    return [r for r in repos if not r["fork"]]


def fetch_language_bytes(repos: list[dict]) -> dict[str, int]:
    totals: dict[str, int] = {}
    for repo in repos:
        for language, size in _request(repo["languages_url"]).items():
            totals[language] = totals.get(language, 0) + size
    return totals


def fetch_weekly_contributions() -> tuple[int, list[int]] | None:
    if not os.environ.get("GITHUB_TOKEN"):
        return None
    query = ('{ user(login: "%s") { contributionsCollection { contributionCalendar '
             '{ totalContributions weeks { contributionDays { contributionCount } } } } } }') % USER
    calendar = _request("https://api.github.com/graphql", {"query": query})
    calendar = calendar["data"]["user"]["contributionsCollection"]["contributionCalendar"]
    weeks = [sum(d["contributionCount"] for d in w["contributionDays"]) for w in calendar["weeks"]]
    return calendar["totalContributions"], weeks


# ── Shared drawing helpers ───────────────────────────────────────────────────

def svg(width: float, height: float, label: str, body: str) -> str:
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}" height="{height:.0f}" '
            f'viewBox="0 0 {width:.0f} {height:.0f}" role="img" aria-label="{escape(label)}">\n{body}\n</svg>\n')


def frame(t: dict, width: float, height: float) -> str:
    grid = ""
    if THEME == "blueprint":
        grid = (f'<defs><pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">'
                f'<path d="M24 0H0V24" fill="none" stroke="{t["grid"]}" stroke-width="1"/></pattern></defs>'
                f'<rect x="1" y="1" width="{width - 2:.0f}" height="{height - 2:.0f}" rx="14" fill="url(#g)"/>')
    return (f'<rect x="0.5" y="0.5" width="{width - 1:.0f}" height="{height - 1:.0f}" rx="14" '
            f'fill="{t["bg"]}" stroke="{t["border"]}"/>{grid}')


def text(x: float, y: float, content: str, t: dict, size: float = 14, color: str = "text",
         weight: int = 400, font: str = SANS, anchor: str = "start", spacing: float = 0) -> str:
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-family="{font}" font-size="{size}" font-weight="{weight}" '
            f'fill="{t[color] if color in t else color}" text-anchor="{anchor}" letter-spacing="{spacing}">'
            f'{escape(content)}</text>')


def wrap(content: str, max_chars: int) -> list[str]:
    lines, current = [], ""
    for word in content.split():
        candidate = f"{current} {word}".strip()
        if len(candidate) > max_chars and current:
            lines.append(current)
            current = word
        else:
            current = candidate
    return lines + [current] if current else lines


def status_pill(t: dict, right: float, y: float) -> str:
    width = len(STATUS) * 7.2 + 56
    x = right - width
    return (f'<rect x="{x:.1f}" y="{y}" width="{width:.1f}" height="32" rx="16" fill="{t["soft"]}"/>'
            f'<circle cx="{x + 20:.1f}" cy="{y + 16}" r="5" fill="{t["accent"]}"/>'
            f'<circle cx="{x + 20:.1f}" cy="{y + 16}" r="5" fill="none" stroke="{t["accent"]}" stroke-width="2">'
            f'<animate attributeName="r" values="5;11" dur="1.8s" repeatCount="indefinite"/>'
            f'<animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite"/></circle>'
            + text(x + 36, y + 21, STATUS, t, 13, "accent", 600))


# ── Header: career timeline ──────────────────────────────────────────────────

def header_timeline(t: dict) -> str:
    width, left, label_w, span_w, top, row_h = 1200, 48, 330, 170, 196, 50
    height = top + len(TIMELINE) * row_h + 40
    bars_left = left + label_w
    bars_width = width - left - span_w - bars_left
    bar_w = (bars_width - 3 * (TIMELINE_MONTHS - 1)) / TIMELINE_MONTHS
    parts = [frame(t, width, height), text(left, 74, NAME, t, 38, weight=700), text(left, 108, ROLE, t, 17, "muted"),
             status_pill(t, width - left, 46),
             f'<line x1="{left}" y1="140" x2="{width - left}" y2="140" stroke="{t["border"]}"/>',
             text(left, 174, "UPTIME", t, 12, "muted", 600, spacing=1.5)]
    for i, row in enumerate(TIMELINE):
        y = top + i * row_h
        first = (row.start[0] - TIMELINE_START[0]) * 12 + row.start[1] - TIMELINE_START[1]
        last = (row.end[0] - TIMELINE_START[0]) * 12 + row.end[1] - TIMELINE_START[1]
        parts.append(text(left, y + 19, row.label, t, 15, weight=600))
        for month in range(TIMELINE_MONTHS):
            fill = t["accent"] if first <= month <= last else t["idle"]
            parts.append(f'<rect x="{bars_left + month * (bar_w + 3):.1f}" y="{y}" width="{bar_w:.1f}" '
                         f'height="28" rx="2" fill="{fill}"/>')
        parts.append(text(width - left, y + 19, row.span, t, 13.5, "muted", anchor="end"))
    axis_y = top + len(TIMELINE) * row_h + 4
    parts += [text(bars_left, axis_y, "Oct 2023", t, 12, "muted"),
              text(bars_left + bars_width, axis_y, "Sep 2026", t, 12, "muted", anchor="end")]
    return svg(width, height, f"{NAME}, {ROLE}. {STATUS}. Career timeline Oct 2023 to Sep 2026.", "\n".join(parts))


# ── Header: architecture diagram ─────────────────────────────────────────────

def arch_node(t: dict, x: float, y: float, w: float, h: float, title: str, items: tuple[str, ...]) -> str:
    parts = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{t["panel"]}" stroke="{t["accent"]}" stroke-opacity="0.6"/>',
             text(x + 16, y + 26, title, t, 11.5, "accent", 700, MONO, spacing=1.5)]
    parts += [text(x + 16, y + 50 + i * 21, item, t, 13.5) for i, item in enumerate(items)]
    return "".join(parts)


def flow(t: dict, x1: float, y1: float, x2: float, y2: float, delay: float) -> str:
    path = f"M{x1} {y1} L{x2} {y2}"
    return (f'<path d="{path}" stroke="{t["muted"]}" stroke-width="1.5" stroke-dasharray="4 4"/>'
            f'<circle r="3.5" fill="{t["accent"]}"><animateMotion dur="1.6s" begin="{delay}s" '
            f'repeatCount="indefinite" path="{path}"/></circle>')


def header_architecture(t: dict) -> str:
    width, height, left = 1200, 440, 48
    node_w, node_h, gap, row_y = 238, 126, 42, 176
    parts = [frame(t, width, height), text(left, 74, NAME, t, 38, weight=700), text(left, 108, ROLE, t, 17, "muted"),
             status_pill(t, width - left, 46),
             text(left, 150, "HOW I BUILD", t, 12, "muted", 600, MONO, spacing=1.5)]
    xs = [left + i * (node_w + gap) for i in range(len(ARCHITECTURE))]
    for i, (title, items) in enumerate(ARCHITECTURE):
        parts.append(arch_node(t, xs[i], row_y, node_w, node_h, title, items))
        if i:
            parts.append(flow(t, xs[i - 1] + node_w + 4, row_y + node_h / 2, xs[i] - 6, row_y + node_h / 2, i * 0.4))
    band_y = row_y + node_h + 40
    parts.append(f'<rect x="{xs[1]}" y="{band_y}" width="{xs[3] + node_w - xs[1]}" height="44" rx="10" '
                 f'fill="{t["soft"]}" stroke="{t["accent"]}" stroke-opacity="0.4"/>')
    parts.append(text(xs[1] + 16, band_y + 28, PLATFORM, t, 13, "text", 500, MONO))
    for i in (1, 2, 3):
        cx = xs[i] + node_w / 2
        parts.append(f'<path d="M{cx} {row_y + node_h} V{band_y}" stroke="{t["muted"]}" stroke-dasharray="3 4"/>')
    ai_x, ai_y = xs[0], band_y - 6
    parts.append(arch_node(t, ai_x, ai_y, node_w - 40, 64 + 20, AI_NODE[0], AI_NODE[1]))
    parts.append(flow(t, ai_x + node_w - 36, ai_y + 40, xs[1] - 6, row_y + node_h - 10, 0.8))
    label = f"{NAME}, {ROLE}. {STATUS}. Architecture: clients, services, events, data, on AWS, Azure and Kubernetes, with AI."
    return svg(width, height, label, "\n".join(parts))


# ── Impact panels ────────────────────────────────────────────────────────────

def impact_panels(t: dict) -> str:
    width, height, gap = 1000, 136, 14
    panel_w = (width - gap * (len(PANELS) - 1)) / len(PANELS)
    parts = []
    for i, p in enumerate(PANELS):
        x = i * (panel_w + gap)
        parts += [f'<rect x="{x + 0.5:.1f}" y="0.5" width="{panel_w - 1:.1f}" height="{height - 1}" rx="10" '
                  f'fill="{t["panel"]}" stroke="{t["border"]}"/>',
                  f'<rect x="{x + 0.5:.1f}" y="0.5" width="4" height="{height - 1}" rx="2" fill="{t["accent"]}"/>',
                  text(x + 22, 30, p.title, t, 11.5, "muted", font=MONO, spacing=1),
                  text(x + 20, 78, p.value, t, 40, "accent", 700),
                  text(x + 22, 103, p.detail, t, 14),
                  text(x + 22, 123, p.source, t, 11.5, "muted", font=MONO)]
    label = "; ".join(f"{p.title.lower()}: {p.value} {p.detail} ({p.source})" for p in PANELS)
    return svg(width, height, label, "\n".join(parts))


# ── Repo cards ───────────────────────────────────────────────────────────────

def repo_card(t: dict, featured: Featured, repo: dict) -> str:
    width, height = 480, 176
    language = repo.get("language") or ""
    pushed = repo["pushed_at"][:10]
    parts = [frame(t, width, height),
             f'<path d="M24 26h14v18H24z M27 26v18" fill="none" stroke="{t["muted"]}" stroke-width="1.6"/>',
             text(48, 41, featured.repo, t, 17, "accent", 700, MONO)]
    for i, line in enumerate(wrap(featured.summary, 56)[:2]):
        parts.append(text(24, 74 + i * 21, line, t, 14))
    chip_x = 24
    for chip in featured.stack:
        chip_w = len(chip) * 7 + 18
        parts += [f'<rect x="{chip_x}" y="112" width="{chip_w}" height="22" rx="11" fill="{t["soft"]}"/>',
                  text(chip_x + chip_w / 2, 127, chip, t, 11.5, "accent", 600, MONO, "middle")]
        chip_x += chip_w + 6
    foot_y = 158
    if language:
        parts += [f'<circle cx="30" cy="{foot_y - 4}" r="5" fill="{LANGUAGE_COLORS.get(language, t["muted"])}"/>',
                  text(41, foot_y, language, t, 12.5, "muted")]
    if repo["stargazers_count"]:
        parts.append(text(170, foot_y, f"★ {repo['stargazers_count']}", t, 12.5, "muted"))
    parts.append(text(width - 24, foot_y, f"updated {pushed}", t, 12.5, "muted", font=MONO, anchor="end"))
    label = f"{featured.repo}: {featured.summary} Stack: {', '.join(featured.stack)}. Updated {pushed}."
    return svg(width, height, label, "\n".join(parts))


# ── Activity card ────────────────────────────────────────────────────────────

def activity_card(t: dict, repos: list[dict], languages: dict[str, int],
                  contributions: tuple[int, list[int]] | None) -> str:
    width, height, left = 1000, 236, 32
    joined = datetime.fromisoformat(_request(f"https://api.github.com/users/{USER}")["created_at"].replace("Z", "+00:00")).year
    last_push = max(r["pushed_at"][:10] for r in repos)
    parts = [frame(t, width, height), text(left, 40, "GITHUB ACTIVITY", t, 12, "muted", 600, MONO, spacing=1.5),
             text(width - left, 40, f"last push {last_push}", t, 12, "muted", font=MONO, anchor="end")]
    total = contributions[0] if contributions else None
    parts += [text(left, 96, f"{total}" if total is not None else f"{len(repos)}", t, 44, "accent", 700),
              text(left, 120, "contributions in the last year" if total is not None else "public repos", t, 13.5),
              text(left, 146, f"{len(repos)} public repos · on GitHub since {joined}", t, 12.5, "muted")]
    if contributions:
        weeks = contributions[1][-52:]
        chart_left, chart_w, chart_top, chart_h = 300, width - 300 - left, 58, 92
        bar_w = chart_w / len(weeks) - 2
        # Square-root scale so one busy week doesn't flatten the rest of the year.
        peak = max(weeks) ** 0.5 or 1
        for i, value in enumerate(weeks):
            h = max(2, chart_h * value ** 0.5 / peak)
            fill = t["accent"] if value else t["idle"]
            parts.append(f'<rect x="{chart_left + i * (bar_w + 2):.1f}" y="{chart_top + chart_h - h:.1f}" '
                         f'width="{bar_w:.1f}" height="{h:.1f}" rx="1.5" fill="{fill}"/>')
        parts.append(text(chart_left, chart_top + chart_h + 16, "52 weeks ago", t, 11, "muted", font=MONO))
        parts.append(text(chart_left + chart_w, chart_top + chart_h + 16, "this week", t, 11, "muted", font=MONO, anchor="end"))
    top = sorted(languages.items(), key=lambda kv: -kv[1])[:6]
    total_bytes = sum(v for _, v in top) or 1
    bar_y, x = 182, float(left)
    usable = width - 2 * left
    for language, size in top:
        w = usable * size / total_bytes
        parts.append(f'<rect x="{x:.1f}" y="{bar_y}" width="{max(w - 2, 1):.1f}" height="10" rx="3" '
                     f'fill="{LANGUAGE_COLORS.get(language, t["muted"])}"/>')
        x += w
    legend_x = float(left)
    for language, size in top:
        label = f"{language} {100 * size / total_bytes:.0f}%"
        parts += [f'<circle cx="{legend_x + 5:.1f}" cy="{bar_y + 30}" r="5" fill="{LANGUAGE_COLORS.get(language, t["muted"])}"/>',
                  text(legend_x + 15, bar_y + 35, label, t, 12.5, "muted")]
        legend_x += len(label) * 7.2 + 34
    summary = f"{total} contributions in the last year, " if total is not None else ""
    label = f"GitHub activity: {summary}{len(repos)} public repos. Languages by code: " + ", ".join(
        f"{lang} {100 * size / total_bytes:.0f}%" for lang, size in top)
    return svg(width, height, label, "\n".join(parts))


# ── Main ─────────────────────────────────────────────────────────────────────

def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    repos = fetch_repos()
    by_name = {r["name"]: r for r in repos}
    languages = fetch_language_bytes(repos)
    contributions = fetch_weekly_contributions()
    header = header_timeline if HEADER == "timeline" else header_architecture
    for mode, t in PALETTES[THEME].items():
        (ASSETS / f"header-{mode}.svg").write_text(header(t), encoding="utf-8")
        (ASSETS / f"impact-{mode}.svg").write_text(impact_panels(t), encoding="utf-8")
        (ASSETS / f"activity-{mode}.svg").write_text(activity_card(t, repos, languages, contributions), encoding="utf-8")
        for featured in FEATURED:
            card = repo_card(t, featured, by_name[featured.repo])
            (ASSETS / f"repo-{featured.repo}-{mode}.svg").write_text(card, encoding="utf-8")
    print(f"Wrote cards to {ASSETS} ({THEME} theme, {HEADER} header)")


if __name__ == "__main__":
    main()
