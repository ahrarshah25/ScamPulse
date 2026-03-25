import { navigate } from "../hooks/useNavigate";

const handleRedirect = async (user) => {
    if(user?.role === "user") {
        navigate("/dashboard", { subdomain: "dashboard" });
    };

    if(user?.role === "admin") {
        navigate("/admin/dashboard", { subdomain: "dashboard" });
    };
};

export default handleRedirect;