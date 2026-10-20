import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export default function Legislator({ site, locale }: SiteProps) {
  const { legislator } = site;
  return (
    <section className="section section--light" id="legislator" tabIndex={-1} aria-labelledby="legislator-title">
      <div className="container">
        <div className="legislator__overview">
          <div>
            <p className="eyebrow">{legislator.eyebrow}</p>
            <hr className="rule" />
            <h2 className="section__title" id="legislator-title">{legislator.title}</h2>
            <p className="legislator__lead">{fixOrphans(legislator.lead, locale)}</p>
            <p className="about__p">{fixOrphans(legislator.description, locale)}</p>
          </div>
          <ul className="legislator__features">
            {legislator.features.map((feature) => (
              <li className="legislator__feature" key={feature.title}>
                <span className="legislator__check" aria-hidden="true"><CheckIcon /></span>
                <div>
                  <h3 className="legislator__feature-title">{feature.title}</h3>
                  <p>{fixOrphans(feature.desc, locale)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="legislator__editions">
          {legislator.editions.map((edition) => (
            <li className="legislator__edition" key={edition.href}>
              <h3>{edition.name}</h3>
              <p>{fixOrphans(edition.desc, locale)}</p>
              <a className="link" href={edition.href}>{edition.cta}<ArrowRightIcon /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
