'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cec4f4be902e4730599dc9afac86f1f0",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "a26e44e02c2eff90494ae552e9c7df9f",
"/": "a26e44e02c2eff90494ae552e9c7df9f",
"main.dart.js": "855a1f3051af81033ec376ffc16eaffc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "cfe59da2576674557f028e8193cac97b",
"assets/AssetManifest.json": "75b3631bcbc5bd618a0949a6f1b38644",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "c967a6212d6e1f6dd2d6b774880aaf9a",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "9aec64663bcdaabdb60c40665b6aacb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e9965c0e096db3b7fd206fa207f18c5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ed003dd7dfddfa204ff5c5d749c388b",
"assets/fonts/MaterialIcons-Regular.otf": "7809869ac262e1e7db103e68aaad8e98",
"assets/assets/images/syria.svg": "2cc1fb4878d32e76a458da38eb0ab836",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "42de9860d224aacece5a04811994a11b",
"assets/assets/images/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/uae.svg": "2041fa34b794642a293992c5958734e9",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/ios.svg": "4839d919fcf3af179ec68ff8ff79b71c",
"assets/assets/images/swift.svg": "a52c32035bb9f8cc14d28b891bfdb9c9",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/apps/abnic1.webp": "414f6759910eb31c925c33d923cb20e3",
"assets/assets/apps/infinity3.webp": "aa06c4f8ca3835ea8749cc3a01bceadc",
"assets/assets/apps/infinity2.webp": "eabcd66ee6c3ca661b98f1c3e56482ce",
"assets/assets/apps/izon1.webp": "b2e182e14dadfc1c892b80a8cc9e7d06",
"assets/assets/apps/actionz3.webp": "7eacddfd6bb5843ad92c285a8676a1d6",
"assets/assets/apps/quickIOrder1.webp": "5e3b2499f496b8b48a5d47dd2972cd1c",
"assets/assets/apps/actionz2.webp": "269b56c42455bb9cbf5772b334033947",
"assets/assets/apps/quickIOrder2.webp": "a41d7e9212841cbe14585c3f790349d7",
"assets/assets/apps/actionz1.webp": "2e32eec4f3465ba210e3abe18963a634",
"assets/assets/apps/quickIOrder3.webp": "2d0b2972e78a65adf1eac052e668e683",
"assets/assets/apps/abnic3.webp": "69348216069f4bed2437a6bccce36ebd",
"assets/assets/apps/infinity1.webp": "613bb782ef08065b1bfecbcfee9ced74",
"assets/assets/apps/izon2.webp": "7816eeb758556638115d852706cbbf12",
"assets/assets/apps/dawaa3.png": "839bdca2163bf677e11932d1896ea5c3",
"assets/assets/apps/izon3.webp": "77459203d419a54794d01c9ac0006c75",
"assets/assets/apps/dawaa2.png": "4a6648c4812f9cb2ef44cf614834058c",
"assets/assets/apps/abnic2.webp": "ffaa8ade107656d6775d09c3cd77835b",
"assets/assets/apps/dawaa1.png": "e99c3b638d625d2aa7cd0d7a9567cff1",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
