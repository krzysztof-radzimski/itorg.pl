import type { Locale } from "@/lib/locales";

interface NetUnstickCopy {
  category: string;
  tagline: string;
  description: string;
  scope: string;
  features: [string, string, string];
  availability: string;
  purchase: string;
  devices: string;
  requirement: string;
  screenshot: string;
  screenshotNote?: string;
  support: string;
  privacy: string;
}

const screenshotLanguages = ["pl", "en", "de", "es", "fr", "cs", "sk"] as const;

export function getNetUnstickScreenshot(locale: Locale) {
  const language = screenshotLanguages.find((language) => language === locale) ?? "en";
  return { src: `/NetUnstick/screenshots/${language}.png`, language, width: 1800, height: 1208 };
}

// Zakres wydania Mac App Store, zgodny z materiałami źródłowymi NetUnstick.
export const netunstick: Record<Locale, NetUnstickCopy> = {
  pl: {
    category: "Aplikacje dla macOS",
    tagline: "Sprawdź swoje połączenie sieciowe.",
    description: "NetUnstick pomaga ustalić przyczynę problemów z połączeniem na Macu. Przedstawia wyniki diagnostyki bez zmieniania ustawień sieci.",
    scope: "Wersja Mac App Store działa tylko odczytowo. Nie instaluje uprzywilejowanego komponentu pomocniczego ani nie naprawia tras systemowych, DHCP lub ustawień VPN.",
    features: ["Kontrola połączenia z internetem i rozwiązywania nazw DNS.", "Wykrywanie usług Bonjour AirPlay i test połączenia TCP z wybranym urządzeniem.", "Lokalna historia i eksport raportu. Bez konta, reklam i telemetrii."],
    availability: "Wkrótce w Mac App Store",
    purchase: "Zakup jednorazowy, bez abonamentu i zakupów w aplikacji. Przyszłe aktualizacje tej aplikacji są bez dopłat.",
    devices: "NetUnstick nie nakłada limitu aktywacji ani urządzeń. Korzystanie i ponowne pobieranie podlegają warunkom App Store Apple.",
    requirement: "Wymaga macOS 14 lub nowszego.",
    screenshot: "NetUnstick: główne okno wydania Mac App Store z wynikami diagnostyki sieci.",
    support: "Wsparcie", privacy: "Prywatność aplikacji",
  },
  en: {
    category: "Apps for macOS",
    tagline: "Check your network connection.",
    description: "NetUnstick helps identify connection problems on your Mac. View diagnostic results without changing your network settings.",
    scope: "The Mac App Store edition is read-only. It does not install a privileged helper or repair system routes, DHCP or VPN settings.",
    features: ["Check internet connectivity and DNS resolution.", "Discover Bonjour AirPlay services and test a TCP connection to a chosen device.", "Local history and report export. No account, ads or telemetry."],
    availability: "Coming soon to the Mac App Store",
    purchase: "One purchase, no subscription or in-app purchases. Future updates to this app are included at no additional charge.",
    devices: "NetUnstick adds no activation or device limit. Use and redownloads are subject to Apple’s App Store terms.",
    requirement: "Requires macOS 14 or later.",
    screenshot: "NetUnstick: the main Mac App Store edition window showing network diagnostic results.",
    support: "Support", privacy: "App privacy",
  },
  de: {
    category: "Apps für macOS",
    tagline: "Prüfen Sie Ihre Netzwerkverbindung.",
    description: "NetUnstick hilft, Verbindungsprobleme auf Ihrem Mac einzugrenzen. Die Diagnose verändert keine Netzwerkeinstellungen.",
    scope: "Die Mac-App-Store-Version arbeitet ausschließlich lesend. Sie installiert keinen privilegierten Hilfsdienst und repariert weder Systemrouten noch DHCP- oder VPN-Einstellungen.",
    features: ["Internetverbindung und DNS-Namensauflösung prüfen.", "Bonjour-AirPlay-Dienste finden und eine TCP-Verbindung zu einem gewählten Gerät testen.", "Lokaler Verlauf und Berichtsexport. Ohne Konto, Werbung oder Telemetrie."],
    availability: "Bald im Mac App Store",
    purchase: "Einmaliger Kauf, ohne Abonnement oder In-App-Käufe. Künftige Updates dieser App sind ohne Aufpreis enthalten.",
    devices: "NetUnstick begrenzt weder Aktivierungen noch Geräte. Für die Nutzung und erneute Downloads gelten die App-Store-Bedingungen von Apple.",
    requirement: "Erfordert macOS 14 oder neuer.",
    screenshot: "NetUnstick: Hauptfenster der Mac-App-Store-Version mit Ergebnissen der Netzwerkdiagnose.",
    support: "Support (Englisch)", privacy: "App-Datenschutz (Englisch)",
  },
  es: {
    category: "Aplicaciones para macOS",
    tagline: "Comprueba tu conexión de red.",
    description: "NetUnstick ayuda a identificar problemas de conexión en tu Mac. Consulta los resultados del diagnóstico sin modificar los ajustes de red.",
    scope: "La edición del Mac App Store es de solo lectura. No instala un componente privilegiado ni repara rutas del sistema, DHCP o ajustes de VPN.",
    features: ["Comprueba la conexión a internet y la resolución DNS.", "Descubre servicios Bonjour AirPlay y prueba una conexión TCP con un dispositivo elegido.", "Historial local y exportación de informes. Sin cuenta, anuncios ni telemetría."],
    availability: "Próximamente en Mac App Store",
    purchase: "Una sola compra, sin suscripciones ni compras dentro de la app. Las futuras actualizaciones de esta app están incluidas sin coste adicional.",
    devices: "NetUnstick no impone límites de activación ni de dispositivos. El uso y las descargas posteriores se rigen por las condiciones del App Store de Apple.",
    requirement: "Requiere macOS 14 o posterior.",
    screenshot: "NetUnstick: ventana principal de la edición de Mac App Store con los resultados del diagnóstico de red.",
    support: "Soporte", privacy: "Privacidad de la aplicación",
  },
  fr: {
    category: "Applications pour macOS",
    tagline: "Vérifiez votre connexion réseau.",
    description: "NetUnstick aide à identifier les problèmes de connexion de votre Mac. Consultez les résultats du diagnostic sans modifier les réglages réseau.",
    scope: "La version Mac App Store fonctionne uniquement en lecture. Elle n’installe aucun service auxiliaire privilégié et ne répare ni les routes système, ni DHCP, ni les réglages VPN.",
    features: ["Vérification de la connexion Internet et de la résolution DNS.", "Détection des services Bonjour AirPlay et test de connexion TCP à un appareil choisi.", "Historique local et export des rapports. Sans compte, publicité ni télémétrie."],
    availability: "Bientôt sur le Mac App Store",
    purchase: "Achat unique, sans abonnement ni achats intégrés. Les futures mises à jour de cette application sont incluses sans supplément.",
    devices: "NetUnstick ne limite ni les activations ni les appareils. L’utilisation et les téléchargements ultérieurs sont soumis aux conditions de l’App Store d’Apple.",
    requirement: "Nécessite macOS 14 ou une version ultérieure.",
    screenshot: "NetUnstick : fenêtre principale de la version Mac App Store avec les résultats du diagnostic réseau.",
    support: "Assistance (anglais)", privacy: "Confidentialité de l’application (anglais)",
  },
  ru: {
    category: "Приложения для macOS",
    tagline: "Проверьте сетевое подключение.",
    description: "NetUnstick помогает определить причины проблем с подключением на Mac. Результаты диагностики доступны без изменения сетевых настроек.",
    scope: "Версия Mac App Store работает только в режиме чтения. Она не устанавливает привилегированную вспомогательную службу и не исправляет системные маршруты, DHCP или настройки VPN.",
    features: ["Проверка подключения к интернету и разрешения имён DNS.", "Обнаружение служб Bonjour AirPlay и проверка TCP-подключения к выбранному устройству.", "Локальная история и экспорт отчёта. Без учётной записи, рекламы и телеметрии."],
    availability: "Скоро в Mac App Store",
    purchase: "Разовая покупка, без подписки и встроенных покупок. Будущие обновления этого приложения включены без доплаты.",
    devices: "NetUnstick не ограничивает количество активаций или устройств. Использование и повторные загрузки регулируются условиями App Store Apple.",
    requirement: "Требуется macOS 14 или новее.",
    screenshot: "NetUnstick: главное окно версии Mac App Store на английском языке с результатами диагностики сети.",
    screenshotNote: "Интерфейс приложения на английском языке.",
    support: "Поддержка (на английском)", privacy: "Конфиденциальность приложения (на английском)",
  },
  cs: {
    category: "Aplikace pro macOS",
    tagline: "Zkontrolujte své síťové připojení.",
    description: "NetUnstick pomáhá zjistit příčinu problémů s připojením na Macu. Zobrazuje výsledky diagnostiky bez změny nastavení sítě.",
    scope: "Verze Mac App Store funguje pouze pro čtení. Neinstaluje privilegovanou pomocnou službu ani neopravuje systémové trasy, DHCP nebo nastavení VPN.",
    features: ["Kontrola připojení k internetu a překladu názvů DNS.", "Vyhledávání služeb Bonjour AirPlay a test připojení TCP k vybranému zařízení.", "Místní historie a export zprávy. Bez účtu, reklam a telemetrie."],
    availability: "Již brzy v Mac App Storu",
    purchase: "Jednorázový nákup, bez předplatného a nákupů v aplikaci. Budoucí aktualizace této aplikace jsou zahrnuty bez příplatku.",
    devices: "NetUnstick neomezuje počet aktivací ani zařízení. Používání a opakované stahování podléhá podmínkám App Storu společnosti Apple.",
    requirement: "Vyžaduje macOS 14 nebo novější.",
    screenshot: "NetUnstick: hlavní okno verze Mac App Store s výsledky diagnostiky sítě.",
    support: "Podpora (anglicky)", privacy: "Soukromí aplikace (anglicky)",
  },
  sk: {
    category: "Aplikácie pre macOS",
    tagline: "Skontrolujte svoje sieťové pripojenie.",
    description: "NetUnstick pomáha zistiť príčinu problémov s pripojením na Macu. Zobrazuje výsledky diagnostiky bez zmeny nastavení siete.",
    scope: "Verzia Mac App Store funguje iba na čítanie. Neinštaluje privilegovanú pomocnú službu ani neopravuje systémové trasy, DHCP alebo nastavenia VPN.",
    features: ["Kontrola pripojenia k internetu a prekladu názvov DNS.", "Vyhľadávanie služieb Bonjour AirPlay a test pripojenia TCP k vybranému zariadeniu.", "Miestna história a export správy. Bez účtu, reklám a telemetrie."],
    availability: "Čoskoro v Mac App Store",
    purchase: "Jednorazový nákup, bez predplatného a nákupov v aplikácii. Budúce aktualizácie tejto aplikácie sú zahrnuté bez príplatku.",
    devices: "NetUnstick neobmedzuje počet aktivácií ani zariadení. Používanie a opakované sťahovanie podlieha podmienkam App Store spoločnosti Apple.",
    requirement: "Vyžaduje macOS 14 alebo novší.",
    screenshot: "NetUnstick: hlavné okno verzie Mac App Store s výsledkami diagnostiky siete.",
    support: "Podpora (anglicky)", privacy: "Súkromie aplikácie (anglicky)",
  },
  be: {
    category: "Праграмы для macOS",
    tagline: "Праверце сваё сеткавае злучэнне.",
    description: "NetUnstick дапамагае вызначыць прычыны праблем са злучэннем на Mac. Вынікі дыягностыкі даступныя без змены сеткавых налад.",
    scope: "Версія Mac App Store працуе толькі ў рэжыме чытання. Яна не ўсталёўвае прывілеяваную дапаможную службу і не выпраўляе сістэмныя маршруты, DHCP або налады VPN.",
    features: ["Праверка злучэння з інтэрнэтам і вызначэння імёнаў DNS.", "Пошук сэрвісаў Bonjour AirPlay і праверка TCP-злучэння з выбранай прыладай.", "Лакальная гісторыя і экспарт справаздачы. Без уліковага запісу, рэкламы і тэлеметрыі."],
    availability: "Неўзабаве ў Mac App Store",
    purchase: "Аднаразовая купля, без падпіскі і пакупак у праграме. Будучыя абнаўленні гэтай праграмы ўключаны без даплат.",
    devices: "NetUnstick не абмяжоўвае колькасць актывацый або прылад. Выкарыстанне і паўторныя спампоўкі рэгулююцца ўмовамі App Store Apple.",
    requirement: "Патрабуецца macOS 14 або навейшая версія.",
    screenshot: "NetUnstick: галоўнае акно версіі Mac App Store на англійскай мове з вынікамі дыягностыкі сеткі.",
    screenshotNote: "Інтэрфейс праграмы на англійскай мове.",
    support: "Падтрымка (па-англійску)", privacy: "Прыватнасць праграмы (па-англійску)",
  },
  uk: {
    category: "Програми для macOS",
    tagline: "Перевірте своє мережеве з’єднання.",
    description: "NetUnstick допомагає визначити причини проблем зі з’єднанням на Mac. Переглядайте результати діагностики без зміни мережевих налаштувань.",
    scope: "Версія Mac App Store працює лише в режимі читання. Вона не встановлює привілейовану допоміжну службу й не виправляє системні маршрути, DHCP або налаштування VPN.",
    features: ["Перевірка з’єднання з інтернетом і розпізнавання імен DNS.", "Пошук служб Bonjour AirPlay і перевірка TCP-з’єднання з вибраним пристроєм.", "Локальна історія та експорт звіту. Без облікового запису, реклами й телеметрії."],
    availability: "Незабаром у Mac App Store",
    purchase: "Одноразова купівля, без передплати та покупок у програмі. Майбутні оновлення цієї програми включено без доплати.",
    devices: "NetUnstick не обмежує кількість активацій або пристроїв. Використання й повторні завантаження регулюються умовами App Store Apple.",
    requirement: "Потрібна macOS 14 або новіша версія.",
    screenshot: "NetUnstick: головне вікно версії Mac App Store англійською мовою з результатами діагностики мережі.",
    screenshotNote: "Інтерфейс програми англійською мовою.",
    support: "Підтримка (англійською)", privacy: "Приватність програми (англійською)",
  },
};
