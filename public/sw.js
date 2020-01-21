/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f7010e51e69f15d78d06412c0e19ab5d"
  },
  {
    "url": "index.html",
    "revision": "061b5ef082f6aa25843c3b337f348ecc"
  },
  {
    "url": "manifest.json",
    "revision": "2b0c11aa34af3a5ed8acec2032b42162"
  },
  {
    "url": "privacy/index.html",
    "revision": "157b38bf84a7af1beb50645ab3b439ff"
  },
  {
    "url": "resources/images/404.webp",
    "revision": "0d6ca04f8ceb6d96213aaa60d23266be"
  },
  {
    "url": "resources/images/icons/favicon_144.png",
    "revision": "baa296edd097a50598e63487f674da91"
  },
  {
    "url": "resources/images/icons/favicon_192.png",
    "revision": "72abd5388e2ae3ddc330b3ba8d9e73cb"
  },
  {
    "url": "resources/images/icons/favicon_192.webp",
    "revision": "61a707de01f6490e32c7f11cd44214ec"
  },
  {
    "url": "resources/images/icons/favicon_48.png",
    "revision": "f40e0ffdb907515304c94403d24667fd"
  },
  {
    "url": "resources/images/icons/favicon_512.png",
    "revision": "a742749084cd6f9ee67f7e342d822d26"
  },
  {
    "url": "resources/images/icons/favicon_72.png",
    "revision": "2f75665da9de7c328187860a11592cf9"
  },
  {
    "url": "resources/images/icons/favicon_96.png",
    "revision": "22270522731218ae9bb2fbf163ee153f"
  },
  {
    "url": "resources/images/icons/og_512.jpg",
    "revision": "9efe38f135fe48d4bac1ed609b198619"
  },
  {
    "url": "resources/images/siddhantvinchurkar.webp",
    "revision": "f9027a3efb7d88d52d316fc58a8c9cd2"
  },
  {
    "url": "resources/scripts/firebase-analytics.js",
    "revision": "326350755aa2a2bf3c73ae9e75886d34"
  },
  {
    "url": "resources/scripts/firebase-app.js",
    "revision": "308a195c508c4d00cf441236020a6292"
  },
  {
    "url": "resources/scripts/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "resources/scripts/lazysizes.min.js",
    "revision": "d8513e7860f747ccf55c52308943beab"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "b3d36870efcd477b905670b5182f955b"
  },
  {
    "url": "resources/scripts/materialize.min.js",
    "revision": "87d84bf8b4cc051c16092d27b1a7d9b3"
  },
  {
    "url": "resources/scripts/sweetalert.js",
    "revision": "609aa78f6cbd0b9a45a3b1f893c99db8"
  },
  {
    "url": "resources/sounds/hmm.wav",
    "revision": "14784a2ef1c717eb2ae055ea5703f415"
  },
  {
    "url": "resources/styles/main.css",
    "revision": "1c383a779e6b4109fd9a92ed980869cc"
  },
  {
    "url": "resources/styles/material-icons.css",
    "revision": "e836a138540b4f2b2a9ac67d677699ca"
  },
  {
    "url": "resources/styles/materialize.min.css",
    "revision": "1035ecff3f17989aa89f6bb37efa21ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
