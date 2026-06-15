import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Przejdź do treści
      </a>
      <Nav />
      <Hero />
      <main id="main" tabIndex={-1}>
        <Stats />
        <About />
        <Services />
        <Values />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
