// ─────────────────────────────────────────────────────────────────────────
//  EDYTOWALNA TREŚĆ STRONY
//  Wszystkie teksty, dane firmowe i linki w jednym miejscu — zmieniaj tutaj,
//  bez dotykania komponentów.
// ─────────────────────────────────────────────────────────────────────────

import { cookies, privacy } from "./legal/pl";
import type { Locale } from "@/lib/locales";

export interface ServiceItem {
  icon: "legislation" | "automation" | "integration" | "digitization" | "ai";
  title: string;
  desc: string;
}

export interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

export interface PartnerProduct {
  name: string;
  desc: string;
}

export const FOUNDED_YEAR = 2009;

export const legislatorUrls = {
  editor: "https://abcpro.pl/eap-legislator",
  government: "https://abcpro.pl/legislator-gov",
  finance: "https://abcpro.pl/dodatek-bestia",
};

export const site = {
  brand: {
    name: "ITORG",
    legalName: "ITORG Krzysztof Radzimski",
    eyebrow: "Cyfryzacja administracji publicznej",
    tagline: "Oprogramowanie dla administracji publicznej.",
  },

  // Dane rejestrowe i kontaktowe — używane w sekcji Kontakt, stopce i polityce.
  company: {
    foundedYear: FOUNDED_YEAR,
    street: "ul. Szkolna 27A",
    postcode: "05-180",
    city: "Pomiechówek",
    country: "Polska",
    phoneDisplay: "+48 795 521 174",
    phoneHref: "+48795521174",
    email: "kr@itorg.pl",
    eDoreczenia: "AE:PL-13594-39261-RESHB-22",
    nip: "9531943265",
    regon: "340574864",
    bankName: "PKO BP S.A.",
    bankAccount: "70 1020 4476 0000 8102 0527 8215",
  },

  hero: {
    eyebrow: "Legislacja · obieg dokumentów · AI",
    titleLead: "Przemyślane rozwiązania",
    titleAccent: "dla administracji publicznej i biznesu",
    // {years} zostaje podmienione na liczbę lat działalności (od FOUNDED_YEAR).
    subtitle:
      "Od {years} lat tworzymy oprogramowanie do przygotowywania aktów prawnych, obiegu dokumentów i automatyzacji pracy urzędów.",
    primaryCta: "Skontaktuj się z nami",
    secondaryCta: "Zobacz usługi",
    scrollLabel: "Przewiń niżej",
  },

  // Liczba lat działalności wyliczana jest automatycznie z FOUNDED_YEAR.
  stats: [
    { kind: "years", number: "", suffix: "", label: "Lat działalności" },
    { kind: "static", number: "XML", suffix: "", label: "Akty prawne" },
    { kind: "static", number: "AI", suffix: "", label: "Praca z dokumentami" },
  ],

  about: {
    eyebrow: "O firmie",
    title: "Tworzymy i wdrażamy oprogramowanie",
    lead: "ITORG od 2009 roku projektuje, rozwija i wdraża oprogramowanie dla urzędów oraz instytucji publicznych.",
    paragraphs: [
      "Wspieramy przygotowywanie aktów prawnych, obsługę spraw i elektroniczny obieg dokumentów.",
      "Dla ABC PRO rozwijamy EAP Legislator, edytor uchwał, zarządzeń i innych aktów prawnych. Współpracujemy również przy wdrożeniach systemów tej firmy.",
      "Tworzymy narzędzia sztucznej inteligencji do pracy z dokumentami i analizowania informacji. Współpracujemy przy rozwoju platformy Orion firmy ABC PRO.",
    ],
  },

  services: {
    eyebrow: "Usługi",
    title: "W czym możemy pomóc",
    subtitle: "Projektujemy, rozwijamy i łączymy systemy używane w administracji publicznej.",
    items: [
      {
        icon: "legislation",
        title: "Elektronizacja prawa",
        desc: "Tworzymy i rozwijamy narzędzia do przygotowywania, podpisywania i przekazywania aktów prawnych.",
      },
      {
        icon: "automation",
        title: "Automatyzacja procesów",
        desc: "Automatyzujemy powtarzalne czynności w obsłudze spraw i obiegu dokumentów.",
      },
      {
        icon: "integration",
        title: "Integracje",
        desc: "Łączymy systemy, aby mogły wymieniać dane i korzystać ze wspólnych informacji.",
      },
      {
        icon: "digitization",
        title: "Oprogramowanie dla Samorządu",
        desc: "Projektujemy i wdrażamy aplikacje do obsługi spraw, dokumentów i usług publicznych.",
      },
      {
        icon: "ai",
        title: "Tworzenie narzędzi AI",
        desc: "Budujemy narzędzia sztucznej inteligencji do pracy z dokumentami, analizy informacji i automatyzacji zadań.",
      },
    ] as ServiceItem[],
  },

  values: {
    eyebrow: "Współpraca",
    title: "Jak pracujemy",
    items: [
      {
        num: "01",
        title: "Znajomość administracji",
        desc: "Rozwijamy systemy do legislacji i obiegu dokumentów. W projektach uwzględniamy procedury oraz sposób pracy urzędów.",
      },
      {
        num: "02",
        title: "Rozwój i utrzymanie",
        desc: "Rozwijamy oprogramowanie i wspieramy jego działanie po wdrożeniu.",
      },
      {
        num: "03",
        title: "Ochrona danych",
        desc: "Przy projektowaniu systemów uwzględniamy bezpieczeństwo danych i zasady dostępu do informacji.",
      },
      {
        num: "04",
        title: "Dopasowanie do urzędu",
        desc: "Projektujemy zmiany z uwzględnieniem potrzeb użytkowników i systemów, z których już korzystają.",
      },
    ] as ValueItem[],
  },

  legislator: {
    eyebrow: "Edytor aktów prawnych",
    title: "EAP Legislator",
    lead: "Edytor dla urzędów, które przygotowują uchwały, zarządzenia i inne akty prawne.",
    description: "ITORG rozwija EAP Legislator dla ABC PRO. Program wspiera przygotowanie projektu w XML, uzgodnienia, podpis elektroniczny i przekazanie aktu do publikacji lub nadzoru prawnego.",
    features: [
      { title: "Projekty w formacie XML", desc: "Szablony aktów i konwersja treści do XML pomagają przygotować dokument z zachowaniem jego struktury." },
      { title: "Uwagi i historia zmian", desc: "Komentarze, rejestr zmian i raporty pozwalają sprawdzić zgłoszone propozycje oraz sposób ich rozpatrzenia." },
      { title: "Podpis i wysyłka", desc: "Podpisuj dokumenty w edytorze i przekazuj je do publikacji lub nadzoru prawnego." },
    ],
    editions: [
      { name: "EAP Legislator", desc: "Edycje Standard, Premium i Legalis dla urzędów i instytucji przygotowujących akty prawne. Dostępne funkcje zależą od wybranej edycji.", cta: "Poznaj EAP Legislator", href: legislatorUrls.editor },
      { name: "Legislator dla administracji rządowej", desc: "Wersja dla ministerstw i urzędów centralnych, oparta na szablonie Rządowego Centrum Legislacji (RCL). Służy do przygotowania aktów kierowanych do Dziennika Ustaw i Monitora Polskiego.", cta: "Poznaj Legislator GOV", href: legislatorUrls.government },
      { name: "Finanse Publiczne — dodatek Besti@", desc: "Importuje dane XML z Besti@ do uchwał budżetowych, ich zmian, wieloletnich prognoz finansowych i sprawozdań. Na ich podstawie tworzy tabele do dokumentów przekazywanych do publikacji i nadzoru regionalnych izb obrachunkowych (RIO).", cta: "Poznaj dodatek Besti@", href: legislatorUrls.finance },
    ],
  },

  partner: {
    eyebrow: "Partnerstwo",
    title: "Współpraca z ABC PRO",
    intro:
      "Z ABC PRO Sp. z o.o. współpracujemy przy rozwoju i wdrażaniu oprogramowania do legislacji oraz obsługi dokumentów w administracji publicznej.",
    note: "Przykłady systemów ABC PRO:",
    products: [
      {
        name: "EAP Legislator",
        desc: "Edytor aktów prawnych w XML ze śledzeniem zmian, podpisem elektronicznym i przekazaniem dokumentu do ogłoszenia.",
      },
      {
        name: "Baza Aktów Własnych",
        desc: "Zbiór uchwał, zarządzeń i regulaminów organizacji z wyszukiwaniem, skorowidzami i połączeniem z bazą aktów normatywnych.",
      },
      {
        name: "ABC ANON",
        desc: "Narzędzie do ukrywania wybranych danych w plikach PDF, DOCX i skanach przed ich udostępnieniem.",
      },
      {
        name: "ABC Kancelaria",
        desc: "System elektronicznego zarządzania dokumentacją (EZD) do obsługi korespondencji, rejestrów oraz dokumentów papierowych i elektronicznych.",
      },
    ] as PartnerProduct[],
  },

  products: {
    title: "Produkty",
    intro: "Poznaj EAP Legislator, Orion AI i inne systemy ABC PRO do legislacji oraz pracy z dokumentami.",
    cta: "Zobacz produkty",
    details: "Zobacz opis",
    back: "Wszystkie produkty",
    developmentTitle: "Legislacja i AI",
    partnerTitle: "Pozostałe systemy ABC PRO",
    breadcrumb: "Ścieżka nawigacji",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o Twoim projekcie",
    subtitle:
      "Potrzebujesz oprogramowania do obsługi dokumentów, integracji systemów lub narzędzia AI? Napisz lub zadzwoń i opisz, co chcesz usprawnić.",
  },

  orion: {
    eyebrow: "Narzędzia AI",
    title: "Orion AI",
    lead: "Platforma sztucznej inteligencji firmy ABC PRO dla administracji i biznesu.",
    description: "ITORG współpracuje przy rozwoju Oriona i tworzy narzędzia AI do pracy z dokumentami, analizy informacji i automatyzacji zadań.",
    cta: "Poznaj platformę Orion AI",
  },

  footer: {
    tagline: "Elektronizacja prawa, obieg dokumentów i narzędzia AI.",
    privacy: "Polityka prywatności",
    cookieSettings: "Ustawienia plików cookie",
  },

  // Dane do polityki prywatności / ustawień cookie.
  legal: {
    privacyUrl: "/polityka-prywatnosci/",
    updated: "2026-10-20",
  },

  nav: [
    { label: "Usługi", href: "#uslugi" },
    { label: "Produkty", href: "/produkty/" },
    { label: "O firmie", href: "#o-firmie" },
    { label: "Współpraca", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  seo: {
    title: "ITORG — Oprogramowanie dla administracji publicznej",
    description:
      "Tworzymy i wdrażamy oprogramowanie dla urzędów: systemy legislacyjne, obieg dokumentów, integracje i narzędzia AI. Rozwijamy EAP Legislator dla ABC PRO.",
    url: "https://itorg.pl",
  },

  ui: {
    skip: "Przejdź do treści",
    home: "Strona główna",
    mainNav: "Nawigacja główna",
    footerNav: "Nawigacja w stopce",
    navigation: "Nawigacja",
    menu: "Menu",
    languages: "Wybierz język",
    language: "Język",
    facts: "Firma w skrócie",
    inBrief: "W skrócie",
    founded: "Założona",
    owner: "Właściciel",
    headquarters: "Siedziba",
    specialization: "Specjalizacja",
    specializationValue: "Legislacja · obieg dokumentów · integracje · AI",
    partner: "Partner",
    platform: "Usługi",
    partnerCta: "Poznaj ofertę ABC PRO",
    writeEmail: "Napisz e-mail",
    address: "Adres",
    phone: "Telefon",
    email: "E-mail",
    eDelivery: "e-Doręczenia",
    registration: "Dane rejestrowe",
    bank: "Konto bankowe",
    rights: "Wszystkie prawa zastrzeżone.",
    close: "Zamknij",
  },
  cookies,
  privacy,
};

export type Site = typeof site;
export type SiteProps = { site: Site; locale: Locale };
