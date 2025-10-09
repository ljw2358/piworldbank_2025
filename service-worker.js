const CACHE_NAME = 'piworldbank-en12-v2';
const ASSETS = [
  './','./index.html','./styles.css','./app.js','./i18n.js','./manifest.webmanifest',
  './assets/icon-192.png','./assets/icon-512.png',
  './lang/en.json','./lang/uk.json','./lang/ko.json','./lang/zh.json','./lang/hi.json',
  './lang/ar.json','./lang/es.json','./lang/vi.json','./lang/id.json','./lang/pt-BR.json',
  './lang/ja.json','./lang/de.json','./lang/fr.json'
];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate', e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null)))); self.clients.claim();});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
