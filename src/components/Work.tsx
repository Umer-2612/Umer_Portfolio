import { projects } from "../content";
import { ArrowUpRight } from "./ui";
import { Visual } from "./Visuals";

export function Work() {
  return (
    <div className="wrap fit">
      <h1 className="display page-title">Two things I built. Both public.</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.id} className="card proj">
            <Visual kind={p.visual} />
            <div className="proj-body">
              <span className="mono accent">{p.kind}</span>
              <h2 className="display">{p.name}</h2>
              <p className="sum">{p.summary}</p>
              <p className="det">{p.detail}</p>
              <ul className="chips mono">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="links">
                {p.live && (
                  <a className="live mono" href={p.live.href} target="_blank" rel="noopener noreferrer">
                    <span className="dot" aria-hidden="true" />
                    {p.live.label}
                  </a>
                )}
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
