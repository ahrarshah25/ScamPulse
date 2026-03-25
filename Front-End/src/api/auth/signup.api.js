import axiosInstance from "../axios";

export const signupHandler = async (name, email, password) => {
  const res = await axiosInstance.post(
    "http://localhost:5000/api/v1/auth/register",
    {
      name,
      email,
      password,
      token,
    },
  );
  return res;
};
