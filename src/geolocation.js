// Geolocation.js
import React, { useEffect } from "react";

const Geolocation = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error(`Erro ao obter a localização: ${error.message}`);
        }
      );
    } else {
      console.error("Navegador não suporta a API de geolocalização");
    }
  }, []);

  return <div>{/* Conteúdo do componente de geolocalização */}</div>;
};

export default Geolocation;
