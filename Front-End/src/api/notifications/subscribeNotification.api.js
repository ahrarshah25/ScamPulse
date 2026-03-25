import axiosInstance from "../axios";

export const sendSubscribeNotification = async (email) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/notifications/subscribeNotification",
    {
      email,
    },
  );

  return res;
};
