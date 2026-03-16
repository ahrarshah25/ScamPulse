import { navigate } from "../hooks/useNavigate";

const handleRedirect = async (user) => {
    if(user?.role === "user") {
        navigate("/dashboard");
    };

    if(user?.role === "admin") {
        navigate("/admin/dashboard");
    };
};

export default handleRedirect;