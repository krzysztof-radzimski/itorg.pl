"use client";

import { openConsentSettings } from "@/lib/consent";

export default function CookieSettingsButton({
  className = "footer__linkbtn",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {children}
    </button>
  );
}
