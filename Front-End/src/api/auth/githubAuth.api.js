import axiosInstance from "../axios";

export const githubAuth = async (token) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/auth/github-login",
    {
      token,
    },
    {
      withCredentials: true,
    },
  );

  return res;
};
