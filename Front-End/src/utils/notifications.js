import { messaging } from "../firebase";
import { getToken, onMessage } from "firebase/messaging";
import axios from "axios";

const VAPID_KEY =
  "BKlINnIxXqAg4rtxaRXL7-oiXmpeCpH5_7fE_JcNdqWaP_EoyGLxpwIVw17p4Id2wYSQ-44BP0AyDvZKI5LnZ6Q";

export const requestNotificationPermission = async (user) => {
  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("Permission denied ❌");
      return;
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js",
      ),
    });

    if(user) {
      await axios.post("http://localhost:5000/api/v1/notifications/save-token", {
      email: user.email,
      token,
    });
    console.log("Token saved to backend ✅");
    } else {
      localStorage.setItem("notificationToken", token);
      console.log("Token Saved To LocalStorage ✅")
      
    }
  } catch (error) {
    console.error("Notification error:", error);
  }
};

export const listenForegroundMessages = () => {
  onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    alert(`${payload.notification.title} - ${payload.notification.body}`);
  });
};
