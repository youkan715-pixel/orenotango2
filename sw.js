// オフライン対応。まず保存済みを返し、裏で新しい版を取りに行く。
const CACHE = 'idioms-v7';
const FILES = ['./', 'index.html', 'data.js', 'examples.js', 'passages.js', 'dict.txt', 'ipa.txt', 'manifest.json', 'icon.svg', 'icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  // 自分のファイルだけ保存する。例文サービスなど外への通信には手を出さない。
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
