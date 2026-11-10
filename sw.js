// Remplace l'ancienne appli : vide son cache, se retire et recharge les pages ouvertes, qui affichent alors la nouvelle adresse.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await Promise.all((await caches.keys()).map((k) => caches.delete(k)));
    await self.registration.unregister();
    (await self.clients.matchAll({ type: 'window' })).forEach((client) => client.navigate(client.url));
  })());
});
