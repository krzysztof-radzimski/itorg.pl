import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.brand.legalName,
  authors: [{ name: "Krzysztof Radzimski" }],
  keywords: [
    "administracja publiczna",
    "cyfryzacja",
    "systemy legislacyjne",
    "EZD",
    "automatyzacja procesów",
    "ITORG",
    "ABC PRO",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.seo.url,
    siteName: site.brand.legalName,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: site.brand.name }],
  },
  twitter: {
    card: "summary",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/logo.svg"],
  },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
