import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/DashboardUserContext";
import { navigate } from "../hooks/useNavigate";

const dashboardRedictHandler = async () => {
  const user = useContext(UserDataContext);

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user]);
};

export default dashboardRedictHandler;
