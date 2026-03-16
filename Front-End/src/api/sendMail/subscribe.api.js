import axiosInstance from "../axios";

export const subscribeEmail = (email) => {
  return axiosInstance.post(
    "http://localhost:5000/api/v1/sendMail/subscribe",
    {
      email,
    },
  );
};
