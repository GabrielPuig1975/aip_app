// SobreNos.jsx
import "./Estilos/SobreNos.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SobreNosMas from "./SobreNosMas";

function SobreNos({ cerrarModal }) {
  const [currentModal, setCurrentModal] = useState(null);

  const abrirModal = (modalType) => {
    setCurrentModal(modalType);
  };

  return (
    <>
      {currentModal === null && (
        <div
          className="modal fade show"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5" id="exampleModalLabel">
                  Sobre Nosotros
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={cerrarModal}
                ></button>
              </div>
              <div className="modal-body">
                <p className="modal-text">
                  Somos una empresa de amigos. Porque cuando pasás tanto tiempo
                  con gente con tus ideales, tu misma forma de trabajar, con
                  esas ganas de compartir y no de competir, es imposible que no
                  se conviertan en buenos amigos.
                </p>
              </div>
              <div className="modal-footer">
                <Link
                  to="/sobreNosMas"
                  onClick={(e) => {
                    e.preventDefault();
                    abrirModal("SobreNosMas");
                  }}
                >
                  <p>Conócenos!!!</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentModal === "SobreNosMas" && (
        <SobreNosMas
    
          cerrarNewPage={cerrarModal}
        />
      )}
    </>
  );
}

export default SobreNos;
