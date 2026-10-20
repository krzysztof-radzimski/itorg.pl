import type { SiteProps } from "@/content/site";
import { homePath, privacyPath, locales, localeNames } from "@/lib/locales";
import Disclosure from "./Disclosure";
import { ChevronDownIcon } from "./Icons";

export default function LanguageSwitcher({ site, locale, privacy = false }: SiteProps & { privacy?: boolean }) {
  return (
    <nav className="languages" aria-label={site.ui.languages}>
      <Disclosure className="languages__disclosure" summary={
        <><span className="sr-only">{site.ui.language}: </span><span lang={locale}>{localeNames[locale]}</span><ChevronDownIcon /></>
      }>
        <ul className="languages__list">
          {locales.map((language) => (
            <li key={language}>
              <a href={privacy ? privacyPath(language) : homePath(language)} hrefLang={language} lang={language} aria-current={language === locale ? "page" : undefined}>
                {localeNames[language]}
              </a>
            </li>
          ))}
        </ul>
      </Disclosure>
    </nav>
  );
}
