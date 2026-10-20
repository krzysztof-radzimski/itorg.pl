import { homePath, type Locale } from "@/lib/locales";
import { getSite } from "@/content/translations";
import Footer from "./Footer";
import Nav from "./Nav";
import CookieSettingsButton from "./CookieSettingsButton";
import { ArrowRightIcon } from "./Icons";

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
      <Nav site={site} locale={locale} page="privacy" />
      <main id="main" className="section section--light legal-page" tabIndex={-1}>
        <div className="container">
          <article className="legal">
            <a className="legal__back" href={homePath(locale)}><ArrowRightIcon />{ui.home}</a>
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
                  <p><a className="link" href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/">{privacy.cloudflareCookies}</a></p>
                </>}
                {section.id === "recipients" && <p><a className="link" href="https://www.cloudflare.com/privacypolicy/">{privacy.cloudflare}</a></p>}
                {section.id === "transfers" && <p><a className="link" href="https://www.cloudflare.com/cloudflare-customer-dpa/">{privacy.cloudflareDpa}</a></p>}
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
