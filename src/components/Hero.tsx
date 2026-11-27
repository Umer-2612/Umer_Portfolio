import { hero, meta, proofStrip } from "../content";
import type { PageId } from "../pages";
import { ArrowRight, navClick, withBrand } from "./ui";

export function Home({ go }: { go: (id: PageId) => void }) {
  return (
    <div className="wrap fit">
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <p className="mono status">
            <span className="dot" aria-hidden="true" />
            <span>{hero.status}</span>
          </p>
          <h1 id="hero-h" className="display">
            <span className="hello">{hero.greeting}</span> {hero.headline}
          </h1>
          <p className="lede">{withBrand(hero.intro)}</p>
          <div className="cta">
            <a className="btn solid" href="/work" onClick={navClick(go, "work")}>
              See my work <ArrowRight />
            </a>
            <a className="btn" href={meta.cv} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
          <ul className="badges mono">
            {hero.badges.map((b) => (
              <li key={b} className={b.includes("Apple") ? "badge-apple" : undefined}>{withBrand(b)}</li>
            ))}
          </ul>
        </div>

        <figure className="portrait">
          <img src="/umer.jpg" alt="Umer Karachiwala in graduation gown, holding his MSc diploma" width={800} height={1000} fetchPriority="high" />
          <figcaption className="tag t1 mono">Software engineer</figcaption>
          <figcaption className="tag t2 mono">Dublin, Ireland</figcaption>
        </figure>
      </section>

      <section className="proof" aria-label="At a glance">
        {proofStrip.map((p) => (
          <div key={p.l}>
            <b className="display">{p.v}</b>
            <span>{withBrand(p.l)}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
