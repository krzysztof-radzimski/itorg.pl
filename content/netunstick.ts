import { euLocales, type Locale } from "@/lib/locales";
import { euCopies } from "./eu";

export interface NetUnstickCopy {
  category: string;
  tagline: string;
  description: string;
  recovery: string;
  features: [string, string, string];
  download: string;
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

// Opis funkcji aplikacji i pobieranie podpisanego instalatora PKG.
export const netunstick: Record<Locale, NetUnstickCopy> = {
  ...Object.fromEntries(Object.entries(euCopies).map(([locale, copy]) => [locale, copy.netunstick])) as Record<keyof typeof euCopies, NetUnstickCopy>,
  pl: {
    category: "Aplikacje dla macOS",
    tagline: "Odzyskaj połączenie z innymi Makami.",
    description: "NetUnstick pomaga, gdy po rozłączeniu VPN inny Mac jest widoczny przez Bonjour w Finderze, ale nie można się z nim połączyć.",
    recovery: "NetUnstick może przywrócić dostęp do plików, udostępniania ekranu i innych usług bez restartu Maca, jeśli po rozłączeniu VPN (np. FortiClient) pozostały trasy blokujące połączenia lokalne. Usuwa je po potwierdzeniu użytkownika i z uprawnieniami administratora, a następnie ponawia diagnostykę.",
    features: ["Kontrola połączenia z internetem i rozwiązywania nazw DNS.", "Wykrywanie usług Bonjour AirPlay i test połączenia TCP z wybranym urządzeniem.", "Lokalna historia i eksport raportu. Bez konta, reklam i telemetrii."],
    download: "Pobierz NetUnstick",
    requirement: "Wymaga macOS 14 lub nowszego.",
    screenshot: "NetUnstick: główne okno z wynikami diagnostyki sieci.",
    support: "Wsparcie", privacy: "Prywatność aplikacji",
  },
  en: {
    category: "Apps for macOS",
    tagline: "Reconnect to other Macs.",
    description: "NetUnstick helps when another Mac is visible through Bonjour in Finder after disconnecting a VPN, but you cannot connect to it.",
    recovery: "NetUnstick can restore file sharing, screen sharing and other local connections without restarting your Mac when leftover VPN routes, for example after FortiClient, are the cause. It removes those routes with your confirmation and administrator privileges, then runs diagnostics again.",
    features: ["Check internet connectivity and DNS resolution.", "Discover Bonjour AirPlay services and test a TCP connection to a chosen device.", "Local history and report export. No account, ads or telemetry."],
    download: "Download NetUnstick",
    requirement: "Requires macOS 14 or later.",
    screenshot: "NetUnstick: the main window showing network diagnostic results.",
    support: "Support", privacy: "App privacy",
  },
  de: {
    category: "Apps für macOS",
    tagline: "Wieder mit anderen Macs verbinden.",
    description: "NetUnstick hilft, wenn nach dem Trennen eines VPN ein anderer Mac über Bonjour im Finder sichtbar ist, sich aber keine Verbindung herstellen lässt.",
    recovery: "NetUnstick kann Dateifreigabe, Bildschirmfreigabe und andere lokale Verbindungen ohne Neustart des Mac wiederherstellen, wenn zurückgebliebene VPN-Routen, etwa nach FortiClient, die Ursache sind. Die App entfernt diese Routen nach Ihrer Bestätigung und mit Administratorrechten und führt anschließend die Diagnose erneut aus.",
    features: ["Internetverbindung und DNS-Namensauflösung prüfen.", "Bonjour-AirPlay-Dienste finden und eine TCP-Verbindung zu einem gewählten Gerät testen.", "Lokaler Verlauf und Berichtsexport. Ohne Konto, Werbung oder Telemetrie."],
    download: "NetUnstick herunterladen",
    requirement: "Erfordert macOS 14 oder neuer.",
    screenshot: "NetUnstick: Hauptfenster mit Ergebnissen der Netzwerkdiagnose.",
    support: "Support (Englisch)", privacy: "App-Datenschutz (Englisch)",
  },
  es: {
    category: "Aplicaciones para macOS",
    tagline: "Vuelve a conectar con otros Mac.",
    description: "NetUnstick ayuda cuando, tras desconectar una VPN, otro Mac aparece mediante Bonjour en el Finder, pero no puedes conectarte a él.",
    recovery: "NetUnstick puede restablecer el acceso a archivos, la pantalla compartida y otras conexiones locales sin reiniciar el Mac cuando la causa son rutas que quedan tras la VPN, por ejemplo con FortiClient. Las elimina con tu confirmación y permisos de administrador, y después repite el diagnóstico.",
    features: ["Comprueba la conexión a internet y la resolución DNS.", "Descubre servicios Bonjour AirPlay y prueba una conexión TCP con un dispositivo elegido.", "Historial local y exportación de informes. Sin cuenta, anuncios ni telemetría."],
    download: "Descargar NetUnstick",
    requirement: "Requiere macOS 14 o posterior.",
    screenshot: "NetUnstick: ventana principal con los resultados del diagnóstico de red.",
    support: "Soporte", privacy: "Privacidad de la aplicación",
  },
  fr: {
    category: "Applications pour macOS",
    tagline: "Retrouvez la connexion aux autres Mac.",
    description: "NetUnstick vous aide si, après la déconnexion d’un VPN, un autre Mac reste visible via Bonjour dans le Finder, mais que vous ne pouvez pas vous y connecter.",
    recovery: "NetUnstick peut rétablir le partage de fichiers, le partage d’écran et d’autres connexions locales sans redémarrer le Mac lorsque des routes laissées par le VPN, par exemple FortiClient, sont en cause. L’application les supprime après votre confirmation et avec les droits d’administration, puis relance le diagnostic.",
    features: ["Vérification de la connexion Internet et de la résolution DNS.", "Détection des services Bonjour AirPlay et test de connexion TCP à un appareil choisi.", "Historique local et export des rapports. Sans compte, publicité ni télémétrie."],
    download: "Télécharger NetUnstick",
    requirement: "Nécessite macOS 14 ou une version ultérieure.",
    screenshot: "NetUnstick : fenêtre principale avec les résultats du diagnostic réseau.",
    support: "Assistance (anglais)", privacy: "Confidentialité de l’application (anglais)",
  },
  ru: {
    category: "Приложения для macOS",
    tagline: "Восстановите связь с другими Mac.",
    description: "NetUnstick помогает, когда после отключения VPN другой Mac виден через Bonjour в Finder, но подключиться к нему не удаётся.",
    recovery: "NetUnstick может восстановить доступ к файлам, общему экрану и другим локальным службам без перезагрузки Mac, если причиной стали маршруты, оставшиеся после VPN, например FortiClient. Она удаляет их после вашего подтверждения и с правами администратора, а затем повторяет диагностику.",
    features: ["Проверка подключения к интернету и разрешения имён DNS.", "Обнаружение служб Bonjour AirPlay и проверка TCP-подключения к выбранному устройству.", "Локальная история и экспорт отчёта. Без учётной записи, рекламы и телеметрии."],
    download: "Скачать NetUnstick",
    requirement: "Требуется macOS 14 или новее.",
    screenshot: "NetUnstick: главное окно на английском языке с результатами диагностики сети.",
    screenshotNote: "Интерфейс приложения на английском языке.",
    support: "Поддержка (на английском)", privacy: "Конфиденциальность приложения (на английском)",
  },
  cs: {
    category: "Aplikace pro macOS",
    tagline: "Obnovte spojení s dalšími Macy.",
    description: "NetUnstick pomáhá, když je po odpojení VPN jiný Mac viditelný přes Bonjour ve Finderu, ale nelze se k němu připojit.",
    recovery: "NetUnstick může obnovit přístup k souborům, sdílení obrazovky a další místní spojení bez restartu Macu, pokud jsou příčinou trasy zbylé po VPN, například FortiClient. Odstraní je po vašem potvrzení a s oprávněním správce a poté zopakuje diagnostiku.",
    features: ["Kontrola připojení k internetu a překladu názvů DNS.", "Vyhledávání služeb Bonjour AirPlay a test připojení TCP k vybranému zařízení.", "Místní historie a export zprávy. Bez účtu, reklam a telemetrie."],
    download: "Stáhnout NetUnstick",
    requirement: "Vyžaduje macOS 14 nebo novější.",
    screenshot: "NetUnstick: hlavní okno s výsledky diagnostiky sítě.",
    support: "Podpora (anglicky)", privacy: "Soukromí aplikace (anglicky)",
  },
  sk: {
    category: "Aplikácie pre macOS",
    tagline: "Obnovte spojenie s ďalšími Macmi.",
    description: "NetUnstick pomáha, keď je po odpojení VPN iný Mac viditeľný cez Bonjour vo Finderi, ale nedá sa k nemu pripojiť.",
    recovery: "NetUnstick môže obnoviť prístup k súborom, zdieľanie obrazovky a ďalšie miestne spojenia bez reštartu Macu, ak sú príčinou trasy zostávajúce po VPN, napríklad FortiClient. Odstráni ich po vašom potvrdení a s oprávneniami správcu a potom zopakuje diagnostiku.",
    features: ["Kontrola pripojenia k internetu a prekladu názvov DNS.", "Vyhľadávanie služieb Bonjour AirPlay a test pripojenia TCP k vybranému zariadeniu.", "Miestna história a export správy. Bez účtu, reklám a telemetrie."],
    download: "Stiahnuť NetUnstick",
    requirement: "Vyžaduje macOS 14 alebo novší.",
    screenshot: "NetUnstick: hlavné okno s výsledkami diagnostiky siete.",
    support: "Podpora (anglicky)", privacy: "Súkromie aplikácie (anglicky)",
  },
  be: {
    category: "Праграмы для macOS",
    tagline: "Аднавіце злучэнне з іншымі Mac.",
    description: "NetUnstick дапамагае, калі пасля адключэння VPN іншы Mac бачны праз Bonjour у Finder, але злучыцца з ім не ўдаецца.",
    recovery: "NetUnstick можа аднавіць доступ да файлаў, супольнага экрана і іншых лакальных службаў без перазапуску Mac, калі прычынай сталі маршруты, што засталіся пасля VPN, напрыклад FortiClient. Яна выдаляе іх пасля вашага пацвярджэння і з правамі адміністратара, а затым паўтарае дыягностыку.",
    features: ["Праверка злучэння з інтэрнэтам і вызначэння імёнаў DNS.", "Пошук сэрвісаў Bonjour AirPlay і праверка TCP-злучэння з выбранай прыладай.", "Лакальная гісторыя і экспарт справаздачы. Без уліковага запісу, рэкламы і тэлеметрыі."],
    download: "Спампаваць NetUnstick",
    requirement: "Патрабуецца macOS 14 або навейшая версія.",
    screenshot: "NetUnstick: галоўнае акно на англійскай мове з вынікамі дыягностыкі сеткі.",
    screenshotNote: "Інтэрфейс праграмы на англійскай мове.",
    support: "Падтрымка (па-англійску)", privacy: "Прыватнасць праграмы (па-англійску)",
  },
  uk: {
    category: "Програми для macOS",
    tagline: "Відновіть з’єднання з іншими Mac.",
    description: "NetUnstick допомагає, коли після від’єднання VPN інший Mac видно через Bonjour у Finder, але під’єднатися до нього не вдається.",
    recovery: "NetUnstick може відновити доступ до файлів, спільного екрана та інших локальних служб без перезапуску Mac, якщо причиною стали маршрути, що залишилися після VPN, наприклад FortiClient. Вона видаляє їх після вашого підтвердження та з правами адміністратора, а потім повторює діагностику.",
    features: ["Перевірка з’єднання з інтернетом і розпізнавання імен DNS.", "Пошук служб Bonjour AirPlay і перевірка TCP-з’єднання з вибраним пристроєм.", "Локальна історія та експорт звіту. Без облікового запису, реклами й телеметрії."],
    download: "Завантажити NetUnstick",
    requirement: "Потрібна macOS 14 або новіша версія.",
    screenshot: "NetUnstick: головне вікно англійською мовою з результатами діагностики мережі.",
    screenshotNote: "Інтерфейс програми англійською мовою.",
    support: "Підтримка (англійською)", privacy: "Приватність програми (англійською)",
  },
};
