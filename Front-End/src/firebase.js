import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC15nRrK9sEPCOVptn5Wxu5W4EqgwHSI68",
  authDomain: "scampulse-application-pwa.firebaseapp.com",
  projectId: "scampulse-application-pwa",
  storageBucket: "scampulse-application-pwa.firebasestorage.app",
  messagingSenderId: "385260777282",
  appId: "1:385260777282:web:3542310c98582cc264a2db",
  measurementId: "G-HF92WN8G7D"
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);