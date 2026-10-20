"use client";

import { useEffect, useRef, type ReactNode } from "react";

// <details> zapewnia obsługę klawiatury i działa także bez JavaScriptu.
export default function Disclosure({ className, summary, children }: {
  className: string; summary: ReactNode; children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !details.contains(event.target)) details.open = false;
    };
    document.addEventListener("pointerdown", closeOutside, true);
    return () => document.removeEventListener("pointerdown", closeOutside, true);
  }, []);

  return (
    <details
      ref={ref}
      className={className}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.preventDefault();
        event.currentTarget.open = false;
        event.currentTarget.querySelector("summary")?.focus();
      }}
      onBlur={(event) => {
        // Safari nie musi przenosić fokusu na dotknięty link. relatedTarget=null
        // nie oznacza więc wyjścia z menu; dotknięcia poza nim obsługuje pointerdown.
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}
      onClick={(event) => {
        const link = event.target instanceof Element ? event.target.closest("a") : null;
        if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const href = link.getAttribute("href");
        // Przejście na inną stronę pozostaje natywną akcją linku. Przy kotwicy
        // chowamy menu dopiero po tej akcji, aby nie ukryć celu kliknięcia w Safari.
        if (!href?.startsWith("#")) return;
        const details = event.currentTarget;
        requestAnimationFrame(() => {
          details.open = false;
          document.getElementById(href.slice(1))?.focus();
        });
      }}
    >
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
