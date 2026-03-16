import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { googleAuth } from "../api/auth/googleAuth.api";
import handleRedirect from "../handlers/handleRedirect";

const GoogleAuth = () => {
  const { code } = useParams();

  useEffect(() => {
    const sendCode = async () => {
      try {
        if (!code) return;
        const res = await googleAuth(code);
        handleRedirect(res.data?.user);
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

export default GoogleAuth;
