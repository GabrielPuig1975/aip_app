import { useState } from "react";
import "./Estilos/App.css";
import { Route, Routes, Link } from "react-router-dom";
import RegistroInvitados from "./RegistroInvitados.jsx";
import { Whatsapp, Instagram } from "./SocialNetWork.jsx";
import Inicio from "./Inicio.jsx";
import Login from "./Login";
import SobreNos from "./SobreNos";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [logged, setLogged] = useState(false); // Estado para el login
  const [showEmail, setShowEmail] = useState(false); // Mostrar email
  const [userEmail, setUserEmail] = useState(""); // Almacenar email logueado

  // Función para mostrar el modal
  const openModal = (modalType) => {
    setModalVisible(true);
    setCurrentModal(modalType);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setCurrentModal(null);
  };

  return (
    <div className="App container">
      <header className="App-header d-flex">
        <div className="title_img">
          <img src="../public/Logos/LogoPorcelC.png" alt="Logo" />
          <h1>Administración Inmobiliaria Porcel</h1>
        </div>

        <div className="right-content">
          <div className="social">
            <Whatsapp />
            <Instagram />
          </div>

          <div className="tels">
            +54 9 2215 75-7300 Ventas
            <br />
            +54 9 2216 40-4801 Alquileres
          </div>
        </div>

        {/* Mostrar el ícono y correo si está logueado */}
        {logged && (
          <div className="logged">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 0.6 0.6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                cx={12}
                cy={7}
                r={5}
                stroke="#000000"
                strokeWidth={0.05}
                d="M0.425 0.175A0.125 0.125 0 0 1 0.3 0.3A0.125 0.125 0 0 1 0.175 0.175A0.125 0.125 0 0 1 0.425 0.175z"
              />
              <path
                d="M0.425 0.35h0.009a0.075 0.075 0 0 1 0.074 0.066l0.01 0.078A0.05 0.05 0 0 1 0.468 0.55H0.132a0.05 0.05 0 0 1 -0.05 -0.056l0.01 -0.078A0.075 0.075 0 0 1 0.166 0.35H0.175"
                stroke="#000000"
                strokeWidth={0.05}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Mostrar el email del usuario */}
            <span className="user-email"> Bienvenido!!<br></br>{userEmail} </span>
          </div>
        )}
      </header>

      <nav>
        <Link to="/">Inicio</Link>

        <Link
          to="/login"
          onClick={(e) => {
            e.preventDefault();
            openModal("login");
          }}
        >
          Login
        </Link>

        <Link
          to="/registro_invitados"
          onClick={(e) => {
            e.preventDefault();
            openModal("registro_invitados");
          }}
        >
          Registro de Invitados
        </Link>

        <Link
          to="/sobreNos"
          onClick={(e) => {
            e.preventDefault();
            openModal("sobreNos");
          }}
        >
          Sobre Nosotros
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>

      {modalVisible && currentModal === "login" && (
        <Login
          closeModal={closeModal}
          setLogged={setLogged}
          setShowEmail={setShowEmail}
          setUserEmail={setUserEmail} // Pasar función para actualizar el email
        />
      )}
      {modalVisible && currentModal === "registro_invitados" && (
        <RegistroInvitados closeModal={closeModal} />
      )}
      {modalVisible && currentModal === "sobreNos" && (
        <SobreNos closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
