import axiosInstance from "../axios";

export const sendSignupNotification = async (email, name) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/notifications/signupNotification",
    {
      email,
      name,
    },
  );

  return res;
};
