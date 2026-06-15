import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import Footer from "@/components/Footer";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: `Polityka prywatności — ${site.brand.legalName}`,
  description:
    "Polityka prywatności oraz informacja o plikach cookie serwisu ITORG Krzysztof Radzimski.",
  robots: { index: true, follow: true },
};

const { company } = site;
const mail = company.email;

export default function PrivacyPolicy() {
  return (
    <>
      <header className="subhead">
        <div className="container subhead__bar">
          <Link className="subhead__brand" href="/">
            <img src="/logo.svg" alt="" width={32} height={32} />
            <span>{site.brand.name}</span>
          </Link>
          <Link className="link" href="/">
            ← Strona główna
          </Link>
        </div>
      </header>

      <main id="main" className="section section--light legal-page" tabIndex={-1}>
        <div className="container">
          <article className="legal">
            <p className="eyebrow">Dokument</p>
            <h1 className="legal__title">Polityka prywatności</h1>
            <p className="legal__updated">Ostatnia aktualizacja: {site.legal.updated}</p>

            <p>
              Niniejsza polityka opisuje, w jaki sposób w serwisie internetowym{" "}
              <strong>itorg.pl</strong> (dalej „Serwis") przetwarzane są dane oraz jakie technologie
              (pliki cookie i podobne) są wykorzystywane. Serwis ma charakter informacyjny — prezentuje
              ofertę firmy i nie wymaga zakładania konta ani logowania.
            </p>

            <h2>1. Administrator danych</h2>
            <p>
              Administratorem danych jest <strong>{site.brand.legalName}</strong>, {company.street},{" "}
              {company.postcode} {company.city}, NIP {company.nip}, REGON {company.regon}. Kontakt w
              sprawach prywatności:{" "}
              <a className="link" href={`mailto:${mail}`}>
                {mail}
              </a>
              , tel.{" "}
              <a className="link" href={`tel:${company.phoneHref}`}>
                {company.phoneDisplay}
              </a>
              , e-Doręczenia: <code>{company.eDoreczenia}</code>.
            </p>

            <h2>2. Jakie dane przetwarzamy</h2>
            <p>
              Serwis <strong>nie zawiera formularzy</strong> i nie zbiera danych osobowych w sposób
              automatyczny w celach marketingowych. Dane osobowe przetwarzamy w dwóch sytuacjach:
            </p>
            <ul>
              <li>
                <strong>Kontakt z nami</strong> — jeśli napiszesz do nas e-mail, zadzwonisz lub
                skorzystasz z e-Doręczeń, przetwarzamy dane, które sam(a) podasz (np. imię i nazwisko,
                adres e-mail, numer telefonu, treść wiadomości), aby odpowiedzieć i obsłużyć sprawę.
              </li>
              <li>
                <strong>Dane techniczne</strong> — jak w przypadku każdego serwera i sieci CDN,
                automatycznie przetwarzane są dane niezbędne do dostarczenia strony i zapewnienia
                bezpieczeństwa: adres IP, typ i wersja przeglądarki, system operacyjny, data i godzina
                żądania oraz adres odsyłający. Dane te przetwarza w swoich logach nasz dostawca hostingu
                (Cloudflare).
              </li>
            </ul>

            <h2>3. Podstawy prawne</h2>
            <ul>
              <li>
                <strong>Art. 6 ust. 1 lit. b RODO</strong> — podjęcie działań na Twoje żądanie przed
                zawarciem umowy oraz obsługa korespondencji i zapytań.
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. f RODO</strong> (prawnie uzasadniony interes) — zapewnienie
                działania, bezpieczeństwa i prawidłowego wyświetlania Serwisu, komunikacja oraz
                ewentualne ustalenie lub dochodzenie roszczeń.
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. a RODO</strong> (zgoda) — opcjonalne pliki cookie inne niż
                niezbędne (jeśli zostaną w przyszłości uruchomione).
              </li>
              <li>
                <strong>Art. 6 ust. 1 lit. c RODO</strong> — wypełnienie obowiązków prawnych (np.
                podatkowych i rachunkowych) w zakresie współpracy biznesowej.
              </li>
            </ul>

            <h2>4. Pliki cookie i podobne technologie</h2>
            <p>
              Serwis <strong>nie używa</strong> obecnie własnych narzędzi analitycznych, reklamowych ani
              wtyczek społecznościowych (np. Google Analytics, pikseli reklamowych) i ładuje wyłącznie
              zasoby z własnej domeny. Stosujemy następujące kategorie:
            </p>
            <div className="legal__tablewrap">
              <table className="legal__table">
                <thead>
                  <tr>
                    <th>Nazwa / technologia</th>
                    <th>Cel</th>
                    <th>Kategoria · podstawa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>itorg-cookie-consent-v1</code> (pamięć lokalna przeglądarki)
                    </td>
                    <td>Zapamiętanie Twojej decyzji dotyczącej plików cookie.</td>
                    <td>Niezbędne · uzasadniony interes</td>
                  </tr>
                  <tr>
                    <td>Techniczne cookie Cloudflare (np. ochrona przed botami)</td>
                    <td>Bezpieczeństwo i prawidłowe dostarczenie strony.</td>
                    <td>Niezbędne · uzasadniony interes</td>
                  </tr>
                  <tr>
                    <td>Wydajnościowe / analityczne, kierunkowe / reklamowe, media społecznościowe</td>
                    <td>
                      Obecnie <strong>niestosowane</strong>. Zostaną uruchomione wyłącznie po
                      wyrażeniu przez Ciebie zgody w panelu cookie.
                    </td>
                    <td>Opcjonalne · zgoda</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Niezbędne pliki cookie są konieczne do działania Serwisu i są zwolnione z obowiązku zgody.
              Decyzję dotyczącą kategorii opcjonalnych możesz w każdej chwili zmienić przyciskiem{" "}
              <CookieSettingsButton className="link link--btn">
                „Ustawienia plików cookie"
              </CookieSettingsButton>{" "}
              (w stopce) lub w ustawieniach przeglądarki.
            </p>

            <h2>5. Odbiorcy danych</h2>
            <p>
              Dane mogą być powierzane zaufanym podmiotom wspierającym nas technicznie i organizacyjnie:
            </p>
            <ul>
              <li>
                <strong>Cloudflare, Inc.</strong> — hosting i sieć CDN dostarczająca Serwis.{" "}
                <a
                  className="link"
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityka Cloudflare
                </a>
                .
              </li>
              <li>
                <strong>Dostawca poczty e-mail</strong> oraz operator usługi e-Doręczeń — w zakresie
                prowadzonej z Tobą korespondencji.
              </li>
            </ul>
            <p>
              Dane mogą zostać udostępnione organom publicznym wyłącznie wtedy, gdy wynika to z
              powszechnie obowiązujących przepisów prawa.
            </p>

            <h2>6. Przekazywanie poza EOG</h2>
            <p>
              Niektórzy dostawcy (np. Cloudflare) mają siedzibę poza Europejskim Obszarem Gospodarczym
              (USA). Przekazywanie danych odbywa się na podstawie standardowych klauzul umownych
              zatwierdzonych przez Komisję Europejską oraz, w stosownych przypadkach, programu Data
              Privacy Framework.
            </p>

            <h2>7. Okres przechowywania</h2>
            <p>
              Korespondencję i dane kontaktowe przechowujemy przez czas niezbędny do obsługi sprawy oraz
              przez okres przedawnienia ewentualnych roszczeń, a w zakresie wymaganym przepisami — przez
              okres przewidziany prawem (np. dla dokumentacji księgowej). Dane techniczne w logach
              przechowuje nasz dostawca hostingu zgodnie z jego polityką (zwykle krótkoterminowo, w celach
              bezpieczeństwa). Twoja decyzja o cookie jest zapisana w pamięci lokalnej przeglądarki do
              czasu jej zmiany lub wyczyszczenia danych przeglądarki.
            </p>

            <h2>8. Twoje prawa</h2>
            <p>W zakresie, w jakim przetwarzamy Twoje dane osobowe, przysługuje Ci prawo do:</p>
            <ul>
              <li>dostępu do danych oraz uzyskania ich kopii;</li>
              <li>sprostowania, usunięcia lub ograniczenia przetwarzania;</li>
              <li>wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie;</li>
              <li>przenoszenia danych;</li>
              <li>
                cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania
                dokonanego przed jej cofnięciem);
              </li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (
                <a className="link" href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">
                  uodo.gov.pl
                </a>
                ).
              </li>
            </ul>

            <h2>9. Zmiany polityki</h2>
            <p>
              Polityka może być aktualizowana wraz z rozwojem Serwisu lub zmianą przepisów. Aktualna
              wersja jest zawsze dostępna pod tym adresem, z datą ostatniej aktualizacji u góry.
            </p>

            <h2>10. Kontakt</h2>
            <p>
              W sprawach dotyczących prywatności i danych osobowych napisz na:{" "}
              <a className="link" href={`mailto:${mail}`}>
                {mail}
              </a>{" "}
              lub zadzwoń:{" "}
              <a className="link" href={`tel:${company.phoneHref}`}>
                {company.phoneDisplay}
              </a>
              .
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
