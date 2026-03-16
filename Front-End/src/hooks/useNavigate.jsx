import { useNavigate } from "react-router-dom";

let navigateFn = null;

export const useNavigator = () => {
  const navigate = useNavigate();

  navigateFn = navigate;
};

export const navigate = (to, options) => {
  if (!navigateFn) {
    console.error("Navigate function not initialized");
    return;
  }

  navigateFn(to, options);
};