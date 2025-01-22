// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [cerrarModal, setCerrarModal] = useState(false);

  console.log(logged);

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged,
        userEmail,
        setUserEmail,
        cerrarModal,
        setCerrarModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
