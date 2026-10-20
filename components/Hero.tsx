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
      <svg className="hero__traces" viewBox="0 0 1440 760" preserveAspectRatio="xMaxYMid slice" fill="none" aria-hidden="true" focusable="false">
        <g className="hero__ribbon hero__ribbon--berry">
          <path className="hero__ribbon-fill" d="M610-160 1150 380 710 820" />
          <path className="hero__ribbon-edge" d="M650-160 1190 380 750 820" />
        </g>
        <g className="hero__ribbon hero__ribbon--blue">
          <path className="hero__ribbon-fill" d="M780-160 1320 380 880 820" />
          <path className="hero__ribbon-edge" d="M820-160 1360 380 920 820" />
        </g>
        <g className="hero__ribbon hero__ribbon--violet">
          <path className="hero__ribbon-fill" d="M950-160 1490 380 1050 820" />
          <path className="hero__ribbon-edge" d="M990-160 1530 380 1090 820" />
        </g>
        <g className="hero__ribbon hero__ribbon--leaf">
          <path className="hero__ribbon-fill" d="M1120-160 1660 380 1220 820" />
          <path className="hero__ribbon-edge" d="M1160-160 1700 380 1260 820" />
        </g>
      </svg>
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
          <BrandMotif dimensional />
        </div>
      </div>

    </section>
  );
}
