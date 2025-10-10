const cacheName = 'fethiye-lovers-v1';
const assets = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json',
  '/images/paragliding.jpg',
  '/images/scuba.jpg',
  '/images/rafting.jpg',
  '/images/jeep.jpg',
  '/images/12islands.jpg',
  '/images/oludeniz.jpg',
  '/images/bluebays.jpg',
  '/images/dalyan.jpg',
  '/images/saklikent.jpg',
  '/images/atv.jpg',
  '/images/horsetour.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});