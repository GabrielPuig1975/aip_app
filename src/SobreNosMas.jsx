import "./Estilos/SobreNosMas.css";
import { useState } from "react";
import Empleados from "./assets/Nosotros/Empleados";

function SobreNosMas({ cerrarNewPage }) {
  // Cargar los datos de los empleados
  const [imgNos, setImgNos] = useState(Empleados); // Cargar los datos de los empleados en el estado

  console.log(imgNos);


  return (
    <div className="modalBackground">
      <div className="cardsContainer">
        {imgNos.map((bloque) => (
          <div className="cards" key={bloque.id}>
            <div className="cards-content">
              <div className="image-container">
                <img
                  src={bloque.img}
                  className="sobreNosImg"
                  alt={bloque.alt}
                />
              </div>
              <div className="cards-text">
                <p>{bloque.nombre}</p>
                <p>{bloque.texto}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="fernerModal" onClick={cerrarNewPage}>Cerrar</button>
      </div>
    </div>
  );
}

export default SobreNosMas;
