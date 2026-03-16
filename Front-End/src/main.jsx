import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DashboardUserContext from "./context/DashboardUserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="406664813805-756opg95nvg345ctebdlk7k6a98ipp79.apps.googleusercontent.com">
      <DashboardUserContext>
        <App />
      </DashboardUserContext>
    </GoogleOAuthProvider>
  </BrowserRouter>,
);
