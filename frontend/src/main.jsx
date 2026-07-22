import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { AppointmentProvider } from "./context/AppointmentContext";
import { SiteConfigProvider } from "./context/SiteConfigContext";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <SiteConfigProvider>
        <AuthProvider>
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        </AuthProvider>
      </SiteConfigProvider>
    </HashRouter>
  </React.StrictMode>
);