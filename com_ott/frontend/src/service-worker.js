

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';


import {setDefaultHandler} from 'workbox-routing';
import {NetworkOnly} from 'workbox-strategies';
import {offlineFallback} from 'workbox-recipes';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);


const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  
  ({ request, url }) => {
   
    if (request.mode !== 'navigate') {
      return false;
    } 

    if (url.pathname.startsWith('/_')) {
      return false;
    } 
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } 

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


registerRoute(
  
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), 
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.

// Offline fallback
setDefaultHandler(new NetworkOnly());
offlineFallback();