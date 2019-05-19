importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a55315a3f3f0f2844ac.js",
    "revision": "e355d7373e7c4f30b0977a31ef7304e2"
  },
  {
    "url": "/_nuxt/2a76a86692beed5ea7d7.js",
    "revision": "8d0f586f0f784e4f1ca6cb288527571f"
  },
  {
    "url": "/_nuxt/30e5856e00ec1e87c270.js",
    "revision": "d367e09b07b1964cb5507d951ca5f1fe"
  },
  {
    "url": "/_nuxt/42e5ff70f98742427f4a.js",
    "revision": "f02fc202746c873dec26342806d41b73"
  },
  {
    "url": "/_nuxt/57d6868605a15dd17ed4.js",
    "revision": "02b09fb86db8cfd07c4903f60775f768"
  },
  {
    "url": "/_nuxt/7a3c92ac1c27c83a37a2.js",
    "revision": "950ee58c496c08eaf141249ad265a1a3"
  },
  {
    "url": "/_nuxt/8fe6e04eaa86245f420a.js",
    "revision": "4d003d817d24ec3547320396cedb8f7e"
  },
  {
    "url": "/_nuxt/9f733db8439ca00a502a.js",
    "revision": "c8b482254a74d2c461d90f7fd412685b"
  },
  {
    "url": "/_nuxt/a11655a5baf95bfe40d0.js",
    "revision": "f6dc8b5756d9ae9649ae5d255a97e59d"
  },
  {
    "url": "/_nuxt/a22eed450c4304fef96e.js",
    "revision": "a4411d893d4994208b008edb11dcf4e3"
  },
  {
    "url": "/_nuxt/e710fc66d9ee2f209a39.js",
    "revision": "73bf9d7a0635b06045f665e8197802fb"
  }
], {
  "cacheId": "portfolio2",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
