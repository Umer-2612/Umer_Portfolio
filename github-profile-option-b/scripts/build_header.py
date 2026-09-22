"""Generate the light and dark header banners for the profile README.

Edit the text below, then run:  python3 scripts/build_header.py
"""
import math
from pathlib import Path
from xml.sax.saxutils import escape

ASSETS = Path(__file__).resolve().parent.parent / "assets"

EYEBROW = "BACKEND & DEVOPS ENGINEER · DUBLIN, IRELAND"
NAME = "Umer Karachiwala"
TAGLINE = "Distributed backends, real-time audio pipelines"
TAGLINE_2 = "and the cloud infrastructure they run on."
PIPELINE = ["WebSocket", "FunASR", "turn model"]
TRANSCRIPT = "“Open to backend & platform roles.”"

THEMES = {
    "dark": {
        "bg": "#0e1116", "panel": "#161b22", "border": "#262c36",
        "text": "#e6edf3", "muted": "#8b949e", "accent": "#ff8a4c", "accent_soft": "#ff8a4c33",
    },
    "light": {
        "bg": "#ffffff", "panel": "#f6f8fa", "border": "#d0d7de",
        "text": "#1f2328", "muted": "#59636e", "accent": "#d9531e", "accent_soft": "#d9531e22",
    },
}

WIDTH, HEIGHT = 1200, 300
SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"
MONO = "'JetBrains Mono','SF Mono',Menlo,Consolas,monospace"

BAR_COUNT = 22
BAR_WIDTH = 5
BAR_GAP = 4
WAVE_X = 640
WAVE_MID_Y = 116
CHIP_Y = 88
CHIP_HEIGHT = 36
TRANSCRIPT_LOOP_S = 6


def waveform_bars(t: dict) -> str:
    bars = []
    for i in range(BAR_COUNT):
        x = WAVE_X + i * (BAR_WIDTH + BAR_GAP)
        # Deterministic, speech-like envelope so the banner looks the same on every build.
        low = 6 + 4 * abs(math.sin(i * 0.9))
        high = 18 + 34 * abs(math.sin(i * 0.45 + 0.6))
        dur = 0.9 + (i % 5) * 0.17
        heights = f"{low:.0f};{high:.0f};{low + 6:.0f};{high * 0.7:.0f};{low:.0f}"
        ys = ";".join(f"{WAVE_MID_Y - float(h) / 2:.1f}" for h in heights.split(";"))
        bars.append(
            # Static height = a mid-speech frame, so renderers without SMIL still show a waveform.
            f'<rect x="{x}" y="{WAVE_MID_Y - high * 0.7 / 2:.1f}" width="{BAR_WIDTH}" height="{high * 0.7:.0f}" rx="2.5" fill="{t["accent"]}">'
            f'<animate attributeName="height" values="{heights}" dur="{dur:.2f}s" repeatCount="indefinite"/>'
            f'<animate attributeName="y" values="{ys}" dur="{dur:.2f}s" repeatCount="indefinite"/></rect>'
        )
    return "\n    ".join(bars)


def pipeline_chips(t: dict) -> str:
    x = WAVE_X
    y = CHIP_Y + 60
    parts = []
    for index, label in enumerate(PIPELINE):
        width = len(label) * 8.4 + 28
        parts.append(
            f'<rect x="{x:.1f}" y="{y}" width="{width:.1f}" height="{CHIP_HEIGHT}" rx="8" fill="{t["panel"]}" stroke="{t["border"]}"/>'
            f'<text x="{x + width / 2:.1f}" y="{y + 23}" text-anchor="middle" font-family="{MONO}" font-size="14" fill="{t["text"]}">{escape(label)}</text>'
        )
        x += width
        if index < len(PIPELINE) - 1:
            parts.append(
                f'<path d="M{x + 6:.1f} {y + CHIP_HEIGHT / 2} h18" stroke="{t["muted"]}" stroke-width="1.5"/>'
                f'<path d="M{x + 20:.1f} {y + CHIP_HEIGHT / 2 - 4} l5 4 l-5 4" fill="none" stroke="{t["muted"]}" stroke-width="1.5"/>'
            )
            x += 32
    return "\n    ".join(parts)


def transcript_line(t: dict) -> str:
    y = CHIP_Y + 60 + CHIP_HEIGHT + 38
    return (
        f'<g opacity="1">'
        f'<text x="{WAVE_X}" y="{y}" font-family="{MONO}" font-size="13" fill="{t["muted"]}">final</text>'
        f'<text x="{WAVE_X + 52}" y="{y}" font-family="{MONO}" font-size="15" fill="{t["text"]}">{escape(TRANSCRIPT)}</text>'
        f'<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.35;0.45;0.92;1" '
        f'dur="{TRANSCRIPT_LOOP_S}s" repeatCount="indefinite"/></g>'
    )


def build(theme: str) -> str:
    t = THEMES[theme]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-label="{escape(NAME)}, backend and DevOps engineer in Dublin, Ireland">
  <rect x="0.5" y="0.5" width="{WIDTH - 1}" height="{HEIGHT - 1}" rx="18" fill="{t["bg"]}" stroke="{t["border"]}"/>
  <rect x="56" y="64" width="4" height="150" rx="2" fill="{t["accent"]}"/>
  <text x="84" y="84" font-family="{SANS}" font-size="13" font-weight="600" letter-spacing="2" fill="{t["accent"]}">{escape(EYEBROW)}</text>
  <text x="82" y="140" font-family="{SANS}" font-size="50" font-weight="700" fill="{t["text"]}">{escape(NAME)}</text>
  <text x="84" y="182" font-family="{SANS}" font-size="19" fill="{t["muted"]}">{escape(TAGLINE)}</text>
  <text x="84" y="208" font-family="{SANS}" font-size="19" fill="{t["muted"]}">{escape(TAGLINE_2)}</text>
  <rect x="{WAVE_X - 24}" y="44" width="{WIDTH - WAVE_X - 32}" height="{HEIGHT - 88}" rx="14" fill="{t["accent_soft"]}" opacity="0.35"/>
  <text x="{WAVE_X}" y="72" font-family="{MONO}" font-size="12" fill="{t["muted"]}">live audio in</text>
  <g>
    {waveform_bars(t)}
  </g>
  {pipeline_chips(t)}
  {transcript_line(t)}
</svg>
"""


def main() -> None:
    ASSETS.mkdir(exist_ok=True)
    for theme in THEMES:
        (ASSETS / f"header-{theme}.svg").write_text(build(theme), encoding="utf-8")
    print(f"Wrote header-dark.svg and header-light.svg to {ASSETS}")


if __name__ == "__main__":
    main()
