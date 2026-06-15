"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Zamknij menu mobilne klawiszem Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // CTA „Kontakt" prowadzi do sekcji kontaktu, więc nie powtarzamy jej w linkach.
  const links = site.nav.filter((item) => item.href !== "#kontakt");

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${site.brand.legalName} — strona główna`}>
          <img src="/logo.svg" alt="" width={36} height={36} />
          <span className="nav__wordmark">{site.brand.name}</span>
        </a>

        <nav className="nav__links" aria-label="Nawigacja główna">
          {links.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav__cta" href="#kontakt">
            Kontakt <ArrowRightIcon />
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="nav-mobile"
        className={`nav__mobile ${open ? "is-open" : ""}`}
        inert={open ? undefined : true}
      >
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#kontakt" onClick={() => setOpen(false)}>
          Kontakt
        </a>
      </div>
    </header>
  );
}
