import axiosInstance from "../axios";

export const sendLoginAlert = async (email) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/sendMail/loginAlert",
    {
      email,
    },
  );
  return res;
};
