import { preferredLanguage, languageDestination, languageResponseHeaders, defaultPage } from "../lib/language-preference.mjs";
import { isNetunstickStorePath } from "../lib/netunstick-store.mjs";

// Automatyka obejmuje wejścia bez prefiksu języka, w tym bezpośrednie linki do produktów.
// Jawne prefiksy językowe i materiały App Store pozostają bez przekierowań.
export async function onRequest({ request, next }) {
  const pathname = new URL(request.url).pathname;
  if (isNetunstickStorePath(pathname)) return next();
  const page = defaultPage(pathname);
  if (!page) return next();
  if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  const headers = languageResponseHeaders();
  const crawler = /bot\b|crawler|spider|slurp/i.test(request.headers.get("User-Agent") ?? "");
  const language = crawler ? "pl" : preferredLanguage({
    cookie: request.headers.get("Cookie") ?? "",
    country: request.cf?.country,
    acceptLanguage: request.headers.get("Accept-Language") ?? "",
  });
  if (language !== "pl") {
    const target = new URL(request.url);
    target.pathname = languageDestination(language, page);
    return new Response(null, { status: 302, headers: { ...headers, Location: target.href } });
  }
  const original = await next();
  const response = new Response(original.body, original);
  for (const [name, value] of Object.entries(headers)) response.headers.set(name, value);
  return response;
}
