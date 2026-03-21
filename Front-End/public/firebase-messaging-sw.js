importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC15nRrK9sEPCOVptn5Wxu5W4EqgwHSI68",
  authDomain: "scampulse-application-pwa.firebaseapp.com",
  projectId: "scampulse-application-pwa",
  storageBucket: "scampulse-application-pwa.firebasestorage.app",
  messagingSenderId: "385260777282",
  appId: "1:385260777282:web:3542310c98582cc264a2db",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
