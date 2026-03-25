import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/DashboardUserContext";
import handleRedirect from "./handleRedirect";

const authRedictHandler = () => {
  const user = useContext(UserDataContext);

  useEffect(() => {
    if (user) {
      handleRedirect(user);
    }
  }, [user]);
};

export default authRedictHandler;
