import axiosInstance from "../axios";

export const getAuth = async () => {
    const res = axiosInstance.get("http://localhost:5000/api/v1/auth/check-auth", {
        withCredentials: true
    });
    return res;
};