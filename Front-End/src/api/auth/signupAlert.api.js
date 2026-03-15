import axiosInstance from "../axios";

export const sendSignupAlert = async (name, email) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/sendMail/signupAlert",
    {
      name,
      email,
    },
  );

  return res;
};