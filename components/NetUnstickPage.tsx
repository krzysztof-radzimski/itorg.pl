import { getNetUnstickScreenshot, netunstick } from "@/content/netunstick";
import { getSite } from "@/content/translations";
import { homePath, productsPath, type Locale } from "@/lib/locales";
import { fixOrphans } from "@/lib/typography";
import { netunstickStoreUrls } from "@/lib/netunstick-store.mjs";
import Nav from "./Nav";
import Footer from "./Footer";

export default function NetUnstickPage({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const copy = netunstick[locale];
  const screenshot = getNetUnstickScreenshot(locale);
  const documentLocale = locale === "pl" || locale === "es" ? locale : "en";
  const documents = netunstickStoreUrls[documentLocale];
  return (
    <>
      <a href="#main" className="skip-link">{site.ui.skip}</a>
      <Nav site={site} locale={locale} page="netunstick" />
      <main id="main" className="product-page" tabIndex={-1}>
        <nav className="container breadcrumbs" aria-label={site.products.breadcrumb}>
          <ol>
            <li><a href={homePath(locale)}>{site.ui.home}</a></li>
            <li><a href={productsPath(locale)}>{site.products.title}</a></li>
            <li><span aria-current="page">NetUnstick</span></li>
          </ol>
        </nav>
        <section className="section netunstick" aria-labelledby="netunstick-title">
          <div className="container netunstick__layout">
            <div className="netunstick__copy">
              <div className="netunstick__identity">
                <img className="netunstick__icon" src="/NetUnstick/icon.png" alt="" width={64} height={64} />
                <div>
                  <p className="eyebrow">{copy.category}</p>
                  <h1 className="netunstick__title" id="netunstick-title">NetUnstick</h1>
                </div>
              </div>
              <p className="netunstick__tagline">{fixOrphans(copy.tagline, locale)}</p>
              <p className="netunstick__description">{fixOrphans(copy.description, locale)}</p>
              <ul className="netunstick__features">
                {copy.features.map((feature) => <li key={feature}>{fixOrphans(feature, locale)}</li>)}
              </ul>
              <p className="netunstick__description">{fixOrphans(copy.scope, locale)}</p>
              <div className="netunstick__purchase">
                <p className="netunstick__availability">{copy.availability}</p>
                <p className="netunstick__price">{new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(0.99)} <span>USD</span></p>
                <p>{copy.purchase}</p>
                <p>{copy.devices}</p>
                <p>{copy.requirement}</p>
              </div>
              <div className="netunstick__links">
                <a href={new URL(documents.support).pathname} hrefLang={documentLocale}>{copy.support}</a>
                <a href={new URL(documents.privacy).pathname} hrefLang={documentLocale}>{copy.privacy}</a>
              </div>
            </div>
            <figure className="netunstick__screen">
              <img src={screenshot.src} alt={copy.screenshot} width={screenshot.width} height={screenshot.height} fetchPriority="high" />
              {copy.screenshotNote && <figcaption>{copy.screenshotNote}</figcaption>}
            </figure>
          </div>
        </section>
      </main>
      <Footer site={site} locale={locale} />
    </>
  );
}
