"use strict";var precacheConfig=[["/newTechWebsite/index.html","8a8816cbd5dbcc28596ce56734cd0c6f"],["/newTechWebsite/static/css/main.40096292.css","8e4f54d6b7a34da805b2864fa6513928"],["/newTechWebsite/static/js/main.adc1663d.js","31f33d8f5cb626ea84010c1190c6b614"],["/newTechWebsite/static/media/docks.8f489c16.jpg","8f489c163c2e1dba6705f3ea14eb66c0"],["/newTechWebsite/static/media/dummyProfile.4b508f06.jpg","4b508f0668a1423b273e6fd0704c6363"],["/newTechWebsite/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/newTechWebsite/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/newTechWebsite/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/newTechWebsite/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/newTechWebsite/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/newTechWebsite/static/media/horizon_footer.1b1ef259.png","1b1ef25951e6e2080a9f37c5ff6a3b79"],["/newTechWebsite/static/media/horizon_full.67eb0e1f.png","67eb0e1f6a4b29d68ff0be02090bf601"],["/newTechWebsite/static/media/horizon_small.845da3b5.png","845da3b5dadf5792837956f8218f66d8"],["/newTechWebsite/static/media/ikeaLogo.5de83783.jpg","5de837831bcfd3c935b3b1bf3c0eaf23"],["/newTechWebsite/static/media/instagram-black.c6417382.svg","c64173826398fe092de01d83334ae03d"],["/newTechWebsite/static/media/instagram-white.14e791b7.svg","14e791b7f4f0f667ed7e025610944d3d"],["/newTechWebsite/static/media/kellerW.c1383d1f.jpg","c1383d1ffd8cca709eedc234de6e29fe"],["/newTechWebsite/static/media/linkedin-black.1bc81f31.svg","1bc81f315f12b28ec266ecd2312227d6"],["/newTechWebsite/static/media/linkedin-white.1accee7a.svg","1accee7ae904e34de37b8d868a064307"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/newTechWebsite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});