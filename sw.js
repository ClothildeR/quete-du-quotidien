const CACHE = "qdq-2026-11-09 18:26";
const FILES = ["./","./assets/index-Bu5X-Ws1.css","./assets/index-DJxRikeH.js","./fonts/fredoka_medium.ttf","./fonts/fredoka_semibold.ttf","./fonts/nunito_bold.ttf","./fonts/nunito_extrabold.ttf","./fonts/nunito_regular.ttf","./fonts/nunito_semibold.ttf","./icons/icon-180.png","./icons/icon-192.png","./icons/icon-512.png","./manifest.webmanifest"];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const request = event.request.mode === 'navigate' ? './' : event.request;
  event.respondWith(caches.match(request, { ignoreSearch: true }).then((hit) => hit || fetch(event.request)));
});
