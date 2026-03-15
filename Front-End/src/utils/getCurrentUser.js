import { getUserApi } from "../api/user/user.api";

export const getCurrentUser = async () => {
  try {
    const res = await getUserApi();
    return res.data.user;
  } catch (err) {
    return null;
  }
};