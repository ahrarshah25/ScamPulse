import React from "react";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import { useNavigator } from "./hooks/useNavigate";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GoogleAuth from "./pages/GoogleAuth";
import SendForgotMail from "./pages/SendForgotMail";
import ResetPassword from "./pages/ResetPassword";
import GitHubAuth from "./pages/GitHubAuth";

const App = () => {
  useNavigator();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/google-auth" element={<GoogleAuth />} />
        <Route path="/forgot-password" element={<SendForgotMail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/github-auth" element={<GitHubAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
