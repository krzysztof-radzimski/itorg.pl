"use client";

import { useEffect, useRef, useState } from "react";
import type { CookieCopy } from "@/content/legal/types";
import { getConsent, setConsent, onConsentOpen, type ConsentPrefs } from "@/lib/consent";
import { CookieIcon, ChevronDownIcon, CloseIcon } from "./Icons";

type OptKey = "analytics" | "marketing" | "social";
type OptPrefs = Record<OptKey, boolean>;
const DEFAULT_PREFS: OptPrefs = { analytics: false, marketing: false, social: false };

export default function CookieConsent({ copy, privacyUrl, closeLabel }: {
  copy: CookieCopy; privacyUrl: string; closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<OptPrefs>(DEFAULT_PREFS);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const existing = getConsent();
    if (existing) setPrefs(toOpt(existing));
    if (!existing) setOpen(true);
    return onConsentOpen(() => {
      const current = getConsent();
      setPrefs(current ? toOpt(current) : DEFAULT_PREFS);
      setExpanded(new Set());
      setOpen(true);
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    titleRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      // Na pierwszej wizycie fokus wraca na początek strony; przy ponownym
      // otwarciu — do przycisku, który wywołał panel.
      if (previousFocus?.isConnected && previousFocus !== document.body) previousFocus.focus();
      else document.querySelector<HTMLElement>(".skip-link")?.focus();
    };
  }, [open]);

  const persist = (value: OptPrefs) => {
    setConsent({ necessary: true, ...value });
    setPrefs(value);
    setOpen(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className="cc"
      aria-labelledby="cc-title"
      onCancel={() => setOpen(false)}
      onClose={(event) => { if (!event.currentTarget.open) setOpen(false); }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled])'
        )).filter((element) => element.getClientRects().length > 0);
        const first = items[0];
        const last = items.at(-1);
        if (event.shiftKey && (document.activeElement === first || document.activeElement === titleRef.current)) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      <div className="cc__panel">
        <div className="cc__head">
          <span className="cc__badge" aria-hidden="true"><CookieIcon /></span>
          <h2 id="cc-title" className="cc__title" tabIndex={-1} ref={titleRef}>{copy.title}</h2>
          <button type="button" className="cc__close" aria-label={closeLabel} onClick={() => setOpen(false)}><CloseIcon /></button>
        </div>
        <p className="cc__intro">{copy.intro} <a className="cc__link" href={privacyUrl}>{copy.privacy}</a></p>
        <ul className="cc__cats">
          {copy.categories.map((category) => {
            const locked = category.key === "necessary";
            const checked = locked || prefs[category.key as OptKey];
            const isOpen = expanded.has(category.key);
            return (
              <li className="cc__cat" key={category.key}>
                <div className="cc__cat-row">
                  <label className={`cc__toggle ${locked ? "is-locked" : ""}`}>
                    <input
                      type="checkbox" role="switch" className="cc__toggle-input"
                      checked={checked} disabled={locked}
                      onChange={(event) => setPrefs((value) => ({ ...value, [category.key]: event.target.checked }))}
                    />
                    <span className="cc__toggle-track" aria-hidden="true"><span className="cc__toggle-thumb" /></span>
                    <span className="cc__toggle-label">{category.name}{locked && <span className="cc__toggle-always">{copy.always}</span>}</span>
                  </label>
                  <button
                    type="button" className="cc__cat-more" aria-expanded={isOpen} aria-controls={`cc-cat-${category.key}`}
                    onClick={() => setExpanded((value) => {
                      const next = new Set(value);
                      next.has(category.key) ? next.delete(category.key) : next.add(category.key);
                      return next;
                    })}
                  >
                    <span className="sr-only">{isOpen ? copy.hide : copy.show}: {category.name}</span>
                    <ChevronDownIcon className={`cc__cat-chev ${isOpen ? "is-open" : ""}`} />
                  </button>
                </div>
                <div id={`cc-cat-${category.key}`} className="cc__cat-desc" hidden={!isOpen}><p>{category.desc}</p></div>
              </li>
            );
          })}
        </ul>
        <div className="cc__actions">
          <button type="button" className="btn btn--brand btn--sm" onClick={() => persist({ analytics: true, marketing: true, social: true })}>{copy.accept}</button>
          <button type="button" className="btn btn--solid btn--sm" onClick={() => persist(DEFAULT_PREFS)}>{copy.reject}</button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => persist(prefs)}>{copy.save}</button>
        </div>
      </div>
    </dialog>
  );
}

function toOpt(value: ConsentPrefs): OptPrefs {
  return { analytics: value.analytics, marketing: value.marketing, social: value.social };
}
