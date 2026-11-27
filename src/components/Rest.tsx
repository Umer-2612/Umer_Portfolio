import { achievements, certGroups, education, meta, stack } from "../content";
import { ArrowUpRight, withBrand } from "./ui";

export function About() {
  return (
    <div className="wrap fit">
      <h1 className="display page-title">Tools, degrees, badges.</h1>
      <div className="three">
        <section className="card pad" aria-labelledby="stack-h">
          <h2 id="stack-h" className="mono accent">Stack</h2>
          <dl className="stack-list">
            {stack.map((g) => (
              <div key={g.group}>
                <dt className="mono">{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="card pad" aria-labelledby="edu-h">
          <h2 id="edu-h" className="mono accent">Education</h2>
          {education.map((e) => (
            <div className="row" key={e.degree}>
              <b>{e.degree}</b>
              <p>{e.school}</p>
              <p className="mono mute">{e.note}</p>
            </div>
          ))}
        </section>
        <section className="card pad" aria-labelledby="cert-h">
          <h2 id="cert-h" className="mono accent">Certified</h2>
          {certGroups.map((g) => (
            <div className="cert-group" key={g.issuer}>
              <span className="mono mute">{g.issuer}</span>
              <ul className="cert-links">
                {g.items.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="plain-list second">
            {achievements.map((a) => (
              <li key={a.text}>
                {a.href ? <a href={a.href} target="_blank" rel="noopener noreferrer">{withBrand(a.text)}</a> : withBrand(a.text)}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="wrap fit contact">
      <h1 className="display page-title">Let's talk.</h1>
      <a className="contact-mail" href={`mailto:${meta.email}`}>{meta.email}</a>
      <div className="cta">
        <a className="btn solid" href={meta.cv} target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="btn" href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a>
        <a className="btn" href={meta.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
        <a className="btn" href={meta.phoneHref}>{meta.phone}</a>
      </div>
    </div>
  );
}
