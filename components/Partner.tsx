import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import { productsPath } from "@/lib/locales";
import { ArrowRightIcon } from "./Icons";

export default function Partner({ site, locale }: SiteProps) {
  const { partner } = site;

  return (
    <section className="section section--tint" id="partner" tabIndex={-1} aria-labelledby="partner-title">
      <div className="container">
        <div className="partner__grid">
          <div>
            <img className="partner__logo" src="/partners/abc-pro.svg" alt="ABC PRO" width={200} height={40} loading="lazy" />
            <p className="eyebrow">{partner.eyebrow}</p>
            <hr className="rule" />
            <h2 className="section__title" id="partner-title">{partner.title}</h2>
          </div>
          <div>
            <p className="partner__lead">{fixOrphans(partner.intro, locale)}</p>
            <a className="link" href={productsPath(locale)}>{site.products.cta} <ArrowRightIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
