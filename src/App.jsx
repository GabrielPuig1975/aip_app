//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Estilos/main.css";
import Header from "./Header.jsx";
import Navegacion from "./Navegacion.jsx";
import ListaOpciones from "./ListaOpciones.jsx";
import Ventas from "./Ventas.jsx";
import Alquileres from "./Alquileres.jsx";
import AlquileresTemporarios from "./AlquileresTemporarios.jsx";
import EnPozo from "./EnPozo.jsx";
import Footer from "./Footer.jsx";

function App() {
  const { logged, userEmail } = useAuth();
  console.log(logged, userEmail);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          <Route
            path="*"
            element={
              <>
                <Navegacion />
                <ListaOpciones />
                <Footer />
              </>
            }
          />
          <Route path="/Ventas" element={<Ventas />} />
          <Route path="/Alquileres" element={<Alquileres />} />
          <Route
            path="/AlquileresTemporarios"
            element={<AlquileresTemporarios />}
          />
          <Route path="/EnPozo" element={<EnPozo />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
