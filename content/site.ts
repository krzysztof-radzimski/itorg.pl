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
      "Tworzymy również narzędzia wykorzystujące sztuczną inteligencję. Krzysztof Radzimski współpracuje przy produkcji platformy Orion firmy ABC PRO, rozwijając rozwiązania wspierające codzienną pracę z dokumentami i informacją.",
    ],
  },

  services: {
    eyebrow: "Co robimy",
    title: "Nasze kompetencje",
    subtitle: "Kompleksowe wsparcie cyfryzacji urzędów — od legislacji i integracji po narzędzia AI.",
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
      {
        icon: "ai",
        title: "Tworzenie narzędzi AI",
        desc: "Projektowanie i rozwój narzędzi sztucznej inteligencji wspierających pracę z dokumentami, analizę informacji i automatyzację codziennych zadań.",
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

  legislator: {
    eyebrow: "Główny produkt",
    title: "EAP Legislator",
    lead: "Główny produkt, który Krzysztof Radzimski rozwija dla ABC PRO.",
    description: "Edytor wspiera pracę nad uchwałami, zarządzeniami i innymi aktami prawnymi — od przygotowania projektu w XML, przez uzgodnienia i podpis elektroniczny, po przekazanie dokumentu do ogłoszenia lub nadzoru prawnego.",
    features: [
      { title: "Uporządkowana treść w XML", desc: "Szablony aktów i konwersja treści do postaci strukturalnej pomagają przygotować dokument oraz zachować jego układ." },
      { title: "Współpraca i śledzenie zmian", desc: "Komentarze, rejestrowanie zmian i raporty z prac pozwalają prześledzić propozycje oraz sposób ich rozpatrzenia." },
      { title: "Podpis i przekazanie aktu", desc: "Podpisywanie dokumentów bezpośrednio w edytorze oraz wysyłka do publikacji i nadzoru prawnego wspierają elektroniczny obieg aktów." },
    ],
    editions: [
      { name: "EAP Legislator", desc: "Edycje Standard, Premium i Legalis dla urzędów i instytucji przygotowujących akty prawne. Zakres funkcji można dopasować do potrzeb organizacji.", cta: "Poznaj EAP Legislator", href: legislatorUrls.editor },
      { name: "Legislator dla administracji rządowej", desc: "Wersja dla ministerstw i urzędów centralnych, oparta na szablonie Rządowego Centrum Legislacji (RCL), do przygotowania aktów kierowanych do Dziennika Ustaw i Monitora Polskiego.", cta: "Poznaj Legislator GOV", href: legislatorUrls.government },
      { name: "Finanse Publiczne — dodatek Besti@", desc: "Import danych XML z Besti@ do uchwał budżetowych, ich zmian, wieloletniej prognozy finansowej i sprawozdań. Dodatek tworzy czytelne tabele do dokumentów przekazywanych do publikacji i nadzoru RIO.", cta: "Poznaj dodatek Besti@", href: legislatorUrls.finance },
    ],
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

  orion: {
    eyebrow: "Narzędzia AI",
    title: "Współtworzymy przyszłość z Orion AI",
    lead: "Krzysztof Radzimski współpracuje przy produkcji platformy Orion firmy ABC PRO — platformy AI dla administracji i biznesu.",
    description: "Tworzymy narzędzia AI, które pomagają pracować z dokumentami, analizować informacje i automatyzować zadania. Współpraca przy Orionie łączy te kompetencje z naszym doświadczeniem w oprogramowaniu dla sektora publicznego.",
    cta: "Poznaj platformę Orion AI",
  },

  footer: {
    tagline: "Innowacyjne rozwiązania IT i narzędzia AI dla administracji publicznej.",
    privacy: "Polityka prywatności",
    cookieSettings: "Ustawienia plików cookie",
  },

  // Dane do polityki prywatności / ustawień cookie.
  legal: {
    privacyUrl: "/polityka-prywatnosci/",
    updated: "2026-10-20",
  },

  nav: [
    { label: "O firmie", href: "#o-firmie" },
    { label: "Usługi", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" },
    { label: "Wartości", href: "#wartosci" },
    { label: "Partner", href: "#partner" },
    { label: "Orion AI", href: "#orion" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  seo: {
    title: "ITORG — Rozwiązania IT i narzędzia AI dla administracji publicznej",
    description:
      "ITORG Krzysztof Radzimski — rozwój EAP Legislator dla ABC PRO, systemy legislacyjne, automatyzacja i narzędzia AI. Współpraca przy platformie Orion AI.",
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
    specializationValue: "Legislacja · EZD · integracje · AI",
    partner: "Partner",
    platform: "Platforma",
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
