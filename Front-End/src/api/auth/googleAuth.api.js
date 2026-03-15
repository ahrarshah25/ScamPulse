import axiosInstance from "../axios";

export const googleAuth = async (token) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/auth/google-login",
    {
      token,
    },
    {
      withCredentials: true,
    },
  );

  return res;
};
