import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import Reveal from "./Reveal";

export default function Values({ site, locale }: SiteProps) {
  const { values } = site;

  return (
    <section className="section section--dark" id="wartosci" tabIndex={-1} aria-labelledby="values-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">{values.eyebrow}</p>
          <hr className="rule rule--center" />
          <h2 className="section__title" id="values-title">{values.title}</h2>
        </div>

        <ul className="values-grid">
          {values.items.map((v, i) => (
            <Reveal as="li" className="value-item" delay={i * 70} key={v.num}>
              <span className="value-item__num" aria-hidden="true">
                {v.num}
              </span>
              <div className="value-item__text">
                <h3 className="value-item__title">{v.title}</h3>
                <p className="value-item__desc">{fixOrphans(v.desc, locale)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
