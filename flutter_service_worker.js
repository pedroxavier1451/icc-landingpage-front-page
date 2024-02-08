'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "18fe89c2e6d681e75ab9e57ce337067c",
"assets/AssetManifest.bin.json": "8a3b20643a843455845708df9ebc9368",
"assets/AssetManifest.json": "c120923b27978a7d35ded19413a2f095",
"assets/assets/archivos/n1.json": "0f113626be92d4a6d27dc4562e0777d7",
"assets/assets/images/administracion.jpg": "5a0f68fc0405da534261604b3064d377",
"assets/assets/images/becas.jpg": "47f0193c91cc81673f3c885035893642",
"assets/assets/images/computacion.jpg": "979c69e681adba5754bcb14ad74cbfdd",
"assets/assets/images/descargas.png": "52e89ccb0099ca0850f2a745062d5e0f",
"assets/assets/images/duracion.png": "7ce930edcd51c0e6c55554e85925763c",
"assets/assets/images/finalizacioninscripcion.png": "fb873d7cec39211d1cfabb34de7db7f3",
"assets/assets/images/finalizacionmatriculas.png": "2fb453712a7921b1b5f1f153a0fd6fd7",
"assets/assets/images/inicioinscripcion.png": "e1c3b768619d678e191bde61592a60eb",
"assets/assets/images/iniciomatriculas.png": "6467e213670a81719334b51ceae5c5f8",
"assets/assets/images/inscripciones.jpg": "a583cb034559624099a20f3dceebe7db",
"assets/assets/images/logoieee.png": "bcd71c0d5023ccf767e96104e14465fe",
"assets/assets/images/logorecicla.png": "5546aabe4f0aa813635d3e3972517ed1",
"assets/assets/images/logos/logo-asu.jpg": "8b263641022db29f92e43b9a6a84ff75",
"assets/assets/images/logos/logo-ecosistema.png": "8bcf7a51315dff9b512d3a36989e63bf",
"assets/assets/images/logos/logo-feups.png": "b6ada8786a0943c94de93cda47c67830",
"assets/assets/images/logos/logo-salesianos.png": "f27e9cb279314080526b7be0ff9b68e4",
"assets/assets/images/logos/logo-start-ups.png": "691067c5402776e42144784a22ba6b3a",
"assets/assets/images/logos/ups-iso-white.png": "c243027034751bb597c5b9a7b1b36fc7",
"assets/assets/images/logos/ups-iso.png": "5891cace6bf48081485e6551cb2ecbe3",
"assets/assets/images/logos/ups-redes-sociales.png": "7f09d90ed9d026c7a2ba86c661b48eea",
"assets/assets/images/logos/ups-white.png": "b7d9ab8353a7515ee2ba830ee6e4b6ce",
"assets/assets/images/logos/ups.png": "d846ed3694da8de93b2ff553fab5187f",
"assets/assets/images/logosoftwarelibre.png": "53600bfe694a49fd293a44e26c09ee73",
"assets/assets/images/modalidad.png": "3b8c4eabdac79707361d27a76bfc28cc",
"assets/assets/images/perfiles/jenniferyepezdocente.jpg": "6e0deb16d4a5066b623c69fd97c0b302",
"assets/assets/images/perfiles/jenniferyepezperfil.jpg": "d511f90607e5f404f350b36bb3f2f9b7",
"assets/assets/images/perfiles/robertogarciadocente.jpg": "406e493b3667928426143ca0e1165eb0",
"assets/assets/images/perfiles/robertogarciaperfil.jpg": "d35b65cb75a40dd7825f96081582e025",
"assets/assets/images/posgrados.jpg": "a6c2aa4a3c114df25c5fc73ceb4b5b99",
"assets/assets/images/titulo.png": "2a6c8fb2625924c27ad92e332893611c",
"assets/assets/images/ups-30a-white.png": "f44127139a0be0d6a6ac4cde3f59e9f6",
"assets/assets/images/ups-30a.png": "ba90efc868074f7627a03e57097935bd",
"assets/assets/images/user_colab_default.png": "60964c351599f2dd0301fa5ac5f0c891",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "bc528e18e23c84218146d53c23769117",
"assets/NOTICES": "44897b7334fc5857803ab712a24c63c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1db488fca7ae536f6a423d0e7f073342",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "bb6fa3720ce5fc7fd1184f95bed97d6f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13d6257d58aa867af4b231b0e16b332d",
"/": "13d6257d58aa867af4b231b0e16b332d",
"main.dart.js": "2738b01cad5376b845b76a316058f7c5",
"manifest.json": "c54f6f9e787c7540d871cb3781145cd4",
"version.json": "25b873c591c48ea9c6e5cd5b45eb4451"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
