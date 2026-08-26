const CACHE_NAME = "flightdeck-pay-v12-fd-icon";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png?v=fd2",
  "./icon-512.png?v=fd2",
  "./apple-touch-icon.png?v=fd2"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const appUrl = new URL(self.registration.scope);

  // Never cache Supabase, Stripe, or any other cross-origin API response.
  if (requestUrl.origin !== appUrl.origin) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Navigations are network-first so users and search crawlers get the newest page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(async () => {
        return (await caches.match(event.request)) || (await caches.match("./index.html"));
      })
    );
    return;
  }

  // Only same-origin static app assets are cached.
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
