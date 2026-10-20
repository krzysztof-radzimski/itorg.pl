/* Regresja menu w lokalnym Podglądzie, bez dodatkowych bibliotek.
   Po buildzie skopiuj do out/disclosure.qa.js, wczytaj skrypt przez preview_eval
   i wywołaj await itorgCheckDisclosure({ path: "/", target: "/en/" }).
   Plik QA usuń z out/ po teście; nie jest zasobem produkcyjnym.
   Test odtwarza brak relatedTarget w Safari; fizyczne stuknięcia sprawdź w iOS. */
(() => {
  if (!["localhost", "127.0.0.1"].includes(location.hostname)) throw new Error("Test wymaga lokalnego Podglądu");
  window.itorgCheckDisclosure = async ({ path = "/", target = "/en/", width = 402 } = {}) => {
    const frame = document.createElement("iframe");
    frame.title = "Regresja przełącznika języka";
    frame.style.cssText = `position:fixed;inset:0;width:${width}px;height:800px;max-width:none;border:0;z-index:10000`;
    const checks = [];
    const check = (name, ok) => checks.push({ name, ok });
    const loaded = (navigate) => new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Przekroczono czas nawigacji")), 8000);
      frame.onload = () => { clearTimeout(timer); resolve(); };
      frame.onerror = () => { clearTimeout(timer); reject(new Error("Błąd wczytywania strony")); };
      navigate();
    });
    const tick = (win) => new Promise((resolve) => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
    document.body.append(frame);
    try {
      await loaded(() => { frame.src = path; });
      const win = frame.contentWindow;
      const doc = win.document;
      await tick(win);
      if (doc.querySelector("dialog")?.open) doc.querySelector(".cc__close").click();
      const menu = doc.querySelector(".languages__disclosure");
      const summary = menu.querySelector("summary");
      summary.click();
      summary.focus();
      summary.dispatchEvent(new win.FocusEvent("focusout", { bubbles: true, relatedTarget: null }));
      check("Brak relatedTarget nie przerywa dotknięcia linku", menu.open);
      summary.dispatchEvent(new win.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
      check("Escape zamyka menu i oddaje fokus", !menu.open && doc.activeElement === summary);
      summary.click();
      const outside = doc.querySelector(".nav__brand");
      outside.focus();
      // Podgląd w tle nie musi emitować natywnego focusout przy focus().
      summary.dispatchEvent(new win.FocusEvent("focusout", { bubbles: true, relatedTarget: outside }));
      check("Wyjście klawiaturą zamyka menu", !menu.open);
      summary.click();
      doc.body.dispatchEvent(new win.PointerEvent("pointerdown", { bubbles: true }));
      check("Dotknięcie poza menu zamyka listę", !menu.open);
      summary.click();
      summary.focus();
      summary.dispatchEvent(new win.FocusEvent("focusout", { bubbles: true, relatedTarget: null }));
      const link = [...menu.querySelectorAll("a")].find((item) => item.getAttribute("href") === target);
      if (!link) throw new Error(`Brak wersji językowej: ${target}`);
      await loaded(() => link.click());
      check("Wybrany język zachowuje rodzaj podstrony", frame.contentWindow.location.pathname === target);
      check("Dokument ma wybrany język", frame.contentDocument.documentElement.lang === link.lang);
      if (path === "/") {
        const next = frame.contentWindow;
        await tick(next);
        const mobile = next.document.querySelector(".nav__disclosure");
        mobile.querySelector("summary").click();
        mobile.querySelector('a[href="#uslugi"]').click();
        await tick(next);
        check("Menu mobilne zamyka się po wyborze sekcji", !mobile.open);
        check("Kotwica dostaje fokus", next.document.activeElement.id === "uslugi");
      }
      return { path, target, width, checks, failures: checks.filter((item) => !item.ok) };
    } finally {
      frame.remove();
    }
  };
})();
