import axiosInstance from "../axios";

export const sendResetPasswordNotification = async (email) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/notifications/resetPasswordNotification",
    {
      email,
    },
  );

  return res;
};
