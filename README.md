# ITORG — itorg.pl

Strona firmowa **ITORG Krzysztof Radzimski** — innowacyjne rozwiązania IT dla
administracji publicznej (systemy legislacyjne, automatyzacja procesów,
integracje, cyfryzacja urzędów). Partner **ABC PRO Sp. z o.o.**

Nowoczesny, w pełni responsywny serwis z obsługą **WCAG 2.1 AA**, **trybu
jasnego/ciemnego** (wg preferencji przeglądarki) oraz **granularną zgodą na pliki
cookie** wymaganą prawem.

## Stos technologiczny

- **Next.js 15** (App Router) z `output: 'export'` → w pełni statyczna strona (`out/`)
- **React 19** + **TypeScript**
- **Cloudflare Pages** — hosting statyczny na brzegu sieci
- Ręcznie pisany **CSS z custom properties** (bez Tailwind), systemowy stos fontów
  (zero pobierania webfontów → szybkość i pełne wsparcie polskich znaków)
- Brak bazy danych i backendu do utrzymania

## Dostępność i prywatność

- Semantyczne znaczniki, punkt „Przejdź do treści", widoczny fokus klawiatury,
  kontrast kolorów ≥ 4.5:1 (tekst) / 3:1 (elementy graficzne)
- Tryb jasny/ciemny sterowany `prefers-color-scheme`; poszanowanie
  `prefers-reduced-motion`
- Panel cookie: równoważne „Akceptuj" / „Odrzuć", granularne kategorie, pułapka
  fokusu, obsługa Escape — zgodny z RODO i dyrektywą ePrivacy
- **Polityka prywatności**: `/polityka-prywatnosci/`

## Struktura

```
app/
  layout.tsx                  # metadane, SEO, theme-color (jasny/ciemny)
  page.tsx                    # kompozycja strony głównej
  globals.css                 # system projektowy „Aurora" (tokeny, tryb ciemny)
  polityka-prywatnosci/page.tsx
components/                    # Nav, Hero, Stats, About, Services, Values,
                              # Partner, Contact, Footer, CookieConsent, …
content/site.ts               # ⚙️ CAŁA EDYTOWALNA TREŚĆ — teksty i dane firmowe
lib/
  consent.ts                  # magazyn zgód cookie (localStorage)
  typography.ts               # sierotki + wyliczanie lat działalności
public/
  logo.svg  _headers          # logotyp + nagłówki bezpieczeństwa (CSP itd.)
```

## Edycja treści

Wszystkie teksty, dane rejestrowe, usługi i produkty partnera są w
**[`content/site.ts`](content/site.ts)** — zmieniasz tam ofertę bez dotykania
komponentów. Liczba lat działalności i rok w stopce wyliczają się automatycznie.

## Uruchomienie lokalne

```bash
npm install
npm run dev            # http://localhost:3000

# Podgląd produkcyjny (statyka jak na Cloudflare):
npm run preview        # = next build + wrangler pages dev out
```

## Deploy na Cloudflare Pages

**Wariant A — z linii poleceń (Wrangler):**

```bash
npm run deploy         # = next build + wrangler pages deploy out
```

**Wariant B — integracja z Git (zalecane):**

| Ustawienie | Wartość |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |

Plik `public/_headers` jest kopiowany do `out/` i ustawia nagłówki
bezpieczeństwa (CSP, X-Frame-Options itd.) na Cloudflare Pages.
