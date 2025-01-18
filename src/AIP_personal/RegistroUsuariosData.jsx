import { useState } from "react";

function UsuariosData() {
  const [formData, setFormData] = useState({
    imagenPersonal: null, // Cambiado a null para manejar archivo
    nombres: "",
    apellidos: "",
    documento: "",
    numeroTramiteDocumento: "",
    direccion: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    cargo: "",
    fechaRegistro: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;

    // Si el campo es un archivo, se maneja de manera especial
    if (type === "file") {
      setFormData({
        ...formData,
        [id]: files[0], // Almacenamos el primer archivo seleccionado
      });
    } else {
      setFormData({
        ...formData,
        [id]: value, // Para los demás campos
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificamos si los campos requeridos están vacíos
    if (!formData.nombres || !formData.apellidos || !formData.email) {
      alert("Por favor complete los campos obligatorios.");
      return;
    }

    console.log(formData); // Aquí puedes hacer algo con los datos del formulario

    // Simula el guardado de los datos
    alert("Usuario guardado correctamente");
  };

  return (
    <>
      <svg
        className="key"
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        viewBox="0 0 51 51"
        xmlSpace="preserve"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <path d="M13.951 11.55C6.247 11.55 0 17.795 0 25.499c0 7.705 6.247 13.951 13.951 13.951 6.873 0 12.584 -4.971 13.736 -11.513 0.013 0.001 0.026 0.003 0.039 0.003h5.371v7.755h5.93v-7.755h2.796v11.223h5.93V27.94H51V22.01H27.502c-0.014 0.001 -0.027 0.002 -0.04 0.003 -1.548 -6.017 -7.009 -10.463 -13.51 -10.463m0 6.454c4.14 0 7.496 3.356 7.496 7.496 0 4.14 -3.356 7.497 -7.496 7.497s-7.497 -3.357 -7.497 -7.497 3.357 -7.496 7.497 -7.496" />
      </svg>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                AIP Socios
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Campo para cargar imagen personal */}
                <label>
                  Imagen Personal
                  <input
                    type="file"
                    id="imagenPersonal"
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                {/* Campos de texto */}
                <label>
                  Nombres
                  <input
                    type="text"
                    id="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Apellidos
                  <input
                    type="text"
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Documento
                  <input
                    type="text"
                    id="documento"
                    value={formData.documento}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Número de Trámite Documento
                  <input
                    type="text"
                    id="numeroTramiteDocumento"
                    value={formData.numeroTramiteDocumento}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Dirección
                  <input
                    type="text"
                    id="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Teléfono
                  <input
                    type="text"
                    id="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Fecha de Nacimiento
                  <input
                    type="date"
                    id="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Cargo
                  <input
                    type="text"
                    id="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Fecha de Registro
                  <input
                    type="text"
                    id="fechaRegistro"
                    value={formData.fechaRegistro}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>

                <label>
                  Contraseña
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsuariosData;
