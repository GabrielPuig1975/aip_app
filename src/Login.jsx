import { useState } from "react";
import "./Estilos/Login.css";

function Login({ closeModal, setLogged, setShowEmail, setUserEmail }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const serverPort = import.meta.env.VITE_INVITADOS_SERVER_PORT;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }
    setError("");
    handleLogin();
  };

  const handleLogin = () => {
    if (!serverPort) {
      setError("No se pudo conectar al servidor");
      return;
    }

    fetch(`http://localhost:${serverPort}/api/usuario_invitado/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          document.cookie = `authToken=${data.token}; path=/; secure; HttpOnly`;
          closeModal();
          setLogged(true);
          setShowEmail(true);
          setUserEmail(email); // Almacenar el email del usuario logueado
        } else {
          setError(data.error || "Error al autenticar");
        }
      })
      .catch((err) => {
        setError("Error al intentar iniciar sesión");
        console.error(err);
      });
  };

  return (
    <div className="modal fade show" aria-hidden="false">
      <div className="modal-dialog">
        <div className="modal-content form-container">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
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
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Password</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
