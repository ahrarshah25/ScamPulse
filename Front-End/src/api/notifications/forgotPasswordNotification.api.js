import axiosInstance from "../axios";

export const sendforgotPasswordMailNotification = async (email) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/notifications/forgotPasswordNotification",
    {
      email,
    },
  );

  return res;
};
