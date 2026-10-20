import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import Reveal from "./Reveal";
import { ServiceIcon } from "./Icons";

export default function Services({ site, locale }: SiteProps) {
  const { services } = site;

  return (
    <section className="section section--light section--alt" id="uslugi" tabIndex={-1} aria-labelledby="services-title">
      <div className="container services-layout">
        <div className="section-head">
          <p className="eyebrow">{services.eyebrow}</p>
          <hr className="rule" />
          <h2 className="section__title" id="services-title">{services.title}</h2>
          <p className="section__subtitle">{services.subtitle}</p>
        </div>

        <ul className="services-grid">
          {services.items.map((s, i) => (
            <Reveal as="li" className="service-card" delay={i * 70} key={s.title}>
              <span className="service-card__icon">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{fixOrphans(s.desc, locale)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
