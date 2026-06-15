// ─────────────────────────────────────────────────────────────────────────
//  EDYTOWALNA TREŚĆ STRONY
//  Wszystkie teksty, dane firmowe i linki w jednym miejscu — zmieniaj tutaj,
//  bez dotykania komponentów.
// ─────────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  icon: "legislation" | "automation" | "integration" | "digitization";
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

export const site = {
  brand: {
    name: "ITORG",
    legalName: "ITORG Krzysztof Radzimski",
    eyebrow: "Cyfryzacja administracji publicznej",
    tagline: "Innowacyjne rozwiązania IT dla sektora publicznego.",
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
    eyebrow: "Cyfryzacja administracji publicznej",
    titleLead: "Cyfryzujemy",
    titleAccent: "polską administrację",
    // {years} zostaje podmienione na liczbę lat działalności (od FOUNDED_YEAR).
    subtitle:
      "Od {years} lat tworzymy zaawansowane rozwiązania wspierające elektronizację prawa i automatyzację procesów w sektorze publicznym w Polsce.",
    primaryCta: "Skontaktuj się z nami",
    secondaryCta: "Nasze kompetencje",
    scrollLabel: "Przewiń niżej",
  },

  // Liczba przy „Lat doświadczenia" wyliczana jest automatycznie z FOUNDED_YEAR.
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Lat doświadczenia" },
    { kind: "static", number: "100%", suffix: "", label: "Sektor publiczny" },
    { kind: "static", number: "24/7", suffix: "", label: "Wsparcie techniczne" },
  ],

  about: {
    eyebrow: "O firmie",
    title: "Technologia w służbie państwa",
    lead: "ITORG to firma Krzysztofa Radzimskiego, która od 2009 roku projektuje i wdraża oprogramowanie dla urzędów oraz instytucji publicznych.",
    paragraphs: [
      "Specjalizujemy się w elektronizacji procesu legislacyjnego oraz automatyzacji obiegu dokumentów — obszarach, w których precyzja, zgodność z prawem i niezawodność mają znaczenie krytyczne.",
      "Łączymy wieloletnie doświadczenie w sektorze publicznym z nowoczesnym warsztatem inżynierskim. Dzięki partnerstwu z ABC PRO Sp. z o.o. dostarczamy sprawdzone, kompleksowe narzędzia prawne i wdrożenia na każdą skalę.",
    ],
  },

  services: {
    eyebrow: "Co robimy",
    title: "Nasze kompetencje",
    subtitle: "Kompleksowe wsparcie cyfryzacji urzędów — od legislacji po integracje.",
    items: [
      {
        icon: "legislation",
        title: "Systemy legislacyjne",
        desc: "Kompleksowe platformy do zarządzania aktami prawnymi, automatyzujące przepływ dokumentów legislacyjnych w administracji.",
      },
      {
        icon: "automation",
        title: "Automatyzacja procesów",
        desc: "Optymalizacja workflow administracyjnego poprzez inteligentne narzędzia wspierające obsługę spraw i dokumentów.",
      },
      {
        icon: "integration",
        title: "Integracje systemowe",
        desc: "Łączenie rozwiązań IT z istniejącą infrastrukturą, zapewniając spójność działania systemów publicznych.",
      },
      {
        icon: "digitization",
        title: "Cyfryzacja państwa",
        desc: "Wdrażanie innowacyjnych technologii zwiększających dostępność usług dla obywateli oraz efektywność urzędów.",
      },
    ] as ServiceItem[],
  },

  values: {
    eyebrow: "Dlaczego ITORG",
    title: "Co nas wyróżnia",
    items: [
      {
        num: "01",
        title: "Innowacyjność",
        desc: "Nieustanne poszukiwanie nowych rozwiązań technologicznych odpowiadających wyzwaniom współczesnej administracji.",
      },
      {
        num: "02",
        title: "Niezawodność",
        desc: "Dostarczanie stabilnych systemów o wysokiej wydajności, gwarantujących ciągłość działania instytucji.",
      },
      {
        num: "03",
        title: "Bezpieczeństwo",
        desc: "Najwyższe standardy ochrony danych zgodne z wymogami prawnymi i najlepszymi praktykami branżowymi.",
      },
      {
        num: "04",
        title: "Partnerstwo",
        desc: "Długofalowa współpraca oparta na zrozumieniu specyfiki sektora publicznego i jego realnych potrzeb.",
      },
    ] as ValueItem[],
  },

  partner: {
    eyebrow: "Partnerstwo",
    title: "Współpraca z ABC PRO",
    intro:
      "Dzięki partnerstwu z ABC PRO Sp. z o.o. oferujemy szeroki dostęp do profesjonalnych narzędzi prawnych oraz kompleksowe wdrożenia systemów wspierających funkcjonowanie administracji publicznej.",
    note: "ABC PRO oferuje rozwiązania skierowane przede wszystkim do administracji publicznej i dużych podmiotów biznesowych. Kluczowe z nich to między innymi:",
    products: [
      {
        name: "EAP Legislator",
        desc: "Edytor przeznaczony do tworzenia aktów prawnych w formacie XML, śledzenie zmian, składanie bezpiecznego podpisu elektronicznego i przekazanie aktu do ogłoszenia.",
      },
      {
        name: "Baza Aktów Własnych",
        desc: "System pozwalający organizacjom prowadzić własne zbiory aktów prawnych (np. uchwały, zarządzenia, regulaminy) z pełną funkcjonalnością przeszukiwania, prowadzenia skorowidzów oraz integracji z bazą aktów normatywnych.",
      },
      {
        name: "ABC ANON",
        desc: "Narzędzie do anonimizacji dokumentów (PDF, DOCX, skany) pozwalające na wyłączenie jawności wybranych danych zgodnie z wymogami prawa.",
      },
      {
        name: "ABC Kancelaria",
        desc: "System klasy EZD przeznaczony do obsługi korespondencji, rejestrów, dokumentów przychodzących i wychodzących, zarówno w formie papierowej, jak i elektronicznej.",
      },
    ] as PartnerProduct[],
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o Twoim projekcie",
    subtitle:
      "Wdrażasz nowy system albo modernizujesz urząd? Napisz lub zadzwoń — odpowiemy, jak możemy pomóc.",
  },

  footer: {
    tagline: "Innowacyjne rozwiązania IT dla administracji publicznej.",
    privacy: "Polityka prywatności",
    cookieSettings: "Ustawienia plików cookie",
  },

  // Dane do polityki prywatności / ustawień cookie.
  legal: {
    privacyUrl: "/polityka-prywatnosci/",
    updated: "15 czerwca 2026",
  },

  nav: [
    { label: "O firmie", href: "#o-firmie" },
    { label: "Usługi", href: "#uslugi" },
    { label: "Wartości", href: "#wartosci" },
    { label: "Partner", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  seo: {
    title: "ITORG — Innowacyjne rozwiązania dla administracji publicznej",
    description:
      "ITORG Krzysztof Radzimski — od 2009 roku tworzymy systemy legislacyjne, automatyzację procesów i integracje IT dla administracji publicznej w Polsce. Partner ABC PRO.",
    url: "https://itorg.pl",
  },
};

export type Site = typeof site;
