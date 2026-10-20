import type { SiteProps } from "@/content/site";
import { MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";
import Disclosure from "./Disclosure";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ site, locale }: SiteProps) {
  const links = site.nav.filter((item) => item.href !== "#kontakt");
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${site.brand.legalName} — ${site.ui.home}`}>
          <img src="/logo.svg" alt="" width={32} height={32} />
          <span className="nav__wordmark">{site.brand.name}</span>
        </a>
        <nav className="nav__links" aria-label={site.ui.mainNav}>
          {links.map((item) => <a key={item.href} className="nav__link" href={item.href}>{item.label}</a>)}
          <a className="nav__cta" href="#kontakt">{site.contact.eyebrow} <ArrowRightIcon /></a>
        </nav>
        <div className="nav__tools">
          <LanguageSwitcher site={site} locale={locale} />
          <Disclosure className="nav__disclosure" summary={
            <><MenuIcon className="nav__menu-icon" /><CloseIcon className="nav__close-icon" /><span className="sr-only">{site.ui.menu}</span></>
          }>
            <nav className="nav__mobile" aria-label={site.ui.mainNav}>
              {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </nav>
          </Disclosure>
        </div>
      </div>
    </header>
  );
}
