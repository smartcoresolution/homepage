const CACHE_NAME = 'scs-cache-v1-2025-08-09T11:58:11.104482';
const CACHE_NAME = 'scs-cache-v2-2025-08-09T11:58:11.104482';
const ASSETS = ['./index.html','./styles.css'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE_NAME).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
