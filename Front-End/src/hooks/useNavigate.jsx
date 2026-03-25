import { useNavigate } from "react-router-dom";

let navigateFn = null;

export const useNavigator = () => {
  const navigate = useNavigate();
  navigateFn = navigate;
};

export const navigate = (to, options = {}) => {
  if (!navigateFn) {
    console.error("Navigate function not initialized");
    return;
  }

  const hostname = window.location.hostname;

  if (options.subdomain === "auth") {
    if (hostname.includes("localhost")) {
      window.location.href = `http://auth.localhost:5173${to}`;
    } else {
      window.location.href = `https://auth.scampulse.vercel.app${to}`;
    }
    return;
  }

  if (options.subdomain === "dashboard") {
    if (hostname.includes("localhost")) {
      window.location.href = `http://dashboard.localhost:5173${to}`;
    } else {
      window.location.href = `https://dashboard.scampulse.vercel.app${to}`;
    }
    return;
  }

  navigateFn(to, options);
};