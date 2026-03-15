import { navigate } from "../hooks/useNavigate";

const githubAuth = () => {
  const githubLogin = () => {
    const clientId = "Ov23lirPHUCmU5pkylba";
    const redirectUri = "http://localhost:5173/github-auth";

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;

    navigate(githubAuthUrl);
  };
  return githubLogin;
};

export default githubAuth;
