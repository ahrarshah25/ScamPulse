import { useNotification } from "../../context/NotificationContext";
import { requestNotificationPermission } from "../../utils/notifications";

export default function EnableNotification({ user }) {
  const { permission } = useNotification();

  if (permission === "granted") return null;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg max-w-sm mx-auto">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Enable Notifications 🔔
      </h2>

      <p className="text-gray-500 text-center mb-4">
        Stay updated with latest alerts and messages.
      </p>

      <button
        onClick={() => requestNotificationPermission(user)}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-xl shadow transition"
      >
        Allow Notifications Now
      </button>

    </div>
  );
}