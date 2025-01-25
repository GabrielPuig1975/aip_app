import { useEffect } from "react";
import { Whatsapp, Instagram } from "./SocialNetWork";
import { useAuth } from "./AuthContext";
import "./Estilos/Header.css";

function Header() {
  const { logged, setLogged, userEmail, setUserEmail, icon, setIcon } = useAuth();

  // Función para cerrar sesión
  const handleLogout = () => {
    sessionStorage.removeItem("logged");
    sessionStorage.removeItem("userEmail");
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setLogged(false);
    setUserEmail("");
    setIcon("fa-regular fa-user");
  };

  // Verificar sesión al cargar el componente
  useEffect(() => {
    const sessionLogged = sessionStorage.getItem("logged") === "true";
    const sessionUserEmail = sessionStorage.getItem("userEmail");

    if (sessionLogged && sessionUserEmail) {
      setLogged(true);
      setUserEmail(sessionUserEmail);
      setIcon("fa-solid fa-user-check");
    }
  }, [setLogged, setUserEmail, setIcon]);

  return (
    <header className="App-header opciones d-flex">
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
        {logged && userEmail && (
          <div className="logged">
            <div>
              <i className={icon}></i>
            </div>
            <p className="user-email">
              ¡Bienvenido!
              <br />
              {userEmail}
            </p>
            <button onClick={handleLogout} className="btn btn-danger">
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
