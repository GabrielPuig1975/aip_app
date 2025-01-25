import { Link } from "react-router-dom";
import image from "../src/assets/Nosotros/Alejandro.jpeg";
import "./Estilos/Ventas.css";

function Ventas() {
  return (
    <div className="container d-flex">
      <div className="titulo boton_flecha">
        <h4 className="tituloVentas">Ventas</h4>
        <Link to="/" className="btn btn-primary volver">
          <i className="fa-solid fa-left-long"></i>
        </Link>
      </div>
      <div className="generalCards d-flex">
        
        <div className="card d-flex">
          <div className="card-header">
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Av 60 e/ 22 y 23</h5>
            <p className="card-text">
              Hermosa casa sobre avenida 60.
              <p className="card_precio">U$S 160.000.-</p>
              <div className="card-Link">
                <a href="#" className="verPropiedad">
                  Mirala acá!!
                </a>
              </div>
            </p>
          </div>
        </div>

        <div className="card d-flex">
          <div className="card-header">
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Av 60 e/ 22 y 23</h5>
            <p className="card-text">
              Hermosa casa sobre avenida 60.
              <p className="card_precio">U$S 160.000.-</p>
              <div className="card-Link">
                <a href="#" className="verPropiedad">
                  Mirala acá!!
                </a>
              </div>
            </p>
          </div>
        </div>

        <div className="card d-flex">
          <div className="card-header">
            <img src={image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">Av 60 e/ 22 y 23</h5>
            <p className="card-text">
              Hermosa casa sobre avenida 60.
              <p className="card_precio">U$S 160.000.-</p>
              <div className="card-Link">
                <a href="#" className="verPropiedad">
                  Mirala acá!!
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ventas;
