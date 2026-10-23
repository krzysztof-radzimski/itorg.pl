import { euLocales, type Locale } from "@/lib/locales";
import { euCopies } from "./eu";

export interface NetUnstickCopy {
  category: string;
  tagline: string;
  description: string;
  recovery: string;
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

const screenshotLanguages = euLocales;

export function getNetUnstickScreenshot(locale: Locale) {
  const language = screenshotLanguages.find((language) => language === locale) ?? "en";
  return { src: `/NetUnstick/screenshots/${language}.png`, language, width: 1800, height: 1208 };
}

// Funkcje pełnej wersji i diagnostyczny zakres wersji z Mac App Store.
export const netunstick: Record<Locale, NetUnstickCopy> = {
  ...Object.fromEntries(Object.entries(euCopies).map(([locale, copy]) => [locale, copy.netunstick])) as Record<keyof typeof euCopies, NetUnstickCopy>,
  pl: {
    category: "Aplikacje dla macOS",
    tagline: "Odzyskaj połączenie z innymi Makami po VPN.",
    description: "NetUnstick pomaga, gdy po rozłączeniu VPN inny Mac jest widoczny przez Bonjour w Finderze, ale nie można się z nim połączyć.",
    recovery: "Pełna wersja może przywrócić dostęp do plików, udostępniania ekranu i innych usług bez restartu Maca, jeśli po rozłączeniu VPN (np. FortiClient) pozostały trasy blokujące połączenia lokalne. Usuwa je po potwierdzeniu użytkownika i z uprawnieniami administratora, a następnie ponawia diagnostykę.",
    scope: "Wersja z Mac App Store służy do diagnostyki i testowania połączeń. Nie wykonuje napraw ani nie zmienia ustawień sieci.",
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
    tagline: "Reconnect to other Macs after VPN.",
    description: "NetUnstick helps when another Mac is visible through Bonjour in Finder after disconnecting a VPN, but you cannot connect to it.",
    recovery: "The full version can restore file sharing, screen sharing and other local connections without restarting your Mac when leftover VPN routes, for example after FortiClient, are the cause. It removes those routes with your confirmation and administrator privileges, then runs diagnostics again.",
    scope: "The Mac App Store version diagnoses issues and tests connections. It does not perform repairs or change network settings.",
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
    tagline: "Nach dem VPN wieder mit anderen Macs verbinden.",
    description: "NetUnstick hilft, wenn nach dem Trennen eines VPN ein anderer Mac über Bonjour im Finder sichtbar ist, sich aber keine Verbindung herstellen lässt.",
    recovery: "Die vollständige Version kann Dateifreigabe, Bildschirmfreigabe und andere lokale Verbindungen ohne Neustart des Mac wiederherstellen, wenn zurückgebliebene VPN-Routen, etwa nach FortiClient, die Ursache sind. Sie entfernt diese Routen nach Ihrer Bestätigung und mit Administratorrechten und führt anschließend die Diagnose erneut aus.",
    scope: "Die Version aus dem Mac App Store bietet Diagnose und Verbindungstests. Sie führt keine Reparaturen durch und ändert keine Netzwerkeinstellungen.",
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
    tagline: "Vuelve a conectar con otros Mac después de la VPN.",
    description: "NetUnstick ayuda cuando, tras desconectar una VPN, otro Mac aparece mediante Bonjour en el Finder, pero no puedes conectarte a él.",
    recovery: "La versión completa puede restablecer el acceso a archivos, la pantalla compartida y otras conexiones locales sin reiniciar el Mac cuando la causa son rutas que quedan tras la VPN, por ejemplo con FortiClient. Las elimina con tu confirmación y permisos de administrador, y después repite el diagnóstico.",
    scope: "La versión del Mac App Store ofrece diagnóstico y pruebas de conexión. No realiza reparaciones ni modifica los ajustes de red.",
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
    tagline: "Retrouvez la connexion aux autres Mac après un VPN.",
    description: "NetUnstick vous aide si, après la déconnexion d’un VPN, un autre Mac reste visible via Bonjour dans le Finder, mais que vous ne pouvez pas vous y connecter.",
    recovery: "La version complète peut rétablir le partage de fichiers, le partage d’écran et d’autres connexions locales sans redémarrer le Mac lorsque des routes laissées par le VPN, par exemple FortiClient, sont en cause. Elle les supprime après votre confirmation et avec les droits d’administration, puis relance le diagnostic.",
    scope: "La version du Mac App Store propose un diagnostic et des tests de connexion. Elle n’effectue aucune réparation et ne modifie pas les réglages réseau.",
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
    tagline: "Восстановите связь с другими Mac после VPN.",
    description: "NetUnstick помогает, когда после отключения VPN другой Mac виден через Bonjour в Finder, но подключиться к нему не удаётся.",
    recovery: "Полная версия может восстановить доступ к файлам, общему экрану и другим локальным службам без перезагрузки Mac, если причиной стали маршруты, оставшиеся после VPN, например FortiClient. Она удаляет их после вашего подтверждения и с правами администратора, а затем повторяет диагностику.",
    scope: "Версия из Mac App Store предназначена для диагностики и проверки подключений. Она не выполняет исправлений и не меняет сетевые настройки.",
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
    tagline: "Obnovte spojení s dalšími Macy po VPN.",
    description: "NetUnstick pomáhá, když je po odpojení VPN jiný Mac viditelný přes Bonjour ve Finderu, ale nelze se k němu připojit.",
    recovery: "Plná verze může obnovit přístup k souborům, sdílení obrazovky a další místní spojení bez restartu Macu, pokud jsou příčinou trasy zbylé po VPN, například FortiClient. Odstraní je po vašem potvrzení a s oprávněním správce a poté zopakuje diagnostiku.",
    scope: "Verze z Mac App Storu slouží k diagnostice a testování připojení. Neprovádí opravy ani nemění nastavení sítě.",
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
    tagline: "Obnovte spojenie s ďalšími Macmi po VPN.",
    description: "NetUnstick pomáha, keď je po odpojení VPN iný Mac viditeľný cez Bonjour vo Finderi, ale nedá sa k nemu pripojiť.",
    recovery: "Plná verzia môže obnoviť prístup k súborom, zdieľanie obrazovky a ďalšie miestne spojenia bez reštartu Macu, ak sú príčinou trasy zostávajúce po VPN, napríklad FortiClient. Odstráni ich po vašom potvrdení a s oprávneniami správcu a potom zopakuje diagnostiku.",
    scope: "Verzia z Mac App Storu slúži na diagnostiku a testovanie pripojení. Nevykonáva opravy ani nemení nastavenia siete.",
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
    tagline: "Аднавіце злучэнне з іншымі Mac пасля VPN.",
    description: "NetUnstick дапамагае, калі пасля адключэння VPN іншы Mac бачны праз Bonjour у Finder, але злучыцца з ім не ўдаецца.",
    recovery: "Поўная версія можа аднавіць доступ да файлаў, супольнага экрана і іншых лакальных службаў без перазапуску Mac, калі прычынай сталі маршруты, што засталіся пасля VPN, напрыклад FortiClient. Яна выдаляе іх пасля вашага пацвярджэння і з правамі адміністратара, а затым паўтарае дыягностыку.",
    scope: "Версія з Mac App Store прызначана для дыягностыкі і праверкі злучэнняў. Яна не выконвае выпраўленняў і не змяняе сеткавыя налады.",
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
    tagline: "Відновіть з’єднання з іншими Mac після VPN.",
    description: "NetUnstick допомагає, коли після від’єднання VPN інший Mac видно через Bonjour у Finder, але під’єднатися до нього не вдається.",
    recovery: "Повна версія може відновити доступ до файлів, спільного екрана та інших локальних служб без перезапуску Mac, якщо причиною стали маршрути, що залишилися після VPN, наприклад FortiClient. Вона видаляє їх після вашого підтвердження та з правами адміністратора, а потім повторює діагностику.",
    scope: "Версія з Mac App Store призначена для діагностики та перевірки з’єднань. Вона не виконує виправлень і не змінює мережеві налаштування.",
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
