import { homePath, type Locale } from "@/lib/locales";
import { getSite } from "@/content/translations";
import Footer from "./Footer";
import LanguageSwitcher from "./LanguageSwitcher";
import CookieSettingsButton from "./CookieSettingsButton";

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const { company, privacy, ui } = site;
  const contact = <>
    <a className="link" href={`mailto:${company.email}`}>{company.email}</a>
    {" · "}<a className="link" href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
  </>;
  return (
    <>
      <a href="#main" className="skip-link">{ui.skip}</a>
      <header className="subhead">
        <div className="container subhead__bar">
          <a className="subhead__brand" href={homePath(locale)} aria-label={`${site.brand.name} — ${ui.home}`}>
            <img src="/logo.svg" alt="" width={32} height={32} /><span>{site.brand.name}</span>
          </a>
          <a className="link" href={homePath(locale)}>{ui.home}</a>
          <LanguageSwitcher site={site} locale={locale} privacy />
        </div>
      </header>
      <main id="main" className="section section--light legal-page" tabIndex={-1}>
        <div className="container">
          <article className="legal">
            <p className="eyebrow">{privacy.document}</p>
            <h1 className="legal__title">{privacy.title}</h1>
            <p className="legal__updated">{privacy.updated}: <time dateTime={site.legal.updated}>
              {new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${site.legal.updated}T00:00:00Z`))}
            </time></p>
            <p>{privacy.intro}</p>
            {privacy.sections.map((section) => (
              <section key={section.id} aria-labelledby={`legal-${section.id}`}>
                <h2 id={`legal-${section.id}`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.id === "controller" && <address className="legal__address">
                  <strong>{site.brand.legalName}</strong><br />
                  {company.street}, {company.postcode} {company.city}, {company.country}<br />
                  NIP: {company.nip} · REGON: {company.regon}<br />
                  {contact}<br />{ui.eDelivery}: <code>{company.eDoreczenia}</code>
                </address>}
                {section.id === "cookies" && <>
                  <div className="legal__tablewrap">
                    <table className="legal__table">
                      <caption>{privacy.tableCaption}</caption>
                      <thead><tr>{privacy.tableHeaders.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
                      <tbody>{privacy.tableRows.map((row) => <tr key={row.name}>
                        <th scope="row">{row.name}</th><td>{row.purpose}</td><td>{row.basis}</td>
                      </tr>)}</tbody>
                    </table>
                  </div>
                  <p>{privacy.settings}</p>
                  <p><CookieSettingsButton className="link link--btn">{site.footer.cookieSettings}</CookieSettingsButton></p>
                </>}
                {section.id === "recipients" && <p><a className="link" href="https://www.cloudflare.com/privacypolicy/">{privacy.cloudflare}</a></p>}
                {section.id === "rights" && <p><a className="link" href="https://uodo.gov.pl/">{privacy.authority}</a></p>}
                {section.id === "contact" && <p>{contact}</p>}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer site={site} locale={locale} />
    </>
  );
}
