// Retire l'ancienne version de l'appli gardée par le navigateur.
navigator.serviceWorker?.getRegistrations().then((list) => list.forEach((r) => r.unregister()));
self.caches?.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
