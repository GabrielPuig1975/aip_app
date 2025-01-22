import "./Estilos/ListaOpciones.css";
import { Link } from "react-router-dom";

function ListaOpciones() {
  return (
    <div className="container d-flex ListaOpciones">
      <nav>
        <ul className="d-flex gap-3">
          <li>
            <Link to="/Ventas">
              <button type="button" className="btn btn-primary">Ventas</button>
            </Link>
          </li>
          <li>
            <Link to="/Alquileres">
              <button type="button" className="btn btn-primary">Alquileres</button>
            </Link>
          </li>
          <li>
            <Link to="/AlquileresTemporarios">
              <button type="button" className="btn btn-primary">Alquileres Temporarios</button>
            </Link>
          </li>
          <li>
            <Link to="/EnPozo">
              <button type="button" className="btn btn-primary">En Pozo</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ListaOpciones;
