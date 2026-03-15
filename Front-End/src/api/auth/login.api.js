import axiosInstance from "../axios";

export const userLogin = async (email, password) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/auth/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );
  return res;
};
