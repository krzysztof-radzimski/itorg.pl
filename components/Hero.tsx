import type { SiteProps } from "@/content/site";
import { yearsSince } from "@/lib/typography";
import { ArrowRightIcon } from "./Icons";
import BrandMotif from "./BrandMotif";

// Liczba lat jest wyliczana podczas eksportu statycznego.
export default function Hero({ site }: SiteProps) {
  const years = yearsSince(site.company.foundedYear);
  const subtitle = site.hero.subtitle.replace("{years}", String(years));

  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <hr className="rule" />
          <p className="eyebrow hero__eyebrow">{site.hero.eyebrow}</p>
          <h1 className="hero__title" id="hero-title">
            {site.hero.titleLead}{" "}
            <span className="hero__title-accent">{site.hero.titleAccent}</span>
          </h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__cta-row">
            <a className="btn btn--brand" href="#kontakt">
              {site.hero.primaryCta} <ArrowRightIcon />
            </a>
            <a className="btn btn--ghost" href="#uslugi">
              {site.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <BrandMotif />
        </div>
      </div>

    </section>
  );
}
