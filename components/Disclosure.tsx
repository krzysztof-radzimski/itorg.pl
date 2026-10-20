"use client";

import type { ReactNode } from "react";

// <details> zapewnia obsługę klawiatury i działa także bez JavaScriptu.
export default function Disclosure({ className, summary, children }: {
  className: string; summary: ReactNode; children: ReactNode;
}) {
  return (
    <details
      className={className}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.preventDefault();
        event.currentTarget.open = false;
        event.currentTarget.querySelector("summary")?.focus();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false;
      }}
      onClick={(event) => {
        const link = (event.target as Element).closest("a");
        if (!link) return;
        event.currentTarget.open = false;
        const href = link.getAttribute("href");
        if (href?.startsWith("#")) document.getElementById(href.slice(1))?.focus();
      }}
    >
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
