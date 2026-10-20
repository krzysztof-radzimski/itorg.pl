import type { SiteProps } from "@/content/site";
import { fixOrphans } from "@/lib/typography";
import { ArrowRightIcon } from "./Icons";
import ProductLogo from "./ProductLogo";

export default function Orion({ site, locale }: SiteProps) {
  const { orion } = site;
  return (
    <section className="section section--light" id="orion" tabIndex={-1} aria-labelledby="orion-title">
      <div className="container orion__grid">
        <div>
          <ProductLogo product="orion-ai" eager />
          <p className="eyebrow">{orion.eyebrow}</p>
          <hr className="rule" />
          <h1 className="section__title" id="orion-title">{orion.title}</h1>
        </div>
        <div className="orion__card">
          <p className="about__lead">{fixOrphans(orion.lead, locale)}</p>
          <p className="about__p">{fixOrphans(orion.description, locale)}</p>
          <a className="btn btn--brand" href="https://orion.abcpro.pl/">{orion.cta} <ArrowRightIcon /></a>
        </div>
      </div>
    </section>
  );
}
