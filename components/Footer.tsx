import type { SiteProps } from "@/content/site";
import { navigationHref } from "@/lib/locales";
import { currentYear } from "@/lib/typography";
import CookieSettingsButton from "./CookieSettingsButton";
import { CookieIcon } from "./Icons";

export default function Footer({ site, locale }: SiteProps) {
  const { company } = site;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-top">
              <img src="/logo.svg" alt="" width={40} height={40} />
              <span className="footer__brand-name">{site.brand.name}</span>
            </div>
            <p className="footer__tagline">{site.footer.tagline}</p>
            <p className="footer__legalname">{site.brand.legalName}</p>
          </div>

          <nav className="footer__col" aria-label={site.ui.footerNav}>
            <h2 className="footer__h">{site.ui.navigation}</h2>
            {site.nav.map((n) => (
              <a key={n.href} href={navigationHref(n.href, locale)}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="footer__col">
            <h2 className="footer__h">{site.contact.eyebrow}</h2>
            <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span className="footer__addr">
              {company.street}, {company.postcode} {company.city}
            </span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-row">
          <p>
            © {company.foundedYear}–{currentYear()} {site.brand.legalName}. {site.ui.rights}
          </p>
          <p className="footer__legal">
            <a href={site.legal.privacyUrl}>{site.footer.privacy}</a>
            <span className="footer__legal-sep" aria-hidden="true">
              ·
            </span>
            <CookieSettingsButton className="footer__linkbtn">
              <CookieIcon className="footer__cookie-ico" />
              {site.footer.cookieSettings}
            </CookieSettingsButton>
          </p>
        </div>
      </div>
    </footer>
  );
}
