// Wbudowane ikony SVG (bezpieczne na serwerze, dziedziczą currentColor).
// Linia: fill=none, stroke=currentColor — spójny, nowoczesny zestaw konturowy.

import type { ServiceItem } from "@/content/site";

type IconProps = { className?: string };

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Ikony usług ─────────────────────────────────────────────────────────── */

export function LegislationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12.5h6M9 16h4" />
    </svg>
  );
}

export function AutomationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 2.6v2.5M12 18.9v2.5M21.4 12h-2.5M5.1 12H2.6M18.65 5.35l-1.75 1.75M7.1 16.9l-1.75 1.75M18.65 18.65 16.9 16.9M7.1 7.1 5.35 5.35" />
    </svg>
  );
}

export function IntegrationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="6" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M8.3 6h7.4M7.4 7.9l3.5 8.2M16.6 7.9l-3.5 8.2" />
    </svg>
  );
}

export function DigitizationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M3 16.5l5.2-5.2 3 3L20 7" />
      <path d="M20 11.5V7h-4.5" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8Z" />
      <path d="M20 3v4M18 5h4" />
    </svg>
  );
}

const SERVICE_ICONS: Record<ServiceItem["icon"], (p: IconProps) => React.ReactElement> = {
  legislation: LegislationIcon,
  automation: AutomationIcon,
  integration: IntegrationIcon,
  digitization: DigitizationIcon,
  ai: AiIcon,
};

export function ServiceIcon({ name, className }: { name: ServiceItem["icon"]; className?: string }) {
  const Cmp = SERVICE_ICONS[name];
  return <Cmp className={className} />;
}

/* ── Ikony kontaktu / danych ─────────────────────────────────────────────── */

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function MailboxIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M4 20v-7a4 4 0 0 1 8 0v7Z" />
      <path d="M12 13a4 4 0 0 1 8 0v6a1 1 0 0 1-1 1h-7" />
      <path d="M16 13v-2.5M7 12h2" />
    </svg>
  );
}

export function IdIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.8 16.2a3 3 0 0 1 5.4 0M14 9.5h4M14 13h4M14 16h2.5" />
    </svg>
  );
}

export function BankIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3.5 18h17M4.5 20.5h15" />
    </svg>
  );
}

/* ── Ikony interfejsu ────────────────────────────────────────────────────── */

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M12 3 5 5.6v5.2c0 4.4 3 7.6 7 9.2 4-1.6 7-4.8 7-9.2V5.6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CookieIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...STROKE} aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 3.2 3.2 0 0 1-4-4 3.2 3.2 0 0 1-5-5Z" />
      <path d="M9 9.5h.01M8 14h.01M13 16h.01M15.5 12h.01" />
    </svg>
  );
}
