import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./AuthContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx"; // Importa el componente App

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App /> {/* Renderiza el componente App */}
    </AuthProvider>
  </StrictMode>
);
