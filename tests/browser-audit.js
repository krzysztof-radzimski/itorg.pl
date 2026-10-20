/* Uruchamiaj wyłącznie w lokalnym Podglądzie. Nie jest zasobem produkcyjnym.
   Skopiuj ten plik i axe-core/axe.min.js do out/ po kompilacji, a następnie
   wczytaj przez preview_eval. Funkcje zwracają wynik i same kończą pracę. */
(() => {
  if (!["localhost", "127.0.0.1"].includes(location.hostname)) throw new Error("Audyt wymaga lokalnego Podglądu");
  const tick = (win) => new Promise((resolve) => win.requestAnimationFrame(() => win.requestAnimationFrame(resolve)));
  const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"];
  let frame;

  async function mount(path, width) {
    frame?.remove();
    frame = document.createElement("iframe");
    frame.id = "qa-frame";
    frame.title = `Audyt dostępności: ${path}, ${width} px`;
    frame.style.cssText = `display:block;width:${width}px;height:800px;border:0;margin:0 auto;background:white;max-width:none`;
    const loaded = new Promise((resolve, reject) => { frame.onload = resolve; frame.onerror = reject; });
    frame.src = path;
    document.body.replaceChildren(frame);
    await loaded;
    const win = frame.contentWindow;
    await tick(win);
    await new Promise((resolve, reject) => {
      const script = win.document.createElement("script");
      script.src = "/axe.qa.js";
      script.onload = resolve;
      script.onerror = reject;
      win.document.head.append(script);
    });
    return win;
  }

  window.itorgAudit = async ({ path = "/", width = 320, dark = false, spacing = false, scale = 1, modal = false } = {}) => {
    const win = await mount(path, width);
    const doc = win.document;
    for (const sheet of doc.styleSheets) {
      for (const rule of sheet.cssRules) {
        if (rule.media && /prefers-color-scheme:\s*dark/.test(rule.conditionText)) rule.media.mediaText = dark ? "all" : "not all";
      }
    }
    doc.documentElement.style.colorScheme = dark ? "dark" : "light";
    doc.documentElement.style.fontSize = `${scale * 100}%`;
    if (spacing) {
      const style = doc.createElement("style");
      style.textContent = "*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}";
      doc.head.append(style);
    }
    await tick(win);
    const trigger = doc.querySelector(".footer__linkbtn");
    if (modal) {
      trigger.focus();
      trigger.click();
      await tick(win);
      if (!doc.querySelector("dialog").open) throw new Error("Nie otwarto panelu cookie");
    }
    const report = await win.axe.run(doc, { runOnly: { type: "tag", values: tags } });
    const dialog = doc.querySelector("dialog");
    const result = {
      path, width: win.innerWidth, dark, spacing, scale, modal, language: doc.documentElement.lang,
      scrollWidth: doc.documentElement.scrollWidth, background: win.getComputedStyle(doc.body).backgroundColor,
      violations: report.violations.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })) })),
      incomplete: report.incomplete.map((item) => ({ id: item.id, count: item.nodes.length })),
      passes: report.passes.length,
    };
    if (modal) {
      result.dialogWidth = dialog.clientWidth;
      result.dialogScrollWidth = dialog.scrollWidth;
      result.initialFocus = doc.activeElement.id;
      doc.querySelector(".cc__close").click();
      await tick(win);
      result.focusRestored = doc.activeElement === trigger;
    }
    return result;
  };
})();
