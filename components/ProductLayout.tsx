import type { ReactNode } from "react";
import type { SiteProps } from "@/content/site";
import { homePath, productsPath, type ProductId } from "@/lib/locales";
import { getProduct } from "@/lib/products";
import Nav from "./Nav";
import Footer from "./Footer";
import { ArrowRightIcon } from "./Icons";

export default function ProductLayout({ site, locale, page, children }: SiteProps & {
  page: "products" | ProductId; children: ReactNode;
}) {
  const title = page === "products" ? site.products.title : getProduct(site, page).name;
  return (
    <>
      <a href="#main" className="skip-link">{site.ui.skip}</a>
      <Nav site={site} locale={locale} page={page} />
      <main id="main" className="product-page" tabIndex={-1}>
        <nav className="container breadcrumbs" aria-label={site.products.breadcrumb}>
          <ol>
            <li><a href={homePath(locale)}>{site.ui.home}</a></li>
            {page !== "products" && <li><a href={productsPath(locale)}>{site.products.title}</a></li>}
            <li><span aria-current="page">{title}</span></li>
          </ol>
        </nav>
        {children}
        <section className="section section--tint product-contact" aria-labelledby="product-contact-title">
          <div className="container">
            <h2 className="section__title" id="product-contact-title">{site.contact.title}</h2>
            <p className="section__subtitle">{site.contact.subtitle}</p>
            <a className="btn btn--brand" href={`${homePath(locale)}#kontakt`}>{site.hero.primaryCta} <ArrowRightIcon /></a>
          </div>
        </section>
      </main>
      <Footer site={site} locale={locale} />
    </>
  );
}
