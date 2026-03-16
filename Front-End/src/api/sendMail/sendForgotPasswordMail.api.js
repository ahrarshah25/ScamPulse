import axiosInstance from "../axios";

export const sendForgotPasswordMail = async (email) => {
  const res = axiosInstance.post(
    "http://localhost:5000/api/v1/sendMail/send-reset-mail",
    {
      email,
    },
  );
  return res;
};
