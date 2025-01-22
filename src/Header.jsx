import { useState, useEffect } from "react";
import { Whatsapp, Instagram } from "./SocialNetWork";
import "./Estilos/Header.css";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [icon, setIcon] = useState("fa-regular fa-user"); // Valor predeterminado

  console.log(isLogged);

  useEffect(() => {
    // Verificamos el estado de sesión en sessionStorage al cargar el componente
    const loggedFromSession = sessionStorage.getItem("logged") === "true";
    const userEmailFromSession = sessionStorage.getItem("userEmail");

    if (loggedFromSession && userEmailFromSession) {
      setIsLogged(true);
      setUserEmail(userEmailFromSession);
      setIcon("fa-regular fa-user"); // Establece el ícono si está loggeado
    } else {
      setIsLogged(false);
      setUserEmail(""); // Limpiar el email si no está loggeado
    }
  }, []); // Se ejecuta solo una vez cuando el componente se carga

  // Función para cerrar sesión
  const handleLogout = () => {
    // Limpiar sessionStorage al hacer logout
    sessionStorage.removeItem("logged");
    sessionStorage.removeItem("userEmail");
    setIsLogged(false);
    setUserEmail("");
    setIcon("fa-regular fa-user"); // Restablecer ícono
  };

  return (
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
          <p>+54 9 221 575-7300 Ventas</p>
          <p>+54 9 221 640-4801 Alquileres</p>
        </div>
        {isLogged && userEmail && (
          <div className="logged">
            <div>
              <i className={icon}></i> {/* Mostrar el ícono solo si está loggeado */}
            </div>
            <p className="user-email">
              ¡Bienvenido!
              <br />
              {userEmail}
            </p>
            <button onClick={handleLogout}>X</button> {/* Botón para cerrar sesión */}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
