'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "85363c62cd925319b5fae15d384e3810",
".git/config": "ee54a0e055dbca0e3ce2c11982dde89b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8134836b736da82d18fb8baaf7786b82",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "955cc0629099145acc429ef605286241",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a62763305bf7e3f275980aa23518d1b4",
".git/logs/refs/heads/main": "a62763305bf7e3f275980aa23518d1b4",
".git/logs/refs/remotes/origin/main": "e059509af3654e9d56130ada6b6f932a",
".git/objects/00/3cdaaed399d4e7f58d99db3efef0d55a55a282": "89959f8fa4f7f8d4f4865a995c178ad0",
".git/objects/02/4e3dc6ea800d59ececd1db2d884a90732389db": "9e7688b0a4b92dc43d91e89dd5c88cb8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/8f4c0903b59ac1646d8b6b66d10c1aff5c0c17": "534150437082fb9b074e6a4622bf532f",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/0e/9b50e017275e36002bb58ccc1aef89d7094cfc": "729344b8df59a567576e02e93fb46ea6",
".git/objects/0f/01b7b21c05353e49f3f95ae2a8ab2fcb6b3640": "af6270ea3608232b69d33d65e3d2596f",
".git/objects/0f/ab48a9a9f1e3eaffb5e8159599caecb50e852d": "27e663cac55c568629aac50ae671568e",
".git/objects/10/7d294e04038ddaef33068e22bf1e55eef6fec1": "83de12454a2d6b0bf779caabbe4f2366",
".git/objects/10/bb784c0b650ec5a5a67cd5343c19604a7f273f": "0d3dff9e87746ba047b1624eadef621d",
".git/objects/15/7055990e52259efdb71565fb99d06f2fbd33e4": "b2180a1c267c564eece33c68e2e78b4d",
".git/objects/1a/f6ffe6a083bfcd8fdb4acb5c3659fb1763cb5e": "f1ced0f036abb96b0714af68917dd74d",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1d/d1f39fb45d15ce3d731d0a8db0ade058b42c26": "858aeaf859ead88482c79110f111328d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/fd04a340382a96d4ce949f6826af6b7ffcebd8": "84d761dcf33774e643116878d69e929c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/f97aa8b5d5e1c22a2ab1b47ad0660b5cb388d6": "a89c842e65ab0e056bc9b45f5ee6c1aa",
".git/objects/24/865bd387f7053bf76d232495ba3ae983c6aac4": "b51910970f44eebe637330689766fa40",
".git/objects/26/61da10ba99017beaf3bec6b5ef967af2a580ff": "a40c844a89c8b91cb281e99538dbb163",
".git/objects/28/30e67dbaa4bb51ceaac938ed3a84aab2ad6f8a": "18c82a63ab4672c8b816ad2d156c266d",
".git/objects/28/8e4232818780a1c8a20c87d542069c24d41a7a": "77adf6d759a9254568d427495b93a8e5",
".git/objects/37/e9142be726e13f39a85723f16b179c74677987": "62801cec360c0b9fc36cac54038a5976",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/580f9c5eb198cde81d85312d193497b5dcdede": "b9860ab758cd9b4ef58e2079a17624d5",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/6c9a7cc78e18cce24bdbf723d1eb7f406708dc": "616f228861fb0cfad63eddc4a48a217e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/77a88f326030bf6d0ccd12ee94ef59c3ff0d05": "27878d8754bb7f867f32378aebc4b990",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/fb92c059e13dbe6efa23ca1756105ea2b1eb11": "d93dffe6f1ee89790de329ea430159b2",
".git/objects/51/39f5201a14190d2ce86bf1fa6936e89ec5f4f5": "b62734c59c0e99b836453c924dcbd4ed",
".git/objects/51/f8f3e777d945b1d2edff5ab8e3d8fc7fbde341": "5e437b33c5f136ac52a974e1407138c6",
".git/objects/53/2bd6414a594e82e668dad551a8e19e66ef7c54": "fd1fe0100ed4d5ce5666ea0677d3d546",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/3cb057cf44d38a9d42bd3433f8ea708db1af1e": "7fcec877af2bab652331290f290bead5",
".git/objects/59/6325b2a34e1f24fcee91293932e2647e79bdc8": "d3ca45a8e8a6059b7bcf109d186f216f",
".git/objects/5d/7f0d09124d9762ec0ce76cadb1a44cca9c4c00": "e3f0ee915634c8a83d1248c94335ac47",
".git/objects/5f/43401423149fa7116a0f9eda66fc874a20d319": "7dc650f93d5e03ea6309c0ec5aeb2442",
".git/objects/66/14b69d9db8256409c6a1a30268611d44351d07": "a8ace02affdf870635626be56b686698",
".git/objects/67/e76b21078ca040a8522f309c91cb4bc380e7df": "b3265cbaafc58836909c27e33300124d",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/943548f5ce49c4bcc31f39cbc0876611bb48e3": "e5d2e4dffab3e33eff2542865f3aa2e1",
".git/objects/77/cdca97cfae18743aa4bcbb9a139657f3b620ff": "3edb8d4f280b6e08a137cbb8bd6ad6f2",
".git/objects/79/05a69a59419eb381157734cb56fce3a8d637ec": "d28879b7b70c7cc215fef0a00832f658",
".git/objects/7f/eec1ab24aed44e2495b616ba06a59c7590bd80": "8ebd6d754ad2c0eb60bb02c9a9d069dd",
".git/objects/85/dbf5acd1d92eeff5320af540870f71801f42ec": "a4b0538903b675293522834ebf63258e",
".git/objects/86/05c94dd40943bc239533a16ef9edc005fcef58": "23c06b16b68a372f14435080f919cfd8",
".git/objects/86/d607387df9fa7936fc1bd689b36b6c07b6c9fe": "0b2a056a7bd5b13dfa022e44c24e2a83",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/08c893da5cf216ad9d31c4eaa193898c80ca74": "bd4e918101d712fe94344cc7cebc9b07",
".git/objects/8d/cf29a497be3a5b60b22c0f03e8c9ac5700b1fb": "1ab166a3791c2e6ccad0b404cdb351ed",
".git/objects/90/99b67661d0e66717da34ab7113f71ad6da4f40": "a5e985176f8d5dc216548add86e92136",
".git/objects/91/73024dda2707ec925a50f6148bc1f03a60f759": "5bb21e54af5bf596ee57a0fa664c5de9",
".git/objects/9b/cba5d72585bd2a83d48bbad2ca342c288a0c8a": "71003c1a6dea2cbc0cac365636716eaa",
".git/objects/9d/a9d32f7f395070e439ef244b7b71dc8e040f33": "b721491c4a2fe87e9b06ca125ebef45b",
".git/objects/9f/065edc18a12f1067f8ef84d14149ba555b7fd4": "6e9d7f7992c91fdb0f457fd5f70218e8",
".git/objects/a5/b88c72463f6577bb51ea76b905c559a0d3d54c": "f67bc70f2243fdab520d75f300a85a19",
".git/objects/b1/0baf0da193d6e9e11266cae264afeae5ad78c0": "274f81dcfdfd652b68d2bb59be31b963",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/531dc721e852815df1cc61c87511718e91dc97": "b0ce22aef8c2152b0ca161bf4c960028",
".git/objects/c7/ae78b40d2a22b418aea69e7bf1f7e8852ec870": "44eee55ffb708072f1bd98e9c5f37578",
".git/objects/ce/242b5adbbee3e9158f79c7f3db97d458cdd4f5": "8e0714ab4505a1f6027ea9f1305817e9",
".git/objects/d6/219486dd8b192fe53a58b98543c5dcd447623a": "075fc64726960b7e025ab7b5ee77f39e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5fca62a1ea2e11716c06fe20d1a267a0e0c3d0": "656cabf5bc6a42ac157a44d64006c48c",
".git/objects/d7/63aa268a1a774d335a75fc8c28ec6fbb922e51": "fa8475e621a0c8bbdb3ed9d8aba98afc",
".git/objects/df/ebd1e43ee65b6bd4391455a1fb5d5844cbf21c": "201dc353665b56748231968f0091f69d",
".git/objects/e1/4d1e62b8296fa511a728c9a0ee327f3d2d338f": "8eed5c632280353ba709db5753171493",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1e0c571e5eb21e12b54bacdd0bbaa7e7027ebe": "81edd2cd0e0cf8deb7156671fbd4612b",
".git/objects/ef/710e96ad81205835cf56e31a29c8eb934ff2a7": "272875174ad823410a49d73baa4d5344",
".git/objects/f3/d8757a04347c08f9a2b37555a3709c7e14caa7": "2ddad4fdbfbf52d5511f8ff84827d76d",
".git/objects/f7/68087ee156dafe7b7d41dfa9e03bf8f83ebaee": "dbdd6eca20b1a740efde36d05a8a7e2d",
".git/objects/f8/a55f673f3f216552854adfef5015f8d02abc23": "0eaa132ea20a494d6310fceab04cd998",
".git/objects/fd/ec1c3cbeaaa44fe4081e0beac11d4422628f81": "725df0e47e5dd5e04819825e2ffbd0b8",
".git/ORIG_HEAD": "42cfdc341a0e71b8a748463e91cd7c5d",
".git/refs/heads/main": "8ea927468bbec83ae38f6bc7f202e374",
".git/refs/remotes/origin/main": "8ea927468bbec83ae38f6bc7f202e374",
"assets/AssetManifest.bin": "88c7ab510fea4f837b6e44cd0ff6a2e5",
"assets/AssetManifest.bin.json": "f37eda3d31db75da50652ce8bf154286",
"assets/AssetManifest.json": "2091fe5298e371f55c6c67fd333f0171",
"assets/assets/archivos/n1.json": "0f113626be92d4a6d27dc4562e0777d7",
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
"assets/fonts/MaterialIcons-Regular.otf": "74b2a3de7e37ed6f208863a7549bf258",
"assets/NOTICES": "5dc96d3e2db26c9851203115783f8b2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f7ca7b9bd096a250bf5416f08efa0922",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "bb6fa3720ce5fc7fd1184f95bed97d6f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5672af7374f522246a84db6f68bd1bd",
"/": "f5672af7374f522246a84db6f68bd1bd",
"main.dart.js": "83c79378afe927e05febb9623e316c0f",
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
