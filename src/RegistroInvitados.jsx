// Registro de usuarios INVITADOS
import { useState } from "react";
import "./Estilos/RegistroUsuarios.css";

function RegistroUsuarios({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  // Leer el puerto del servidor desde una variable de entorno
  const serverPort = import.meta.env.VITE_INVITADOS_SERVER_PORT;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email || !password || !repeatPass) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== repeatPass) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:${serverPort}/api/usuario_invitado/registro`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        setError("");
        alert("Usuario registrado con éxito.");
        setEmail("");
        setPassword("");
        setRepeatPass("");
        closeModal();
      } else {
        const data = await response.json();
        setError(data.error || "Error al registrar el usuario.");
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div
      className="modal fade show"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content form-container">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="exampleModalLabel">
              Registro de Invitados
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              {/* Campo de contraseña */}
              <div className="form-floating mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary toggle-password"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              {/* Campo de repetir contraseña */}
              <div className="form-floating mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword2"
                  placeholder="Repeat Password"
                  value={repeatPass}
                  onChange={(e) => setRepeatPass(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword2">Repita Password</label>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary toggle-password"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuarios;
