import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import "./Estilos/Login_Invitados.css";

function Login({ cerrarModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setLogged, setUserEmail } = useAuth();
  const {setIcon} = useAuth();
  
  const serverPort = import.meta.env.VITE_INVITADOS_SERVER_PORT;

  // useEffect que se ejecuta cuando se actualiza el estado de "logged"
  useEffect(() => {
    if (setLogged) {
      console.log("El estado de logged ha cambiado: ", setLogged);
    }
  }, [setLogged]);  // Solo se ejecutará cuando setLogged cambie.

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:${serverPort}/api/usuario_invitado/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Error al autenticar");
      }

      const data = await response.json();
      if (data.token) {
        document.cookie = `authToken=${data.token}; path=/; secure; HttpOnly`;
      setLogged(true);
      setUserEmail(email);
      
      // Guardar en sessionStorage
      sessionStorage.setItem("logged", "true");
      sessionStorage.setItem("userEmail", email);

      cerrarModal();
      } else {
        throw new Error(data.error || "Error al autenticar");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal fade show" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Login</h1>
            <button type="button" className="btn-close" onClick={cerrarModal}></button>
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
                />
                <label>Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Contraseña</label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
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
