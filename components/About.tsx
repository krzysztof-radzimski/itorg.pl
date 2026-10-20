import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import Reveal from "./Reveal";

export default function About({ site, locale }: SiteProps) {
  const { about, company, ui } = site;
  const facts = [
    { k: ui.founded, v: String(company.foundedYear) },
    { k: ui.owner, v: "Krzysztof Radzimski" },
    { k: ui.headquarters, v: company.city },
    { k: ui.specialization, v: ui.specializationValue },
    { k: ui.partner, v: "ABC PRO Sp. z o.o." },
  ];
  return (
    <section className="section section--light" id="o-firmie" tabIndex={-1} aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <div className="about__grid">
            <div className="about__body">
              <p className="eyebrow">{about.eyebrow}</p>
              <hr className="rule" />
              <h2 className="section__title" id="about-title">{about.title}</h2>
              <p className="about__lead">{fixOrphans(about.lead, locale)}</p>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="about__p">
                  {fixOrphans(p, locale)}
                </p>
              ))}
            </div>

            <aside className="about__aside" aria-label={ui.facts}>
              <div className="facts-card">
                <span className="facts-card__eyebrow">{ui.inBrief}</span>
                <dl className="facts">
                  {facts.map((f) => (
                    <div className="facts__row" key={f.k}>
                      <dt className="facts__k">{f.k}</dt>
                      <dd className="facts__v">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
