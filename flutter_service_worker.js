'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "de3169b33d9e0aa44c7209fbe3cc6f5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20e02f5e6f0ebdc1b91e4989816b09bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79a7d2c26a8eddc3c0231454a305fc5b",
".git/logs/refs/heads/master": "79a7d2c26a8eddc3c0231454a305fc5b",
".git/logs/refs/remotes/origin/master": "a8a49e9c62a48777db3528fba5c2a956",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/db3b0026d87d782a03c473c54da3059b667e5c": "f4d37e26fff3f2907ce24c05472a0d35",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/69a7e5b5e9a138d5821de2d0e3eba2edc9198c": "8a25dbd6737b9135ec3f43f7609d5ea9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/56d754c6c743a6a87d1211642341597c4d6d27": "3016154e7a6b22f288074e58972fc194",
".git/objects/4d/1cc06e36371c301b9fd32128f4fe3989a7a824": "e204304733c57806eba964051ffeba27",
".git/objects/4f/e1852c7dff47bb9d85a854f8b8327bb0e595c7": "e0fdb4ec800ea1185a389149b8d61f1c",
".git/objects/51/e3c51a84f6240c965ab6bf62e1efca763681cc": "f0849861058ab68df13f4b5cc8a008e4",
".git/objects/5d/7bb536eeb98e2138c402c49e7be88dcf02fb20": "68f98064fa4f56f384918ed344babd61",
".git/objects/63/5438647a6daf095d5a71f26a6e27f5e341e6fc": "7db8d9f1b532f43b1d65da9ce9cdb1f5",
".git/objects/64/05e078353deb8efd1406abc53cac3836da8eb6": "f81bec67e3b4fcbd7cd415d01cdfa03d",
".git/objects/68/c7eb51fb1e0cd84fa1566bdbd91b1ee7d1423e": "5a1a9eb5a1e3b7663085304922d15373",
".git/objects/69/f2f933f0cde6480073ce5ca55ecc0aa85e2e99": "3ea5eac5089e5222ce5f5ea18192083e",
".git/objects/6b/4d12335f7dbe5f41408110414280202f7bccd5": "10958f2db989802cc65a21bd73ceed62",
".git/objects/6c/5e5d50e293bf3c4e8018e3ba24236acea04c05": "d6b8f10059f7314d7aa620eac23a4ca8",
".git/objects/70/3eed527a45e1a5fb02f8e87bdf97893d3ac7bf": "48368bd90969d7cecb4f1ea4a73b23f3",
".git/objects/72/4f8b5f0a0ac7d0d99eace81bbe92353bb8c0ab": "b8b0aa0b43d074cff827698081011e18",
".git/objects/78/703b025cbb7fc648c5bdeb58ae48a8e98fce38": "9e69b739568225e06e3dd86aaeb28ae6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/654eb620da260ead615e2d7ff027a249b86009": "79c5e71e1a09e186d9a5d81540dcb829",
".git/objects/86/4d3957a32851d487ea7af6bb6976927c3155e6": "ee035d51b0e624c9f8046e801de25d31",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d5c8e2d044fc6983666565e5636640659d3c75": "0167e69e23280a60a1ac2ea241a71a7c",
".git/objects/93/1655390f1e52c03c78ce513bc31609358f4dae": "9dacb36111465c4ea28f50d0d789607b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/f4f6a1b62f9d758af2ea61662708ea12f387db": "3f742a7cc65ea0668030bb203d9c351e",
".git/objects/a0/ff3577a117081f71442f9cea8413e92fa8c057": "2793cc1d4ee83951deaddfadae070bee",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/dcfa4850832e600a5295e18a8c1165e8fbe49f": "b34df106aa67de59786fe6c7ef3584d5",
".git/objects/a5/6118eecc6f2c041b97b2b473192a252785b5f8": "748087043a52c0c3794b6f7c617715fd",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/a9d1b88375dd39c9057f5188accb3e8c6d43d3": "19f22fc99eb6b79f4839d9565277312e",
".git/objects/b5/528cb28a58215e93bf2b231d5fbf0d55acd326": "5b722a1caa1248eba991504a310cc2b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c889dec91a976560eeb3854a6bbc42fbbf626f": "8b5608504d731d080a888626457b9be6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/1604135367f1407045d9f48edfb773d8af2f7e": "ff055f24497107214351d82c2fa5fa1f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ced1aeff0d568c80357ad0884035a76a69df3a": "3d18c6900893d4b965681d3ee1741343",
".git/objects/dc/25b6d6712c7e1a40b7e6e03b8455d8f72736e5": "524fc230e131d389d625c1593c5bcab4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d333c4052c57101e5a3902a63308f59ff29482": "33bb909cbf56fb21eb04976b3dc1e0f2",
".git/objects/ec/c11e7d1ea86130383dda740ea1228993e887df": "5b3cf7bbeebd3a5696ad3136360501df",
".git/objects/ee/f434d78855739e9fd44b2997b1035efd7942d6": "dd2f667e260269a691215bae66758127",
".git/objects/f1/2a18a621590dfb8746f51f99cdf71e33e468b8": "734031f69960a1d7a857f55df5f42a03",
".git/objects/f5/c2f531eeebd61e58148b61ca913184039423b1": "852dabc25575de8b689a06496232d29c",
".git/objects/f6/6ac0b2e3f388124e7b20029a91ae519393f2d1": "417996b618c6f1fd9875bd9d9b39f6d9",
".git/objects/fb/1f545888df2446aaed63d2e2dd4ade33e1e32c": "c06b2cded66565ede6ae64758a78d878",
".git/refs/heads/master": "5a634037dc2ce6c99bd51338d5d53b34",
".git/refs/remotes/origin/master": "5a634037dc2ce6c99bd51338d5d53b34",
"assets/AssetManifest.json": "584eba65b2c6e2b26e999576ad7eebad",
"assets/assets/fonts/mplus1/MPLUS1p-Bold.ttf": "4dd51c7675dc3e1ac38e4b837524b85d",
"assets/assets/fonts/mplus1/MPLUS1p-ExtraBold.ttf": "6524919a711189598eba2760c3c3ee82",
"assets/assets/fonts/mplus1/MPLUS1p-Medium.ttf": "c3c30d03ec6798b9b07da13b2b325e1d",
"assets/assets/fonts/mplus1/MPLUS1p-Regular.ttf": "9365e1316a34be4beca30615950bea3f",
"assets/assets/images/about.jpg": "2197d9cbb222424d0a94094bf68fa832",
"assets/assets/images/avatar.png": "7142510b56ee037331f84dc99bb205d2",
"assets/assets/images/fundo1.jpg": "12e40e9210dc6d3fd22de5ee5db86fc9",
"assets/assets/images/fundo2.jpg": "acf230f847dbe074b9b6a3a49a9b7742",
"assets/assets/images/fundo3.jpg": "958b3e386d20c6893b4ce3a49cbe344f",
"assets/assets/images/hamburger-com-hamburguer-da-carne-da-carne-e-legumes-frescos-no-fundo-escuro_2829-2671.jpg": "5750c1cf38ccbcca247472478def2808",
"assets/assets/images/lanche.png": "0ac41b7ac27787f2d4f3bd3065ad8c84",
"assets/assets/images/logo.png": "407500ef0bb02b204670b100bf758d76",
"assets/assets/images/logo_rounded.png": "e6a49ecd566efc560b5fe5e71ae7ad82",
"assets/assets/images/repository/misto-quente.jpg": "afade87388998983e4d1c6464f1ae4ac",
"assets/assets/images/repository/x-ifsp.jpg": "fea3167ea687793e1aaa957fc79f2c93",
"assets/assets/images/repository/x-salada.jpg": "e9c1f9a4fdb1dbcae09da20b4dff945b",
"assets/assets/images/repository/x-tudao-suco.jpg": "dc64533a1819e95da7095c211f84c33f",
"assets/assets/images/splash_fundo.png": "8a7760cf0f18ecb4c77b4bd75e21b4c2",
"assets/FontManifest.json": "9d3b0dfb7411d93d762c69c39e65a4d3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f1a5acac9a26ab56caf41b0b993fe0f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9a489be61ab1be35accfc899d7ca6040",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57ea2b5b1ca2cecb084ef6ef19e8393e",
"/": "57ea2b5b1ca2cecb084ef6ef19e8393e",
"main.dart.js": "dc73363fd47eb1df492fbf6aac674db4",
"manifest.json": "75c3641bfe4c4747c2fedec72dfd47d6",
"version.json": "013c152d374225ea589ad808c66cb221"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
