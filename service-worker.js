const CACHE = "hunter-protocol-v2"; // bumped: forces old caches to be wiped on next visit
const ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const isPage = e.request.mode === "navigate" || e.request.url.endsWith("index.html") || e.request.url.endsWith("/");

  if (isPage) {
    // Network-first for the HTML shell: always try to get the latest version.
    // Only fall back to the cached copy if the device is offline.
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for static assets (icons, manifest) — fine to reuse.
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request).catch(() => cached))
    );
  }
});
