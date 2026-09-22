"""Generate the impact stat panels (light and dark) for the profile README.

Styled like observability stat panels: one big number per panel, with where it came from.
Edit PANELS, then run:  python3 scripts/build_panels.py
"""
from dataclasses import dataclass
from pathlib import Path
from xml.sax.saxutils import escape

ASSETS = Path(__file__).resolve().parent.parent / "assets"


@dataclass(frozen=True)
class Panel:
    title: str
    value: str
    detail: str
    source: str


PANELS = (
    Panel("APPLE STORE URLS", "900K+", "SEO changes schedulable", "Apple · 2026"),
    Panel("CHANGESETS UNBLOCKED", "~100", "after a Cassandra fix", "Apple · 2026"),
    Panel("RESOLUTION TIME", "−80%", "for stuck changesets", "Apple · 2026"),
    Panel("LIVE AUDIO LATENCY", "<1 s", "Teams bot → AI server", "WebOsmotic · 2024–25"),
)

THEMES = {
    "dark": {"panel": "#161b22", "border": "#30363d", "text": "#e6edf3", "muted": "#8b949e", "accent": "#3fb950"},
    "light": {"panel": "#f6f8fa", "border": "#d0d7de", "text": "#1f2328", "muted": "#59636e", "accent": "#1a7f37"},
}

WIDTH = 1000
HEIGHT = 136
GAP = 14
SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"
MONO = "'JetBrains Mono','SF Mono',Menlo,Consolas,monospace"


def panel(t: dict, x: float, width: float, p: Panel) -> str:
    return (
        f'<rect x="{x + 0.5:.1f}" y="0.5" width="{width - 1:.1f}" height="{HEIGHT - 1}" rx="10" fill="{t["panel"]}" stroke="{t["border"]}"/>'
        f'<rect x="{x + 0.5:.1f}" y="0.5" width="4" height="{HEIGHT - 1}" rx="2" fill="{t["accent"]}"/>'
        f'<text x="{x + 22:.1f}" y="30" font-family="{MONO}" font-size="11.5" letter-spacing="1" fill="{t["muted"]}">{escape(p.title)}</text>'
        f'<text x="{x + 20:.1f}" y="78" font-family="{SANS}" font-size="40" font-weight="700" fill="{t["accent"]}">{escape(p.value)}</text>'
        f'<text x="{x + 22:.1f}" y="103" font-family="{SANS}" font-size="14" fill="{t["text"]}">{escape(p.detail)}</text>'
        f'<text x="{x + 22:.1f}" y="123" font-family="{MONO}" font-size="11.5" fill="{t["muted"]}">{escape(p.source)}</text>'
    )


def build(theme: str) -> str:
    t = THEMES[theme]
    width = (WIDTH - GAP * (len(PANELS) - 1)) / len(PANELS)
    body = "\n  ".join(panel(t, i * (width + GAP), width, p) for i, p in enumerate(PANELS))
    label = "; ".join(f"{p.title.lower()}: {p.value} {p.detail} ({p.source})" for p in PANELS)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-label="{escape(label)}">
  {body}
</svg>
"""


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    for theme in THEMES:
        (ASSETS / f"impact-{theme}.svg").write_text(build(theme), encoding="utf-8")
    print(f"Wrote impact-dark.svg and impact-light.svg to {ASSETS}")


if __name__ == "__main__":
    main()
