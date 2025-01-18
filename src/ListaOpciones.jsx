import './Estilos/ListaOpciones.css';

function ListaOpciones() {
  return (
    <div className="container d-flex ListaOpciones">
      <ul className="d-flex gap-3">
        <li><button type="button" className="btn btn-primary">Ventas</button></li>
        <li><button type="button" className="btn btn-primary">Alquileres</button></li>
        <li><button type="button" className="btn btn-primary">Alquileres Temporarios</button></li>
        <li><button type="button" className="btn btn-primary">En pozo</button></li>
      </ul>
    </div>
  );
}

export default ListaOpciones;
