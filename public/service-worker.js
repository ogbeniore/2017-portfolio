var cacheName = 'v1';
var cacheFiles = [
    "./",
    "./index.html",
    "./assets/css/typer.css",
    "./assets/css/bulma.css",
    "./assets/css/style.css",
    "./assets/JS/app.js",
    "./assets/JS/typer.js",
    "./assets/Js/script.js",
    "./contact.html",
    "./gallery.html",
]
self.addEventListener('install', function(e) {
    console.log("[serviceWorker] installed")
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] caching cachefiles");
            return cache.addAll(cacheFiles);
        })
    )
})
self.addEventListener('activate', function(e) {
    console.log("[serviceWorker] activated ")

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                if (thisCacheName !== cacheName) {
                    console.log("[ServiceWorker] Removing cached files from", thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})
self.addEventListener('fetch', function(e) {
    console.log("[serviceWorker] fetched", e.request.url);
    //Checck it out
    // if (response) {
    //     console.log("[Service Worker] found in cache", e.request.url);
    //     return response;
    // }
    // return fetch(e.request);
})