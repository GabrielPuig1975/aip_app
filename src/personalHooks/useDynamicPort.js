import { useState, useEffect } from "react";

export function useDynamicPort() {
  const [port, setPort] = useState(import.meta.env.VITE_SERVER_PORT || null); // Default a null si no está configurado

  useEffect(() => {
    if (!port) {
      console.error("El puerto del servidor no está configurado.");
    }
  }, [port]);

  return port;
}
