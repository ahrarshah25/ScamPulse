import { createContext, useContext, useEffect, useState } from "react";
import { requestNotificationPermission } from "../utils/notifications";
import { UserDataContext } from "./DashboardUserContext";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const user = useContext(UserDataContext);
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    if (Notification.permission === "granted") {
      setPermission("granted");
    } else if (Notification.permission !== "denied") {
      const result = await Notification.requestPermission();
      setPermission(result);

      if (result === "granted") {
        requestNotificationPermission(user);
      }
    }
  };

  return (
    <NotificationContext.Provider value={{ permission }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
