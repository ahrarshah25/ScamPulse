import { useContext } from "react";
import { navigate } from "../hooks/useNavigate";
import { UserDataContext } from "../context/DashboardUserContext";

const dashboardRedictHandler = () => {
    const user = useContext(UserDataContext);

    if(!user) {
        navigate("/login", { subdomain: "auth" });
    }
};

export default dashboardRedictHandler;