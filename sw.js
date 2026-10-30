const CACHE_NAME = 'runner-by-ariyan-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './audio 1.mp3',
  './adio 2.mp3',
  './audio 3 .mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request)).catch(() => fetch(e.request))
  );
});
