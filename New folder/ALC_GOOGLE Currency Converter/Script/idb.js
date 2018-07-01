const cacheName = 'resources';

const urlsToCache = [
    './index.html',                
    'javascript/script.js',
    'stylesheet/index.css',
     'https://free.currencyconverterapi.com/api/v5/currencies',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
       'bootstrap/bootstrap.css',
  'bootstrap/material-kit-html-v2.0.3/assets/css/material-kit.css?v=2.0.3',
  
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.info('loading');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', event => {
  event.waitUntil(
      caches.keys()
        .then(keyList => Promise.all(keyList.map(keyCache => {
        if (keyCache !== cacheName){
            console.log("delete", keyCache);
            return caches.delete(keyCache);        
        }
    })))
    );
  return self.clients.claim();
});


self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(response => response || fetch(event.request)
      .then(response => caches.open(cacheName)
        .then(cache => {
          cache.put(event.request, response);
            return response.clone();
          }) 
          .catch(event => {
          console.log('Oops! An error occurred.');
        }))
      );
    });