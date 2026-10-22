import type { Locale } from "@/lib/locales";

interface NetUnstickCopy {
  category: string;
  tagline: string;
  description: string;
  features: [string, string, string];
  availability: string;
  purchase: string;
  requirement: string;
  screenshot: string;
  support: string;
  privacy: string;
}

// Zakres wydania Mac App Store, zgodny z materiałami źródłowymi NetUnstick.
export const netunstick: Record<Locale, NetUnstickCopy> = {
  pl: {
    category: "Aplikacje dla macOS",
    tagline: "Sprawdź swoje połączenie sieciowe.",
    description: "NetUnstick pomaga ustalić przyczynę problemów z połączeniem na Macu. Przedstawia wyniki diagnostyki bez zmieniania ustawień sieci.",
    features: ["Kontrola połączenia z internetem i rozwiązywania nazw DNS.", "Wykrywanie usług Bonjour AirPlay i test połączenia TCP z wybranym urządzeniem.", "Lokalna historia i eksport raportu. Bez konta, reklam i telemetrii."],
    availability: "Wkrótce w Mac App Store",
    purchase: "Zakup jednorazowy. Bez abonamentu.",
    requirement: "Wymaga macOS 14 lub nowszego.",
    screenshot: "NetUnstick: główne okno wydania Mac App Store z wynikami diagnostyki sieci.",
    support: "Wsparcie", privacy: "Prywatność aplikacji",
  },
  en: {
    category: "Apps for macOS",
    tagline: "Check your network connection.",
    description: "NetUnstick helps identify connection problems on your Mac. View diagnostic results without changing your network settings.",
    features: ["Check internet connectivity and DNS resolution.", "Discover Bonjour AirPlay services and test a TCP connection to a chosen device.", "Local history and report export. No account, ads or telemetry."],
    availability: "Coming soon to the Mac App Store",
    purchase: "One-time purchase. No subscription.",
    requirement: "Requires macOS 14 or later.",
    screenshot: "NetUnstick: the main Mac App Store edition window showing network diagnostic results.",
    support: "Support", privacy: "App privacy",
  },
  de: {
    category: "Apps für macOS",
    tagline: "Prüfen Sie Ihre Netzwerkverbindung.",
    description: "NetUnstick hilft, Verbindungsprobleme auf Ihrem Mac einzugrenzen. Die Diagnose verändert keine Netzwerkeinstellungen.",
    features: ["Internetverbindung und DNS-Namensauflösung prüfen.", "Bonjour-AirPlay-Dienste finden und eine TCP-Verbindung zu einem gewählten Gerät testen.", "Lokaler Verlauf und Berichtsexport. Ohne Konto, Werbung oder Telemetrie."],
    availability: "Bald im Mac App Store",
    purchase: "Einmaliger Kauf. Kein Abonnement.",
    requirement: "Erfordert macOS 14 oder neuer.",
    screenshot: "NetUnstick: Hauptfenster der Mac-App-Store-Version mit Ergebnissen der Netzwerkdiagnose.",
    support: "Support (Englisch)", privacy: "App-Datenschutz (Englisch)",
  },
  es: {
    category: "Aplicaciones para macOS",
    tagline: "Comprueba tu conexión de red.",
    description: "NetUnstick ayuda a identificar problemas de conexión en tu Mac. Consulta los resultados del diagnóstico sin modificar los ajustes de red.",
    features: ["Comprueba la conexión a internet y la resolución DNS.", "Descubre servicios Bonjour AirPlay y prueba una conexión TCP con un dispositivo elegido.", "Historial local y exportación de informes. Sin cuenta, anuncios ni telemetría."],
    availability: "Próximamente en Mac App Store",
    purchase: "Compra única. Sin suscripción.",
    requirement: "Requiere macOS 14 o posterior.",
    screenshot: "NetUnstick: ventana principal de la edición de Mac App Store con los resultados del diagnóstico de red.",
    support: "Soporte (inglés)", privacy: "Privacidad de la aplicación (inglés)",
  },
  fr: {
    category: "Applications pour macOS",
    tagline: "Vérifiez votre connexion réseau.",
    description: "NetUnstick aide à identifier les problèmes de connexion de votre Mac. Consultez les résultats du diagnostic sans modifier les réglages réseau.",
    features: ["Vérification de la connexion Internet et de la résolution DNS.", "Détection des services Bonjour AirPlay et test de connexion TCP à un appareil choisi.", "Historique local et export des rapports. Sans compte, publicité ni télémétrie."],
    availability: "Bientôt sur le Mac App Store",
    purchase: "Achat unique. Sans abonnement.",
    requirement: "Nécessite macOS 14 ou une version ultérieure.",
    screenshot: "NetUnstick : fenêtre principale de la version Mac App Store avec les résultats du diagnostic réseau.",
    support: "Assistance (anglais)", privacy: "Confidentialité de l’application (anglais)",
  },
  ru: {
    category: "Приложения для macOS",
    tagline: "Проверьте сетевое подключение.",
    description: "NetUnstick помогает определить причины проблем с подключением на Mac. Результаты диагностики доступны без изменения сетевых настроек.",
    features: ["Проверка подключения к интернету и разрешения имён DNS.", "Обнаружение служб Bonjour AirPlay и проверка TCP-подключения к выбранному устройству.", "Локальная история и экспорт отчёта. Без учётной записи, рекламы и телеметрии."],
    availability: "Скоро в Mac App Store",
    purchase: "Разовая покупка. Без подписки.",
    requirement: "Требуется macOS 14 или новее.",
    screenshot: "NetUnstick: главное окно версии Mac App Store с результатами диагностики сети.",
    support: "Поддержка (на английском)", privacy: "Конфиденциальность приложения (на английском)",
  },
  cs: {
    category: "Aplikace pro macOS",
    tagline: "Zkontrolujte své síťové připojení.",
    description: "NetUnstick pomáhá zjistit příčinu problémů s připojením na Macu. Zobrazuje výsledky diagnostiky bez změny nastavení sítě.",
    features: ["Kontrola připojení k internetu a překladu názvů DNS.", "Vyhledávání služeb Bonjour AirPlay a test připojení TCP k vybranému zařízení.", "Místní historie a export zprávy. Bez účtu, reklam a telemetrie."],
    availability: "Již brzy v Mac App Storu",
    purchase: "Jednorázový nákup. Bez předplatného.",
    requirement: "Vyžaduje macOS 14 nebo novější.",
    screenshot: "NetUnstick: hlavní okno verze Mac App Store s výsledky diagnostiky sítě.",
    support: "Podpora (anglicky)", privacy: "Soukromí aplikace (anglicky)",
  },
  sk: {
    category: "Aplikácie pre macOS",
    tagline: "Skontrolujte svoje sieťové pripojenie.",
    description: "NetUnstick pomáha zistiť príčinu problémov s pripojením na Macu. Zobrazuje výsledky diagnostiky bez zmeny nastavení siete.",
    features: ["Kontrola pripojenia k internetu a prekladu názvov DNS.", "Vyhľadávanie služieb Bonjour AirPlay a test pripojenia TCP k vybranému zariadeniu.", "Miestna história a export správy. Bez účtu, reklám a telemetrie."],
    availability: "Čoskoro v Mac App Store",
    purchase: "Jednorazový nákup. Bez predplatného.",
    requirement: "Vyžaduje macOS 14 alebo novší.",
    screenshot: "NetUnstick: hlavné okno verzie Mac App Store s výsledkami diagnostiky siete.",
    support: "Podpora (anglicky)", privacy: "Súkromie aplikácie (anglicky)",
  },
  be: {
    category: "Праграмы для macOS",
    tagline: "Праверце сваё сеткавае злучэнне.",
    description: "NetUnstick дапамагае вызначыць прычыны праблем са злучэннем на Mac. Вынікі дыягностыкі даступныя без змены сеткавых налад.",
    features: ["Праверка злучэння з інтэрнэтам і вызначэння імёнаў DNS.", "Пошук сэрвісаў Bonjour AirPlay і праверка TCP-злучэння з выбранай прыладай.", "Лакальная гісторыя і экспарт справаздачы. Без уліковага запісу, рэкламы і тэлеметрыі."],
    availability: "Неўзабаве ў Mac App Store",
    purchase: "Аднаразовая купля. Без падпіскі.",
    requirement: "Патрабуецца macOS 14 або навейшая версія.",
    screenshot: "NetUnstick: галоўнае акно версіі Mac App Store з вынікамі дыягностыкі сеткі.",
    support: "Падтрымка (па-англійску)", privacy: "Прыватнасць праграмы (па-англійску)",
  },
  uk: {
    category: "Програми для macOS",
    tagline: "Перевірте своє мережеве з’єднання.",
    description: "NetUnstick допомагає визначити причини проблем зі з’єднанням на Mac. Переглядайте результати діагностики без зміни мережевих налаштувань.",
    features: ["Перевірка з’єднання з інтернетом і розпізнавання імен DNS.", "Пошук служб Bonjour AirPlay і перевірка TCP-з’єднання з вибраним пристроєм.", "Локальна історія та експорт звіту. Без облікового запису, реклами й телеметрії."],
    availability: "Незабаром у Mac App Store",
    purchase: "Одноразова купівля. Без передплати.",
    requirement: "Потрібна macOS 14 або новіша версія.",
    screenshot: "NetUnstick: головне вікно версії Mac App Store з результатами діагностики мережі.",
    support: "Підтримка (англійською)", privacy: "Приватність програми (англійською)",
  },
};
