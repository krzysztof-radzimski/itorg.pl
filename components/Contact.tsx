import type { SiteProps } from "@/content/site";
import Reveal from "./Reveal";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  MailboxIcon,
  IdIcon,
  BankIcon,
} from "./Icons";

export default function Contact({ site }: SiteProps) {
  const { contact, company, ui } = site;
  return (
    <section className="section section--dark" id="kontakt" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__intro">
            <p className="eyebrow">{contact.eyebrow}</p>
            <hr className="rule" />
            <h2 className="section__title" id="contact-title">{contact.title}</h2>
            <p className="section__subtitle">{contact.subtitle}</p>
            <div className="contact__cta">
              <a className="btn btn--brand" href={`mailto:${company.email}`}>
                <MailIcon /> {ui.writeEmail}
              </a>
              <a className="btn btn--ghost" href={`tel:${company.phoneHref}`}>
                <PhoneIcon /> {company.phoneDisplay}
              </a>
            </div>
          </div>

          <Reveal>
            <address className="contact__cards">
              <div className="contact-item">
                <span className="contact-item__icon">
                  <MapPinIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.address}</span>
                  <span className="contact-item__value">
                    {company.street}
                    <br />
                    {company.postcode} {company.city}
                    <br />{company.country}
                  </span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon">
                  <PhoneIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.phone}</span>
                  <a className="contact-item__value link-plain" href={`tel:${company.phoneHref}`}>
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon">
                  <MailIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.email}</span>
                  <a className="contact-item__value link-plain" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon">
                  <MailboxIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.eDelivery}</span>
                  <span className="contact-item__value contact-item__value--mono">
                    {company.eDoreczenia}
                  </span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon">
                  <IdIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.registration}</span>
                  <span className="contact-item__value">
                    NIP: {company.nip}
                    <br />
                    REGON: {company.regon}
                  </span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__icon">
                  <BankIcon />
                </span>
                <div className="contact-item__body">
                  <span className="contact-item__label">{ui.bank}</span>
                  <span className="contact-item__value">
                    {company.bankName}
                    <br />
                    <span className="contact-item__value--mono">{company.bankAccount}</span>
                  </span>
                </div>
              </div>
            </address>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
