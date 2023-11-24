import React, { useState, useEffect } from "react";
import "./styles/menuDeBusca.css";
import { getHospitais } from "./hospitalUtils";
import LogoSus from "./images/logoSus.jpeg";
import Medico from "./images/medico.png";
import Medica from "./images/medica.png";
import Search from "./components/Search";
import Geolocation from "./geolocation";
import Filter from "./components/Filter";

function MenuDeBusca() {
  const [search, setSearch] = useState("");
  const [originalHospitais, setOriginalHospitais] = useState([]);
  const [hospitais, setHospitais] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const hospitaisData = await getHospitais();
      setOriginalHospitais(hospitaisData);
      setHospitais(hospitaisData);
    };
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const filteredHospitais = originalHospitais.filter((hospital) =>
      hospital.hospitalName.toLowerCase().includes(value.toLowerCase())
    );
    setHospitais(filteredHospitais);
  };
  return (
    <>
      <div>
        <img src={LogoSus} className="logo-sus" alt="Logo do SUS" />
        <Filter
          handleSortChange={(newSortBy) =>
            setHospitais(originalHospitais, newSortBy)
          }
        ></Filter>
        <Search search={search} className="search" setSearch={handleSearch} />
      </div>
      <div className="menuDeBusca">
        <Geolocation />
      </div>
      <div>
        <img src={Medico} className="medico" alt="Medico" />
      </div>
      <div>
        <img src={Medica} className="medica" alt="Medica" />
      </div>
    </>
  );
}

export default MenuDeBusca;
