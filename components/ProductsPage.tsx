import { getSite } from "@/content/translations";
import { productPath, type Locale } from "@/lib/locales";
import { getProducts } from "@/lib/products";
import { fixOrphans } from "@/lib/typography";
import ProductLayout from "./ProductLayout";
import { ArrowRightIcon } from "./Icons";

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
          <h1 className="section__title" id="products-title">{site.products.title}</h1>
          <p className="section__subtitle">{fixOrphans(site.products.intro, locale)}</p>
          {groups.map((group) => (
            <section className="products-group" key={group.title} aria-label={group.title}>
              <h2 className="products-group__title">{group.title}</h2>
              <ul className="products-grid">
                {group.items.map((product) => (
                  <li className="product-card" key={product.id}>
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__desc">{fixOrphans(product.summary, locale)}</p>
                    <a className="link" href={productPath(locale, product.id)}>
                      {site.products.details}<span className="sr-only">: {product.name}</span> <ArrowRightIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </ProductLayout>
  );
}
