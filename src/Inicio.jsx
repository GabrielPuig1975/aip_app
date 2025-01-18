import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from "react";
import './Estilos/Inicio.css';


function Inicio() {
  
  const serverPort = import.meta.env.VITE_IMAGES_SERVER_PORT;
  console.log(serverPort);
  
  const [propiedades, setPropiedades] = useState([]);
  const [bloquesDePropiedades, setBloquesDePropiedades] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener las propiedades
    fetch(`http://localhost:${serverPort}/api/propiedades`)
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo cargar las propiedades.");
        }
        return response.json();
      })
      .then(data => setPropiedades(data))
      .catch(error => console.error("Error al cargar las propiedades:", error));
  }, []);

  useEffect(() => {
    // Crear bloques de 3 propiedades solo cuando se actualicen las propiedades
    if (propiedades.length > 0) {
      const bloques = [];
      for (let i = 0; i < propiedades.length; i += 3) {
        bloques.push(propiedades.slice(i, i + 3));
      }
      setBloquesDePropiedades(bloques);
      console.log(bloques);
    }
  }, [propiedades]); // Esto se ejecuta cada vez que `propiedades` cambie

  return (
    <div className="container carou">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {bloquesDePropiedades.map((bloque, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                {bloque.map((propiedad, propiedadIndex) => (
                  <div key={propiedadIndex} className="col-4">
                    {/* Construir la URL completa de la imagen */}
                    <img
                      src={`http://localhost:${serverPort}${propiedad.ruta}`}  // Usar la ruta completa del backend
                      alt={`Propiedad ${propiedad.nombre}`}  // Mejorar accesibilidad
                      className="d-block w-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Inicio;
