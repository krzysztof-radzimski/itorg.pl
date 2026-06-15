import { site } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./Icons";

export default function Partner() {
  const { partner } = site;

  return (
    <section className="section section--tint" id="partner">
      <div className="container">
        <div className="partner__grid">
          <div className="partner__intro">
            <p className="eyebrow">{partner.eyebrow}</p>
            <hr className="rule" />
            <h2 className="section__title">{partner.title}</h2>
            <p className="partner__lead">{fixOrphans(partner.intro)}</p>
            <p className="partner__note">{fixOrphans(partner.note)}</p>
            <a
              className="link"
              href="https://www.abcpro.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Poznaj ofertę ABC PRO <ArrowRightIcon />
            </a>
          </div>

          <ul className="partner__products">
            {partner.products.map((p, i) => (
              <Reveal as="li" className="product-card" delay={i * 60} key={p.name}>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{fixOrphans(p.desc)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
