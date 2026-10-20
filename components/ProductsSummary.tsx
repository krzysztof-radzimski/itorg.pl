import type { SiteProps } from "@/content/site";
import { productsPath, productPath } from "@/lib/locales";
import { fixOrphans } from "@/lib/typography";
import { ArrowRightIcon } from "./Icons";
import ProductLogo from "./ProductLogo";

export default function ProductsSummary({ site, locale }: SiteProps) {
  return (
    <section className="section section--tint" id="produkty" tabIndex={-1} aria-labelledby="products-summary-title">
      <div className="container products-summary">
        <div>
          <hr className="rule" />
          <h2 className="section__title" id="products-summary-title">{site.products.title}</h2>
          <p className="section__subtitle">{fixOrphans(site.products.intro, locale)}</p>
        </div>
        <div>
          <ul className="products-summary__links">
            <li><a className="product-teaser" id="legislator" href={productPath(locale, "eap-legislator")}><ProductLogo product="eap-legislator" /><span>{site.legislator.title}</span><ArrowRightIcon /></a></li>
            <li><a className="product-teaser" id="orion" href={productPath(locale, "orion-ai")}><ProductLogo product="orion-ai" /><span>{site.orion.title}</span><ArrowRightIcon /></a></li>
          </ul>
          <a className="link" href={productsPath(locale)}>{site.products.cta} <ArrowRightIcon /></a>
        </div>
      </div>
    </section>
  );
}
