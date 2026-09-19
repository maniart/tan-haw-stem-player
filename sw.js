const CACHE = 'smplr-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './mp3/00.mp3',
  './mp3/01.mp3',
  './mp3/02.mp3',
  './mp3/03.mp3',
  './mp3/04.mp3',
  './mp3/05.mp3',
  './mp3/06.mp3',
  './mp3/07.mp3',
  './mp3/08.mp3',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
