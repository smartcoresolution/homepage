/* SCS Service Worker - Cache First + Offline Fallback */
const CACHE = 'scs-cache-v3';
const ASSETS = ['./','./index.html','./offline.html','./css/styles.css','./js/app.js','./assets/logo.png'];
self.addEventListener('install', (e)=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', (e)=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', (e)=>{
  const req = e.request; if (req.method!=='GET') return;
  e.respondWith(caches.match(req).then(cached=>{
    const fetched = fetch(req).then(net=>{ const copy = net.clone(); caches.open(CACHE).then(c=>c.put(req, copy)); return net; })
      .catch(()=> cached || caches.match('./offline.html'));
    return cached || fetched;
  }));
});