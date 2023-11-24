import React, { useEffect, useState } from "react";
import { getHospitais } from "./hospitalUtils";
import HospitalCard from "./components/HospitalCard";

const Geolocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitais, setHospitais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHospitais(userLocation);
        setHospitais(data);
      } catch (error) {
        console.error("Erro ao obter hospitais:", error.message);
      }
    };

    fetchData();
  }, [userLocation]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error(`Erro ao obter a localização: ${error.message}`);
        }
      );
    } else {
      console.error("Navegador não suporta a API de geolocalização");
    }
  }, []);

  return (
    <div>
      {hospitais.length > 0 ? (
        hospitais.map((hospital) => (
          <HospitalCard key={hospital.nome} hospital={hospital} />
        ))
      ) : (
        <p>Carregando hospitais...</p>
      )}
    </div>
  );
};

export default Geolocation;
