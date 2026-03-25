import axiosInstance from "../axios";

export const sendLoginNotification = async (email, name) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/notifications/loginNotification",
    {
      name,
      email
    },
  );

  return res;
};