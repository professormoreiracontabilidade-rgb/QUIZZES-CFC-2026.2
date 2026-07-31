const CACHE_NAME="quizzes-cfc-2026-2-v5";
const ARQUIVOS=[
  "./",
  "./index.html",
  "./disciplinas.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./data/quizzes.json",
  "./pages/disciplina.html",
  "./index_quizzes_despesas_publicas_120_questoes.html",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ARQUIVOS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE_NAME).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
