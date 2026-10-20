import type { SiteProps } from "@/content/site";
import { homePath, navigationHref, productsPath, type PageId } from "@/lib/locales";
import { MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";
import Disclosure from "./Disclosure";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ site, locale, page = "home" }: SiteProps & { page?: PageId }) {
  const links = site.nav.filter((item) => item.href !== "#kontakt");
  const href = (value: string) => navigationHref(value, locale, page === "home");
  const current = (value: string) => value === productsPath(locale) && page !== "home" && page !== "privacy"
    ? page === "products" ? "page" as const : "location" as const : undefined;
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href={page === "home" ? "#top" : homePath(locale)} aria-label={`${site.brand.legalName}: ${site.ui.home}`}>
          <img src="/logo.svg" alt="" width={32} height={32} />
          <span className="nav__wordmark">{site.brand.name}</span>
        </a>
        <nav className="nav__links" aria-label={site.ui.mainNav}>
          {links.map((item) => <a key={item.href} className="nav__link" href={href(item.href)} aria-current={current(item.href)}>{item.label}</a>)}
          <a className="nav__cta" href={href("#kontakt")}>{site.contact.eyebrow} <ArrowRightIcon /></a>
        </nav>
        <div className="nav__tools">
          <LanguageSwitcher site={site} locale={locale} page={page} />
          <Disclosure className="nav__disclosure" summary={
            <><MenuIcon className="nav__menu-icon" /><CloseIcon className="nav__close-icon" /><span className="sr-only">{site.ui.menu}</span></>
          }>
            <nav className="nav__mobile" aria-label={site.ui.mainNav}>
              {site.nav.map((item) => <a key={item.href} href={href(item.href)} aria-current={current(item.href)}>{item.label}</a>)}
            </nav>
          </Disclosure>
        </div>
      </div>
    </header>
  );
}
