import type { SiteProps } from "@/content/site";
import { yearsSince } from "@/lib/typography";
import { ArrowRightIcon, CheckIcon } from "./Icons";

// Komponent serwerowy — brak interaktywności. Tło (aurora + siatka) jest czysto
// CSS-owe, więc liczba lat zostaje wyliczona i zapisana w statycznym HTML.
export default function Hero({ site }: SiteProps) {
  const years = yearsSince(site.company.foundedYear);
  const subtitle = site.hero.subtitle.replace("{years}", String(years));

  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__aurora" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <img className="hero__logo" src="/logo.svg" alt="" width={64} height={64} />
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

        {/* Dekoracyjny panel „produktowy" — odzwierciedla kompetencje firmy. */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <div className="hero__panel-head">
              <img src="/logo.svg" alt="" width={26} height={26} />
              <span className="hero__panel-name">ITORG · {site.ui.platform}</span>
              <span className="hero__panel-dot" />
            </div>
            <ul className="hero__panel-list">
              {site.services.items.map((s) => (
                <li key={s.title}>
                  <span className="hero__panel-check">
                    <CheckIcon />
                  </span>
                  {s.title}
                </li>
              ))}
            </ul>
            <div className="hero__panel-meter">
              <span />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
