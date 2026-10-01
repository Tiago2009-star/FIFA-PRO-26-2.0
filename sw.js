// Service Worker — PWA offline-first
// Cache da app shell (HTML/JS/CSS/ícones) + imagens dos cromos
const CACHE_VERSION = 'fifarinhas-v4';
const SHELL_RE = /\.(html|js|css|json|png|ico|svg|woff2?)(\?.*)?$/i;
const IMG_RE = /\.(jpe?g|png|webp|gif|avif)(\?.*)?$/i;

const SHELL_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon.ico',
  '/teams2014.js',
  '/teams2010.js',
  '/teams2006.js',
  '/teams2002v3.js',
  '/teams1998.js',
  '/teams1994.js',
  '/teams1990.js',
  '/teams1986.js',
  '/teams1982.js',
  '/teams1978.js',
  '/teams1974.js',
  '/teams1970.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(SHELL_FILES).catch(function(e) {
        console.warn('Shell cache partial fail:', e);
      });
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) {
          return k !== CACHE_VERSION;
        }).map(function(k) {
          return caches.delete(k);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (e) { return; }

  // App shell: cache-first
  if (SHELL_RE.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(function(cache) {
        return cache.match(req).then(function(cached) {
          if (cached) return cached;
          return fetch(req).then(function(res) {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          });
        });
      }).catch(function() {
        return fetch(req);
      })
    );
    return;
  }

  // Imagens cross-origin (firebase/laststicker/flagcdn): cache-first
  if (IMG_RE.test(url.hostname) || IMG_RE.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(function(cache) {
        return cache.match(req).then(function(cached) {
          if (cached) return cached;
          return fetch(req).then(function(res) {
            if (res && (res.ok || res.type === 'opaque')) {
              cache.put(req, res.clone());
            }
            return res;
          });
        });
      }).catch(function() {
        return fetch(req);
      })
    );
    return;
  }
});
