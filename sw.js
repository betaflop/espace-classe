// Service worker minimal : rien n'est mis en cache, le site est toujours à jour.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).catch(() => new Response("Pas de connexion. Réessaie dans un instant.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } })));
});
