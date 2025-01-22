import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Inicio from "./Inicio";
import Login from "./Login";
import RegistroInvitados from "./RegistroInvitados";
import SobreNos from "./SobreNos";
import "./Estilos/Navegacion.css";

function Navegacion() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const abrirModal = (tipo) => {
    setModalVisible(true);
    setCurrentModal(tipo);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setCurrentModal(null);
  };

  return (
    <AuthProvider>
      <div className="Navegacion container">
        <nav>
          <button>Inicio</button>
          <button onClick={() => abrirModal("login")}>Login</button>
          <button onClick={() => abrirModal("registro_invitados")}>
            Registro de Invitados
          </button>
          <button onClick={() => abrirModal("sobre_nos")}>
            Sobre Nosotros
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>

        {modalVisible && currentModal === "login" && (
          <Login cerrarModal={cerrarModal} />
        )}
        {modalVisible && currentModal === "registro_invitados" && (
          <RegistroInvitados cerrarModal={cerrarModal} />
        )}
        {modalVisible && currentModal === "sobre_nos" && (
          <SobreNos cerrarModal={cerrarModal} />
        )}
      </div>
    </AuthProvider>
  );
}

export default Navegacion;
