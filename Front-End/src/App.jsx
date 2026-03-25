import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RouteGuard from "./routes/RouteGuard";
import { listenForegroundMessages } from "./utils/notifications";
import { useNavigator } from "./hooks/useNavigate";

import PageLoader from "./components/Loader/PageLoader";

const Landing = React.lazy(() => import("./pages/Landing"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const GoogleAuth = React.lazy(() => import("./pages/GoogleAuth"));
const SendForgotMail = React.lazy(() => import("./pages/SendForgotMail"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const GitHubAuth = React.lazy(() => import("./pages/GitHubAuth"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const App = () => {
  useNavigator();

  useEffect(() => {
    listenForegroundMessages();
  }, []);

  const hostname = window.location.hostname;

  const isAuth = hostname.startsWith("auth.");
  const isDashboard = hostname.startsWith("dashboard.");
  return (
    <div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
        {isAuth ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/google-auth" element={<GoogleAuth />} />
            <Route path="/forgot-password" element={<SendForgotMail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/github-auth" element={<GitHubAuth />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
          </>
        )}
        {isDashboard ? (
          <>
            <Route
              path="/"
              element={
                <RouteGuard>
                  <Dashboard />
                </RouteGuard>
              }
            />
          </>
        ) : (
          <>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/home" element={<Landing />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
