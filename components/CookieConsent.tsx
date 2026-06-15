"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { getConsent, setConsent, onConsentOpen, type ConsentPrefs } from "@/lib/consent";
import { CookieIcon, ChevronDownIcon } from "./Icons";

type OptKey = "analytics" | "marketing" | "social";
type OptPrefs = Record<OptKey, boolean>;

interface Category {
  key: "necessary" | OptKey;
  name: string;
  locked: boolean;
  desc: string;
}

const CATEGORIES: Category[] = [
  {
    key: "necessary",
    name: "Niezbędne",
    locked: true,
    desc: "Zapewniają prawidłowe i bezpieczne działanie serwisu — m.in. zapamiętanie Twojej decyzji dotyczącej plików cookie oraz ochronę przed nadużyciami. Nie identyfikują konkretnego użytkownika i nie można ich wyłączyć.",
  },
  {
    key: "analytics",
    name: "Wydajnościowe i analityczne",
    locked: false,
    desc: "Pomagają zrozumieć, jak odwiedzający korzystają ze strony (anonimowe statystyki ruchu), abyśmy mogli ją ulepszać. Nie pozwalają na identyfikację konkretnej osoby.",
  },
  {
    key: "marketing",
    name: "Kierunkowe i reklamowe",
    locked: false,
    desc: "Pozwalają dopasować przekaz i ewentualne reklamy do zainteresowań, identyfikując wyłącznie przeglądarkę urządzenia, a nie konkretną osobę.",
  },
  {
    key: "social",
    name: "Media społecznościowe",
    locked: false,
    desc: "Umożliwiają udostępnianie treści w serwisach takich jak Facebook, X czy LinkedIn oraz powiązane z nimi funkcje. Kontrolę nad tymi plikami sprawują wspomniane platformy.",
  },
];

const DEFAULT_PREFS: OptPrefs = { analytics: false, marketing: false, social: false };

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<OptPrefs>(DEFAULT_PREFS);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const panelRef = useRef<HTMLDivElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  // Pierwsza wizyta → pokaż panel. Możliwość ponownego otwarcia ze stopki.
  useEffect(() => {
    const existing = getConsent();
    if (existing) setPrefs(toOpt(existing));
    if (existing === null) setOpen(true);

    return onConsentOpen(() => {
      const cur = getConsent();
      setPrefs(cur ? toOpt(cur) : DEFAULT_PREFS);
      setExpanded(new Set());
      setOpen(true);
    });
  }, []);

  // Dostępność: pułapka fokusu, Escape, blokada przewijania tła, przywrócenie fokusu.
  useEffect(() => {
    if (!open) return;
    prevFocus.current = (document.activeElement as HTMLElement) ?? null;

    const getFocusables = () =>
      panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    getFocusables()[0]?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      prevFocus.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  const persist = (p: OptPrefs) => {
    const value: ConsentPrefs = { necessary: true, ...p };
    setConsent(value);
    setOpen(false);
  };
  const decideAll = (all: boolean) => {
    const p: OptPrefs = { analytics: all, marketing: all, social: all };
    setPrefs(p);
    persist(p);
  };
  const toggleExpand = (i: number) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="cc" role="presentation">
      <div className="cc__overlay" onClick={() => setOpen(false)} />
      <div
        className="cc__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-title"
        aria-describedby="cc-desc"
        tabIndex={-1}
        ref={panelRef}
      >
        <div className="cc__head">
          <span className="cc__badge" aria-hidden="true">
            <CookieIcon />
          </span>
          <h2 id="cc-title" className="cc__title">
            Szanujemy Twoją prywatność
          </h2>
        </div>

        <p id="cc-desc" className="cc__intro">
          Używamy plików cookie, aby zapewnić prawidłowe działanie serwisu. Dodatkowe kategorie
          uruchomimy wyłącznie za Twoją zgodą i możesz ją zmienić w każdej chwili. Szczegóły w{" "}
          <a className="cc__link" href={site.legal.privacyUrl}>
            Polityce prywatności
          </a>
          .
        </p>

        <ul className="cc__cats">
          {CATEGORIES.map((cat, i) => {
            const checked = cat.locked ? true : prefs[cat.key as OptKey];
            const isOpen = expanded.has(i);
            return (
              <li className="cc__cat" key={cat.key}>
                <div className="cc__cat-row">
                  <label className={`cc__toggle ${cat.locked ? "is-locked" : ""}`}>
                    <input
                      type="checkbox"
                      role="switch"
                      className="cc__toggle-input"
                      checked={checked}
                      disabled={cat.locked}
                      onChange={(e) =>
                        !cat.locked &&
                        setPrefs((p) => ({ ...p, [cat.key]: e.target.checked }))
                      }
                    />
                    <span className="cc__toggle-track" aria-hidden="true">
                      <span className="cc__toggle-thumb" />
                    </span>
                    <span className="cc__toggle-label">
                      {cat.name}
                      {cat.locked && <span className="cc__toggle-always">Zawsze aktywne</span>}
                    </span>
                  </label>

                  <button
                    type="button"
                    className="cc__cat-more"
                    aria-expanded={isOpen}
                    aria-controls={`cc-cat-${i}`}
                    onClick={() => toggleExpand(i)}
                  >
                    <span className="sr-only">
                      {isOpen ? "Ukryj opis kategorii" : "Pokaż opis kategorii"}: {cat.name}
                    </span>
                    <ChevronDownIcon className={`cc__cat-chev ${isOpen ? "is-open" : ""}`} />
                  </button>
                </div>
                <div id={`cc-cat-${i}`} className="cc__cat-desc" hidden={!isOpen}>
                  <p>{cat.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="cc__actions">
          <button className="btn btn--brand btn--sm" onClick={() => decideAll(true)}>
            Akceptuj wszystkie
          </button>
          <button className="btn btn--solid btn--sm" onClick={() => decideAll(false)}>
            Odrzuć wszystkie
          </button>
          <button className="btn btn--ghost btn--sm" onClick={() => persist(prefs)}>
            Zapisz wybrane
          </button>
        </div>
      </div>
    </div>
  );
}

function toOpt(c: ConsentPrefs): OptPrefs {
  return { analytics: c.analytics, marketing: c.marketing, social: c.social };
}
