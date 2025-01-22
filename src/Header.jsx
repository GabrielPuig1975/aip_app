import { Whatsapp, Instagram } from "./SocialNetWork";
import { useAuth } from "./AuthContext";
import "./Estilos/Header.css";

function Header() {
  const { logged, userEmail } = useAuth();
  console.log(logged);

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
          +54 9 221 575-7300 Ventas
          <br />
          +54 9 221 640-4801 Alquileres
        </div>
        {logged && userEmail && (
          <div className="logged">
            <i className="fa-regular fa-user"></i>
            <span className="user-email">
              ¡Bienvenido!
              <br />
              {userEmail}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
