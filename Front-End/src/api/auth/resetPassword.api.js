import axiosInstance from "../axios";

export const forgotPassword = async (token, email, newPassword) => {
  const res = axiosInstance.post(
    "http://localhost:5000/api/v1/auth/reset-password",
    {
      token,
      email,
      newPassword,
    },
  );

  return res;
};
