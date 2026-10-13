// ACE Attendance: makes the app installable. It does not store pages, so students always get the newest version.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.method === 'GET' && e.request.mode === 'navigate') e.respondWith(fetch(e.request)); });
