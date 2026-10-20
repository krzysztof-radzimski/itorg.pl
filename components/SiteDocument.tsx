import type { ReactNode } from "react";
import type { Locale } from "@/lib/locales";
import { getSite } from "@/content/translations";
import CookieConsent from "./CookieConsent";
import "@/app/globals.css";

export default function SiteDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const site = getSite(locale);
  return (
    <html lang={locale}>
      <body>
        {children}
        <CookieConsent copy={site.cookies} privacyUrl={site.legal.privacyUrl} closeLabel={site.ui.close} />
      </body>
    </html>
  );
}
