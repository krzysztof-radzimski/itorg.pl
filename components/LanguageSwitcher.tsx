import type { SiteProps } from "@/content/site";
import { pagePath, locales, localeNames, type PageId } from "@/lib/locales";
import Disclosure from "./Disclosure";
import { ChevronDownIcon, GlobeIcon } from "./Icons";

export default function LanguageSwitcher({ site, locale, page = "home" }: SiteProps & { page?: PageId }) {
  return (
    <nav className="languages" aria-label={site.ui.languages}>
      <Disclosure className="languages__disclosure" summary={
        <>
          <GlobeIcon className="languages__globe" />
          <span className="sr-only">{site.ui.language}: </span>
          <span className="languages__code">{locale.toUpperCase()}</span>
          <span className="sr-only" lang={locale}> — {localeNames[locale]}</span>
          <ChevronDownIcon className="languages__chevron" />
        </>
      }>
        <ul className="languages__list">
          {locales.map((language) => (
            <li key={language}>
              <a href={pagePath(language, page)} hrefLang={language} lang={language} aria-current={language === locale ? "page" : undefined}>
                {localeNames[language]}
              </a>
            </li>
          ))}
        </ul>
      </Disclosure>
    </nav>
  );
}
