import { getSite } from "@/content/translations";
import type { Locale, ProductId } from "@/lib/locales";
import { getProduct } from "@/lib/products";
import { fixOrphans } from "@/lib/typography";
import ProductLayout from "./ProductLayout";
import Legislator from "./Legislator";
import Orion from "./Orion";
import { ArrowRightIcon } from "./Icons";
import ProductLogo from "./ProductLogo";

export default function ProductPage({ locale, product: id }: { locale: Locale; product: ProductId }) {
  const site = getSite(locale);
  const props = { site, locale };
  const product = getProduct(site, id);
  return (
    <ProductLayout {...props} page={id}>
      {id === "eap-legislator" ? <Legislator {...props} />
        : id === "orion-ai" ? <Orion {...props} />
        : <section className="section section--light" aria-labelledby="product-title">
          <div className="container product-detail">
            <ProductLogo product={id} eager />
            <p className="eyebrow">ABC PRO</p>
            <h1 className="section__title" id="product-title">{product.name}</h1>
            <p className="about__lead">{fixOrphans(product.summary, locale)}</p>
            <p className="about__p">{fixOrphans(site.partner.intro, locale)}</p>
            <a className="btn btn--brand" href={product.href}>{product.cta} <ArrowRightIcon /></a>
          </div>
        </section>}
    </ProductLayout>
  );
}
