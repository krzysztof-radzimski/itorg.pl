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
      "Od {years} lat tworzymy oprogramowanie dopasowane do potrzeb samorządów, administracji rządowej i innych instytucji. Usprawniamy pracę z dokumentami, integrujemy systemy i automatyzujemy procesy.",
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
    lead: "ITORG od 2009 roku projektuje, rozwija i wdraża oprogramowanie dla jednostek samorządu terytorialnego, administracji rządowej i innych instytucji.",
    paragraphs: [
      "Wspieramy procesy legislacyjne, prowadzenie spraw oraz elektroniczne zarządzanie dokumentacją.",
      "Dla ABC PRO rozwijamy EAP Legislator, edytor uchwał, zarządzeń i innych aktów prawnych. Współpracujemy również przy wdrożeniach systemów tej firmy.",
      "Opracowujemy narzędzia wykorzystujące sztuczną inteligencję do przetwarzania dokumentów i analizy informacji. Uczestniczymy w rozwoju platformy Orion firmy ABC PRO.",
    ],
  },

  services: {
    eyebrow: "Usługi",
    title: "Zakres usług",
    subtitle: "Projektujemy, rozwijamy i integrujemy systemy informatyczne wspierające realizację zadań publicznych.",
    items: [
      {
        icon: "legislation",
        title: "Elektronizacja prawa",
        desc: "Rozwijamy narzędzia do opracowywania, podpisywania i przekazywania aktów prawnych do ogłoszenia oraz organom nadzoru.",
      },
      {
        icon: "automation",
        title: "Automatyzacja procesów",
        desc: "Automatyzujemy powtarzalne czynności w procesach prowadzenia spraw i zarządzania dokumentacją.",
      },
      {
        icon: "integration",
        title: "Integracja systemów",
        desc: "Integrujemy systemy informatyczne, umożliwiając wymianę danych między aplikacjami.",
      },
      {
        icon: "digitization",
        title: "Oprogramowanie dla Samorządu",
        desc: "Projektujemy i wdrażamy aplikacje wspierające prowadzenie spraw, zarządzanie dokumentacją i realizację usług publicznych.",
      },
      {
        icon: "ai",
        title: "Tworzenie narzędzi AI",
        desc: "Opracowujemy rozwiązania wykorzystujące sztuczną inteligencję do przetwarzania dokumentów, analizy informacji i automatyzacji procesów.",
      },
    ] as ServiceItem[],
  },

  values: {
    eyebrow: "Współpraca",
    title: "Jak realizujemy projekty",
    items: [
      {
        num: "01",
        title: "Znajomość procesów administracyjnych",
        desc: "Projektujemy rozwiązania z uwzględnieniem procedur legislacyjnych, zasad prowadzenia spraw i zarządzania dokumentacją.",
      },
      {
        num: "02",
        title: "Rozwój i utrzymanie",
        desc: "Rozwijamy i utrzymujemy oprogramowanie po wdrożeniu, uwzględniając zmieniające się potrzeby użytkowników.",
      },
      {
        num: "03",
        title: "Ochrona danych",
        desc: "Przy projektowaniu systemów uwzględniamy bezpieczeństwo danych i zasady dostępu do informacji.",
      },
      {
        num: "04",
        title: "Dostosowanie do procesów instytucji",
        desc: "Dostosowujemy rozwiązania do organizacji pracy instytucji, potrzeb użytkowników oraz istniejącego środowiska informatycznego.",
      },
    ] as ValueItem[],
  },

  legislator: {
    eyebrow: "Edytor aktów prawnych",
    title: "EAP Legislator",
    lead: "Edytor dla jednostek samorządu terytorialnego i administracji rządowej, wspierający opracowywanie uchwał, zarządzeń i innych aktów prawnych.",
    description: "ITORG rozwija EAP Legislator dla ABC PRO. System wspiera opracowywanie projektów aktów prawnych w formacie XML, uzgodnienia, opatrywanie dokumentów podpisem elektronicznym oraz przekazywanie ich do ogłoszenia i organom nadzoru.",
    features: [
      { title: "Projekty w formacie XML", desc: "Szablony aktów i konwersja treści do XML pomagają przygotować dokument z zachowaniem jego struktury." },
      { title: "Uwagi i historia zmian", desc: "Komentarze, rejestr zmian i raporty pozwalają sprawdzić zgłoszone propozycje oraz sposób ich rozpatrzenia." },
      { title: "Podpisywanie i przekazywanie aktów", desc: "Opatrywanie aktów prawnych podpisem elektronicznym w edytorze oraz ich przekazywanie do ogłoszenia i organom nadzoru." },
    ],
    editions: [
      { name: "EAP Legislator", desc: "Edycje Standard, Premium i Legalis dla urzędów i instytucji przygotowujących akty prawne. Dostępne funkcje zależą od wybranej edycji.", cta: "Poznaj EAP Legislator", href: legislatorUrls.editor },
      { name: "Legislator dla administracji rządowej", desc: "Wersja dla ministerstw i urzędów centralnych, oparta na szablonie Rządowego Centrum Legislacji (RCL). Służy do przygotowania aktów kierowanych do Dziennika Ustaw i Monitora Polskiego.", cta: "Poznaj Legislator GOV", href: legislatorUrls.government },
      { name: "Finanse Publiczne (dodatek Besti@)", desc: "Importuje dane XML z Besti@ do uchwał budżetowych, ich zmian, wieloletnich prognoz finansowych i sprawozdań. Tworzy tabele do dokumentów przekazywanych do ogłoszenia w wojewódzkim dzienniku urzędowym oraz regionalnym izbom obrachunkowym (RIO).", cta: "Poznaj dodatek Besti@", href: legislatorUrls.finance },
    ],
  },

  partner: {
    eyebrow: "Partnerstwo",
    title: "Współpraca z ABC PRO",
    intro:
      "Z ABC PRO Sp. z o.o. współpracujemy przy rozwoju i wdrażaniu oprogramowania wspierającego procesy legislacyjne oraz elektroniczne zarządzanie dokumentacją w administracji publicznej.",
    note: "Przykłady systemów ABC PRO:",
    products: [
      {
        name: "EAP Legislator",
        desc: "Edytor aktów prawnych w XML ze śledzeniem zmian, podpisem elektronicznym i przekazaniem dokumentu do ogłoszenia.",
      },
      {
        name: "Baza Aktów Własnych",
        desc: "System prowadzenia i udostępniania zbiorów uchwał, zarządzeń i regulaminów instytucji, z wyszukiwaniem, skorowidzami oraz integracją z bazą aktów normatywnych.",
      },
      {
        name: "ABC ANON",
        desc: "Narzędzie do anonimizacji dokumentów i wyłączania jawności wybranych treści przed udostępnieniem. Obsługuje pliki PDF, DOCX oraz dokumenty zeskanowane.",
      },
      {
        name: "ABC Kancelaria",
        desc: "System elektronicznego zarządzania dokumentacją (EZD) do obsługi korespondencji, rejestrów oraz dokumentów papierowych i elektronicznych.",
      },
    ] as PartnerProduct[],
  },

  products: {
    title: "Produkty",
    intro: "EAP Legislator, Orion AI i pozostałe rozwiązania ABC PRO wspierają legislację, zarządzanie dokumentacją i analizę informacji.",
    cta: "Zobacz produkty",
    details: "Zobacz opis",
    back: "Wszystkie produkty",
    developmentTitle: "Legislacja i AI",
    partnerTitle: "Pozostałe systemy ABC PRO",
    breadcrumb: "Ścieżka nawigacji",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o Państwa projekcie",
    subtitle:
      "Zapraszamy do omówienia wymagań dotyczących oprogramowania, integracji systemów i zastosowania sztucznej inteligencji w Państwa instytucji.",
  },

  orion: {
    eyebrow: "Narzędzia AI",
    title: "Orion AI",
    lead: "Platforma sztucznej inteligencji firmy ABC PRO dla administracji i biznesu.",
    description: "ITORG uczestniczy w rozwoju platformy Orion i opracowuje narzędzia wykorzystujące AI do przetwarzania dokumentów, analizy informacji i automatyzacji procesów.",
    cta: "Poznaj platformę Orion AI",
  },

  footer: {
    tagline: "Elektronizacja prawa, zarządzanie dokumentacją i rozwiązania AI.",
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
    title: "ITORG: Oprogramowanie dla administracji publicznej",
    description:
      "Oprogramowanie dla samorządów, administracji rządowej i innych instytucji: legislacja, zarządzanie dokumentacją, integracje systemów i sztuczna inteligencja.",
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
    specializationValue: "Legislacja · zarządzanie dokumentacją · integracje systemów · AI",
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
