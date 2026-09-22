"""Generate the status-page header (light and dark) for the profile README.

Edit NAME/ROLE/STATUS or the TIMELINE rows, then run:  python3 scripts/build_header.py
"""
from dataclasses import dataclass
from pathlib import Path
from xml.sax.saxutils import escape

ASSETS = Path(__file__).resolve().parent.parent / "assets"

NAME = "Umer Karachiwala"
ROLE = "Backend & DevOps Engineer · Dublin, Ireland"
STATUS = "All systems operational · open to backend, platform & DevOps roles"

# Timeline starts in this month; each bar is one month.
START_YEAR, START_MONTH = 2023, 10
MONTHS = 36


@dataclass(frozen=True)
class Row:
    label: str
    span: str
    start: tuple[int, int]
    end: tuple[int, int]


TIMELINE = (
    Row("Apple · Software Engineer Intern", "Mar – Sep 2026", (2026, 3), (2026, 9)),
    Row("ATU · MSc Computing (DevOps)", "Sep 2025 – Sep 2026", (2025, 9), (2026, 9)),
    Row("WebOsmotic · Jr Backend Engineer", "Apr 2024 – Jun 2025", (2024, 4), (2025, 6)),
    Row("WebOsmotic · Software Engineer Intern", "Oct 2023 – Mar 2024", (2023, 10), (2024, 3)),
)

THEMES = {
    "dark": {"bg": "#0d1117", "border": "#30363d", "text": "#e6edf3", "muted": "#8b949e",
             "ok": "#3fb950", "ok_soft": "#3fb95026", "idle": "#21262d"},
    "light": {"bg": "#ffffff", "border": "#d0d7de", "text": "#1f2328", "muted": "#59636e",
              "ok": "#1a7f37", "ok_soft": "#1a7f371f", "idle": "#eaeef2"},
}

WIDTH = 1200
PAD_X = 48
SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"

LABEL_COL_WIDTH = 330
SPAN_COL_WIDTH = 170
BAR_GAP = 3
BAR_HEIGHT = 28
ROW_HEIGHT = 50
TIMELINE_TOP = 196


def month_index(year: int, month: int) -> int:
    return (year - START_YEAR) * 12 + (month - START_MONTH)


def status_pill(t: dict) -> str:
    width = len(STATUS) * 7.3 + 58
    x = WIDTH - PAD_X - width
    return (
        f'<rect x="{x:.1f}" y="44" width="{width:.1f}" height="34" rx="17" fill="{t["ok_soft"]}"/>'
        f'<circle cx="{x + 22:.1f}" cy="61" r="5" fill="{t["ok"]}"/>'
        f'<circle cx="{x + 22:.1f}" cy="61" r="5" fill="none" stroke="{t["ok"]}" stroke-width="2">'
        f'<animate attributeName="r" values="5;11" dur="1.8s" repeatCount="indefinite"/>'
        f'<animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite"/></circle>'
        f'<text x="{x + 38:.1f}" y="66" font-family="{SANS}" font-size="13.5" font-weight="600" fill="{t["ok"]}">{escape(STATUS)}</text>'
    )


def timeline_rows(t: dict) -> str:
    bars_left = PAD_X + LABEL_COL_WIDTH
    bars_width = WIDTH - PAD_X - SPAN_COL_WIDTH - bars_left
    bar_width = (bars_width - BAR_GAP * (MONTHS - 1)) / MONTHS
    parts = []
    for row_index, row in enumerate(TIMELINE):
        y = TIMELINE_TOP + row_index * ROW_HEIGHT
        first, last = month_index(*row.start), month_index(*row.end)
        parts.append(
            f'<text x="{PAD_X}" y="{y + 19}" font-family="{SANS}" font-size="15" font-weight="600" fill="{t["text"]}">{escape(row.label)}</text>'
        )
        for month in range(MONTHS):
            active = first <= month <= last
            x = bars_left + month * (bar_width + BAR_GAP)
            parts.append(
                f'<rect x="{x:.1f}" y="{y}" width="{bar_width:.1f}" height="{BAR_HEIGHT}" rx="2" '
                f'fill="{t["ok"] if active else t["idle"]}"/>'
            )
        parts.append(
            f'<text x="{WIDTH - PAD_X}" y="{y + 19}" text-anchor="end" font-family="{SANS}" font-size="13.5" fill="{t["muted"]}">{escape(row.span)}</text>'
        )
    axis_y = TIMELINE_TOP + len(TIMELINE) * ROW_HEIGHT + 4
    parts.append(f'<text x="{bars_left}" y="{axis_y}" font-family="{SANS}" font-size="12" fill="{t["muted"]}">Oct 2023</text>')
    parts.append(
        f'<text x="{bars_left + bars_width:.1f}" y="{axis_y}" text-anchor="end" font-family="{SANS}" font-size="12" fill="{t["muted"]}">Sep 2026</text>'
    )
    return "\n  ".join(parts)


def build(theme: str) -> str:
    t = THEMES[theme]
    height = TIMELINE_TOP + len(TIMELINE) * ROW_HEIGHT + 40
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{height}" viewBox="0 0 {WIDTH} {height}" role="img" aria-label="{escape(NAME)}, {escape(ROLE)}. {escape(STATUS)}. Experience timeline from October 2023 to September 2026.">
  <rect x="0.5" y="0.5" width="{WIDTH - 1}" height="{height - 1}" rx="16" fill="{t["bg"]}" stroke="{t["border"]}"/>
  <text x="{PAD_X}" y="74" font-family="{SANS}" font-size="38" font-weight="700" fill="{t["text"]}">{escape(NAME)}</text>
  <text x="{PAD_X}" y="108" font-family="{SANS}" font-size="17" fill="{t["muted"]}">{escape(ROLE)}</text>
  {status_pill(t)}
  <line x1="{PAD_X}" y1="140" x2="{WIDTH - PAD_X}" y2="140" stroke="{t["border"]}"/>
  <text x="{PAD_X}" y="174" font-family="{SANS}" font-size="12" font-weight="600" letter-spacing="1.5" fill="{t["muted"]}">UPTIME</text>
  {timeline_rows(t)}
</svg>
"""


def main() -> None:
    ASSETS.mkdir(exist_ok=True)
    for theme in THEMES:
        (ASSETS / f"header-{theme}.svg").write_text(build(theme), encoding="utf-8")
    print(f"Wrote header-dark.svg and header-light.svg to {ASSETS}")


if __name__ == "__main__":
    main()
