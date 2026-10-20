import type { SiteProps } from "@/content/site";
import { productsPath, productPath } from "@/lib/locales";
import { fixOrphans } from "@/lib/typography";
import { ArrowRightIcon } from "./Icons";

export default function ProductsSummary({ site, locale }: SiteProps) {
  return (
    <section className="section section--tint" id="produkty" tabIndex={-1} aria-labelledby="products-summary-title">
      <div className="container products-summary">
        <div>
          <h2 className="section__title" id="products-summary-title">{site.products.title}</h2>
          <p className="section__subtitle">{fixOrphans(site.products.intro, locale)}</p>
        </div>
        <div>
          <a className="btn btn--brand" href={productsPath(locale)}>{site.products.cta} <ArrowRightIcon /></a>
          <ul className="products-summary__links">
            <li><a className="link" id="legislator" href={productPath(locale, "eap-legislator")}>{site.legislator.title} <ArrowRightIcon /></a></li>
            <li><a className="link" id="orion" href={productPath(locale, "orion-ai")}>{site.orion.title} <ArrowRightIcon /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
