"use client";

// Lekki, własny magazyn zgód na pliki cookie (bez zewnętrznego CMP).
//
// Strona nie ustawia obecnie żadnych własnych plików analitycznych,
// marketingowych ani społecznościowych — ładuje wyłącznie zasoby z własnej
// domeny. Granularne kategorie poniżej odzwierciedlają wymóg prawny (zgoda
// uprzednia, równoważne „Akceptuj" i „Odrzuć", możliwość zmiany w każdej
// chwili) i są gotowe na ewentualne przyszłe narzędzia. Wybór zapisujemy w
// localStorage. Niezbędne, technicznie konieczne cookie (np. zabezpieczenia
// Cloudflare) są zwolnione z obowiązku zgody i nie podlegają tym przełącznikom.

import { useEffect, useState } from "react";

export type ConsentCategory = "necessary" | "marketing" | "analytics" | "social";

export interface ConsentPrefs {
  necessary: true; // zawsze włączone — niezbędne do działania serwisu
  marketing: boolean;
  analytics: boolean;
  social: boolean;
}

const KEY = "itorg-cookie-consent-v1";
const CHANGE = "consent:change";
const OPEN = "consent:open";

export const NECESSARY_LOCKED: ConsentPrefs["necessary"] = true;

export function acceptedAll(): ConsentPrefs {
  return { necessary: true, marketing: true, analytics: true, social: true };
}

export function rejectedAll(): ConsentPrefs {
  return { necessary: true, marketing: false, analytics: false, social: false };
}

export function getConsent(): ConsentPrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentPrefs>;
    return {
      necessary: true,
      marketing: !!parsed.marketing,
      analytics: !!parsed.analytics,
      social: !!parsed.social,
    };
  } catch {
    return null;
  }
}

export function setConsent(prefs: ConsentPrefs): void {
  const value: ConsentPrefs = { ...prefs, necessary: true };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* tryb prywatny / wyłączony storage — uszanowane tylko w tej sesji */
  }
  window.dispatchEvent(new CustomEvent<ConsentPrefs>(CHANGE, { detail: value }));
}

// Ponowne otwarcie panelu, aby odwiedzający mógł zmienić wcześniejszą decyzję.
export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN));
}

export function onConsentChange(cb: (v: ConsentPrefs) => void): () => void {
  const h = (e: Event) => cb((e as CustomEvent<ConsentPrefs>).detail);
  window.addEventListener(CHANGE, h);
  return () => window.removeEventListener(CHANGE, h);
}

export function onConsentOpen(cb: () => void): () => void {
  window.addEventListener(OPEN, cb);
  return () => window.removeEventListener(OPEN, cb);
}

// Hook Reacta: bieżąca zgoda, synchronizowana między komponentami i kartami.
export function useConsent(): ConsentPrefs | null {
  const [value, setValue] = useState<ConsentPrefs | null>(null);
  useEffect(() => {
    setValue(getConsent());
    return onConsentChange(setValue);
  }, []);
  return value;
}
