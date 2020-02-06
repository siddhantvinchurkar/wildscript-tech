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
    "revision": "6b7cf08f28785f80fef23b66cfb73840"
  },
  {
    "url": "manifest.json",
    "revision": "2b0c11aa34af3a5ed8acec2032b42162"
  },
  {
    "url": "privacy/index.html",
    "revision": "09b72ba91b229265a9e68873bc0a2b4c"
  },
  {
    "url": "resources/images/404.webp",
    "revision": "0d6ca04f8ceb6d96213aaa60d23266be"
  },
  {
    "url": "resources/images/aiwc/aiwc-1366.webp",
    "revision": "73dbb876810db32c33b2bd41d494cf5d"
  },
  {
    "url": "resources/images/aiwc/aiwc-1920.webp",
    "revision": "0c787e0e058ee1e3aa5e21cc769fc0aa"
  },
  {
    "url": "resources/images/aiwc/aiwc-432.webp",
    "revision": "2b1fcea20076653c821836c265af1c26"
  },
  {
    "url": "resources/images/aiwc/aiwc-96.webp",
    "revision": "ef1872bafc1b173eada6bd228eb58430"
  },
  {
    "url": "resources/images/bpr/bpr-1366.webp",
    "revision": "53b59f9b4c8234455023387f84480953"
  },
  {
    "url": "resources/images/bpr/bpr-1920.webp",
    "revision": "3fcf26145e036e9d3ae82a64c23ff6f2"
  },
  {
    "url": "resources/images/bpr/bpr-432.webp",
    "revision": "bc7cf9e0948b52f0bf52aae5d386490b"
  },
  {
    "url": "resources/images/bpr/bpr-96.webp",
    "revision": "c99e5f76e11dadc1fc51d6b1d557c158"
  },
  {
    "url": "resources/images/cb/cb-1366.webp",
    "revision": "32e0a46688ddc68e75d652e37adb65f1"
  },
  {
    "url": "resources/images/cb/cb-1920.webp",
    "revision": "73afa6e59b789f98858d46910cbe0fce"
  },
  {
    "url": "resources/images/cb/cb-432.webp",
    "revision": "8ae96d31fc2a07d9fbffa3954cd9865a"
  },
  {
    "url": "resources/images/cb/cb-96.webp",
    "revision": "e3737d3fa57a3794b894d56abb171ffb"
  },
  {
    "url": "resources/images/github.webp",
    "revision": "0db29098921b2ed01f48dfe98e6351ec"
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
    "url": "resources/images/ipr/ipr-1366.webp",
    "revision": "48d666be1b0ff387ed6334df9eac1358"
  },
  {
    "url": "resources/images/ipr/ipr-1920.webp",
    "revision": "694d9ec2c66fc80445415bd30eda86a0"
  },
  {
    "url": "resources/images/ipr/ipr-432.webp",
    "revision": "d3fcc3c44b2090b816833c7366f371d3"
  },
  {
    "url": "resources/images/ipr/ipr-96.webp",
    "revision": "c99e5f76e11dadc1fc51d6b1d557c158"
  },
  {
    "url": "resources/images/matchday/matchday-1366.webp",
    "revision": "d79a274e7b264e6e3f102de51983e8c8"
  },
  {
    "url": "resources/images/matchday/matchday-1920.webp",
    "revision": "6fbdae7294ce76c5e73f1197367775e0"
  },
  {
    "url": "resources/images/matchday/matchday-432.webp",
    "revision": "a34dba8c2e60ebd4ba709bcb4ed3457d"
  },
  {
    "url": "resources/images/matchday/matchday-96.webp",
    "revision": "c23935b9fce207710a9a82b1716d618c"
  },
  {
    "url": "resources/images/onyx/onyx-1366.webp",
    "revision": "5421bd8aeb7e3115591c8af42d26ef52"
  },
  {
    "url": "resources/images/onyx/onyx-1920.webp",
    "revision": "f1cafbfbaa491dadd7cb6bbe6ff69fe7"
  },
  {
    "url": "resources/images/onyx/onyx-432.webp",
    "revision": "1620d0487bbbdc90deaaf517017c0786"
  },
  {
    "url": "resources/images/onyx/onyx-96.webp",
    "revision": "76bda585e75cc9c313f566306f2475b5"
  },
  {
    "url": "resources/images/siddhantvinchurkar.webp",
    "revision": "5c1b88567953ae428f3def73fa8f9544"
  },
  {
    "url": "resources/images/ts_icons/as.webp",
    "revision": "c3d06e250e0240d82c815018d4cb0797"
  },
  {
    "url": "resources/images/ts_icons/c.webp",
    "revision": "848cffce888c29e4f0fa35161d337557"
  },
  {
    "url": "resources/images/ts_icons/css3.webp",
    "revision": "8242ea54b22958ab6d8f18bbb3c8f3cd"
  },
  {
    "url": "resources/images/ts_icons/df.webp",
    "revision": "1b3602084b0702bbb8db42b529c47e78"
  },
  {
    "url": "resources/images/ts_icons/fb.webp",
    "revision": "7b4c905bba31bc2f708d9b0ee9a2cf89"
  },
  {
    "url": "resources/images/ts_icons/gs.webp",
    "revision": "447db297b679ee7e6e01cde157ccb8fb"
  },
  {
    "url": "resources/images/ts_icons/html5.webp",
    "revision": "e96ff1078843f09567b03cf95c0ac2cf"
  },
  {
    "url": "resources/images/ts_icons/jq.webp",
    "revision": "172ada17ebc0bd54fda8b2fd89c0b239"
  },
  {
    "url": "resources/images/ts_icons/js.webp",
    "revision": "b53dc919dca83ef8869bb15ee8c7431f"
  },
  {
    "url": "resources/images/ts_icons/m.webp",
    "revision": "28d2ec0bb60195e95b31d55a86208473"
  },
  {
    "url": "resources/images/ts_icons/ps.webp",
    "revision": "fb8f3ff1165f4e474109a9509790d602"
  },
  {
    "url": "resources/images/ts_icons/pwa.webp",
    "revision": "a1e5cc6ce232d2aee0cb07e5e7302207"
  },
  {
    "url": "resources/images/ts_icons/rp.webp",
    "revision": "44eb277e399fe4465ac8a831af4c8405"
  },
  {
    "url": "resources/images/ts_icons/sg.webp",
    "revision": "326f6998c7b312b74924a39ecb879c0f"
  },
  {
    "url": "resources/images/ts_icons/tci.webp",
    "revision": "63d13d7c30bc11f3b401789bbb2807ed"
  },
  {
    "url": "resources/images/ts_icons/wb.webp",
    "revision": "b1a078676e4c1bc8a28e0fc20c1da328"
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
    "revision": "8f2bd55d31c72d762702c6023f425c5d"
  },
  {
    "url": "resources/scripts/lazysizes.min.js",
    "revision": "d8513e7860f747ccf55c52308943beab"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "2b4ae20fb0bdff36275305b06b271d9c"
  },
  {
    "url": "resources/scripts/materialize-passive-listener-mod.min.js",
    "revision": "b339732d61f433f326d5f6279626e5aa"
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
    "revision": "a9b30e4f9e9779d6736477190a5831a1"
  },
  {
    "url": "resources/styles/materialize.min.css",
    "revision": "1035ecff3f17989aa89f6bb37efa21ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
