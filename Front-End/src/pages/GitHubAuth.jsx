import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { githubAuth } from "../api/auth/githubAuth.api";
import { navigate } from "../hooks/useNavigate";

const GitHubAuth = () => {
  const { code } = useParams();

  useEffect(() => {
    const sendCode = async () => {
      try {
        if (!code) return;
        await githubAuth(code);
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    };

    sendCode();
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative flex items-center justify-center w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-teal-600 font-medium text-lg">
        Logging you in...
      </p>
    </div>
  );
};

export default GitHubAuth;
