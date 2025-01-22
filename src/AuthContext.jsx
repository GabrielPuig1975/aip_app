import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(sessionStorage.getItem("logged") === "true");
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem("userEmail") || "");
  const [icon, setIcon] = useState("fa-regular fa-user");

  // Guardar el estado en sessionStorage cada vez que cambie
  useEffect(() => {
    if (logged && userEmail) {
      sessionStorage.setItem("logged", logged);
      sessionStorage.setItem("userEmail", userEmail);
    }
  }, [logged, userEmail]);

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged,
        userEmail,
        setUserEmail,
        icon,
        setIcon,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
