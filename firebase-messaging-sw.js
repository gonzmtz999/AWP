// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyCZHU2faF-dxRujkobkXXk_8sIHoT3ctsc",
  authDomain: "pushfire2-3f709.firebaseapp.com",
  projectId: "pushfire2-3f709",
  storageBucket: "pushfire2-3f709.appspot.com",
  messagingSenderId: "219109525590",
  appId: "1:219109525590:web:d1e252b48126f80e0253f7",
  measurementId: "G-446FL6Z19H"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


