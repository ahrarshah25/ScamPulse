import axiosInstance from "../axios";

export const userLogout = async () => {
    const res = axiosInstance.get('http://localhost:5000/api/v1/auth/logout');
    return res;
}