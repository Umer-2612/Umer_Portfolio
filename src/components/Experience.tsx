import { experience } from "../content";
import { Rich, withBrand } from "./ui";

export function Experience() {
  return (
    <div className="wrap fit">
      <h1 className="display page-title">Three jobs. One goal: keep it fast.</h1>
      <div className="roles">
        {experience.map((r) => (
          <article key={`${r.company}-${r.from}`} className={`card role ${r.company === "Apple" ? "hl" : ""}`.trim()}>
            <span className="mono mute">
              {r.from} to {r.to} / {r.place}
            </span>
            <h2 className="display">{withBrand(r.company)}</h2>
            <div className="sub">{r.role}</div>
            <p className="plain">{r.plain}</p>
            <ul>
              {r.points.map((p) => (
                <li key={p}>
                  <Rich text={p} />
                </li>
              ))}
            </ul>
            <div className="stack mono">{r.stack}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
