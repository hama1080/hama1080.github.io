importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13fc11b7f1dc69450d61.js",
    "revision": "8d0f586f0f784e4f1ca6cb288527571f"
  },
  {
    "url": "/_nuxt/246bbb063c6fc824229a.js",
    "revision": "73bf9d7a0635b06045f665e8197802fb"
  },
  {
    "url": "/_nuxt/31290bc4be1cca77d83d.js",
    "revision": "f6dc8b5756d9ae9649ae5d255a97e59d"
  },
  {
    "url": "/_nuxt/47b736ad160eb1ddc3cf.js",
    "revision": "c8b482254a74d2c461d90f7fd412685b"
  },
  {
    "url": "/_nuxt/58262a7fd9b610757b09.js",
    "revision": "e355d7373e7c4f30b0977a31ef7304e2"
  },
  {
    "url": "/_nuxt/8656c860f67ad3bb2a31.js",
    "revision": "4d003d817d24ec3547320396cedb8f7e"
  },
  {
    "url": "/_nuxt/9dcdbd11e479123a82cb.js",
    "revision": "950ee58c496c08eaf141249ad265a1a3"
  },
  {
    "url": "/_nuxt/aada32c3d48a88e31805.js",
    "revision": "a6995581919932c1cb129634c96de8a6"
  },
  {
    "url": "/_nuxt/adc854b41f892729ff69.js",
    "revision": "e4d358abd482eab239e667a1f2da80bf"
  },
  {
    "url": "/_nuxt/ae713f312aa4f7416a0a.js",
    "revision": "f02fc202746c873dec26342806d41b73"
  },
  {
    "url": "/_nuxt/bb1f18ce43fc7e635b81.js",
    "revision": "fff3820476bd019366f7f2ddfeb9a443"
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
