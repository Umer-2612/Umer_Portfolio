import type { Project } from "../content";

/** Small illustration at the top of each project card. Drawn from what each README describes. */
export function Visual({ kind }: { kind: Project["visual"] }) {
  if (kind === "terminal") {
    return (
      <div className="viz term mono" role="img" aria-label="A test run failing because a character came back garbled">
        <div><span className="mute">$</span> mcp-eval-gate run</div>
        <div className="bad">FAIL read_file</div>
        <div className="mute">&nbsp;&nbsp;expected the character 界</div>
        <div className="mute">&nbsp;&nbsp;got garbled characters</div>
      </div>
    );
  }
  return (
    <div className="viz wave" role="img" aria-label="Sound waves turning into text">
      <div className="bars" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <b key={i} style={{ animationDelay: `${(i % 7) * 0.12}s` }} />
        ))}
      </div>
      <span className="mono">&ldquo;so the answer is&hellip;&rdquo;</span>
    </div>
  );
}
