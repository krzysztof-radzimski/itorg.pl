import type { Locale } from "@/lib/locales";
import { getSite } from "@/content/translations";
import Nav from "./Nav";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Services from "./Services";
import Legislator from "./Legislator";
import Values from "./Values";
import Partner from "./Partner";
import Orion from "./Orion";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const props = { site, locale };
  return (
    <>
      <a href="#main" className="skip-link">{site.ui.skip}</a>
      <Nav {...props} />
      <main id="main" tabIndex={-1}>
        <Hero {...props} />
        <Stats {...props} />
        <About {...props} />
        <Services {...props} />
        <Legislator {...props} />
        <Values {...props} />
        <Partner {...props} />
        <Orion {...props} />
        <Contact {...props} />
      </main>
      <Footer {...props} />
    </>
  );
}
