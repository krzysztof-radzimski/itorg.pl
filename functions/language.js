import { languageDestination, languageResponseHeaders, preferenceCookie } from "../lib/language-preference.mjs";

// Zwykłe odnośniki działają także bez JavaScriptu. Cel pochodzi wyłącznie z białej listy.
export function onRequest({ request }) {
  if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  const url = new URL(request.url);
  const language = url.searchParams.get("locale");
  const destination = languageDestination(language, url.searchParams.get("page") ?? "home");
  const headers = languageResponseHeaders();
  if (!destination) return new Response("Invalid language or page", { status: 400, headers });
  return new Response(null, { status: 302, headers: {
    ...headers, Location: new URL(destination, url.origin).href,
    "Set-Cookie": preferenceCookie(language, url.protocol === "https:"),
    "X-Robots-Tag": "noindex, nofollow",
  } });
}
