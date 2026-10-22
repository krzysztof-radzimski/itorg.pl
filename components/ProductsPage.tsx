import { getSite } from "@/content/translations";
import { netunstick } from "@/content/netunstick";
import { pagePath, productPath, type Locale } from "@/lib/locales";
import { getProducts } from "@/lib/products";
import { fixOrphans } from "@/lib/typography";
import ProductLayout from "./ProductLayout";
import { ArrowRightIcon } from "./Icons";
import ProductLogo from "./ProductLogo";
import BrandMotif from "./BrandMotif";

export default function ProductsPage({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const products = getProducts(site);
  const groups = [
    { title: site.products.developmentTitle, items: products.slice(0, 2) },
    { title: site.products.partnerTitle, items: products.slice(2) },
  ];
  return (
    <ProductLayout site={site} locale={locale} page="products">
      <section className="section section--light" aria-labelledby="products-title">
        <div className="container">
          <div className="catalog-intro">
            <div>
              <hr className="rule" />
              <h1 className="section__title" id="products-title">{site.products.title}</h1>
              <p className="section__subtitle">{fixOrphans(site.products.intro, locale)}</p>
            </div>
            <BrandMotif className="catalog-intro__motif" dimensional />
          </div>
          {groups.map((group, index) => (
            <section className="products-group" key={group.title} aria-label={group.title}>
              <h2 className="products-group__title">{group.title}</h2>
              <ul className={`products-grid${index === 1 ? " products-grid--secondary" : ""}`}>
                {group.items.map((product) => (
                  <li className="product-card" key={product.id}>
                    <a className="product-card__link" href={productPath(locale, product.id)}>
                      <ProductLogo product={product.id} />
                      <h3 className="product-card__name" id={`product-${product.id}`}>{product.name}</h3>
                      <p className="product-card__desc">{fixOrphans(product.summary, locale)}</p>
                      <span className="product-card__action">{site.products.details} <ArrowRightIcon /></span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="products-group" aria-labelledby="mac-apps-title">
            <h2 className="products-group__title" id="mac-apps-title">{netunstick[locale].category}</h2>
            <a className="netunstick-card" href={pagePath(locale, "netunstick")}>
              <img src="/NetUnstick/icon.png" alt="" width={64} height={64} />
              <div>
                <h3 className="product-card__name">NetUnstick</h3>
                <p className="product-card__desc">{netunstick[locale].tagline}</p>
              </div>
              <span className="netunstick-card__action">{site.products.details} <ArrowRightIcon /></span>
            </a>
          </section>
        </div>
      </section>
    </ProductLayout>
  );
}
