import { site } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import Reveal from "./Reveal";

const { about, company } = site;

const facts = [
  { k: "Założona", v: String(company.foundedYear) },
  { k: "Właściciel", v: "Krzysztof Radzimski" },
  { k: "Siedziba", v: company.city },
  { k: "Specjalizacja", v: "Legislacja · EZD · integracje" },
  { k: "Partner", v: "ABC PRO Sp. z o.o." },
];

export default function About() {
  return (
    <section className="section section--light" id="o-firmie">
      <div className="container">
        <Reveal>
          <div className="about__grid">
            <div className="about__body">
              <p className="eyebrow">{about.eyebrow}</p>
              <hr className="rule" />
              <h2 className="section__title">{about.title}</h2>
              <p className="about__lead">{fixOrphans(about.lead)}</p>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="about__p">
                  {fixOrphans(p)}
                </p>
              ))}
            </div>

            <aside className="about__aside" aria-label="Firma w skrócie">
              <div className="facts-card">
                <span className="facts-card__eyebrow">W skrócie</span>
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
