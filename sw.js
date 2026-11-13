const CACHE_NAME = 'oapu-v1';
const ASSETS = ['/oapu/', '/oapu/index.html', '/oapu/manifest.json', '/oapu/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
