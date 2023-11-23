// MenuDeBusca.js
import React, { useState, useEffect } from "react";
import "./styles/menuDeBusca.css";
import Filter from "./components/Filter";
import HospitalCard from "./components/HospitalCard";
import { getHospitais } from "./hospitalUtils";
import LogoSus from "./images/logoSus.jpeg";
import Medico from "./images/medico.png";
import Medica from "./images/medica.png";
import Search from "./components/Search";
import Geolocation from "./geolocation";

function MenuDeBusca() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [hospitais, setHospitais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const hospitaisData = await getHospitais();
      setHospitais(hospitaisData);
    };

    fetchData();
  }, []); // useEffect é executado uma vez após a montagem do componente

  // Adicione a função handleSortChange
  const handleSortChange = () => {
    // Implemente a lógica de ordenação aqui
    console.log("Ordenando...");
  };

  const deleteHospital = (id) => {
    const newHospitais = hospitais.filter((hospital) => hospital.id !== id);
    setHospitais(newHospitais);
  };

  const renderHospitalCards = () => {
    return hospitais
      .filter((hospital) => {
        if (filter === "All") {
          return true;
        } else {
          return hospital.especialidade === filter;
        }
      })
      .filter((hospital) =>
        hospital.nome.toLowerCase().includes(search.toLowerCase())
      )
      .map((hospital) => (
        <HospitalCard
          key={hospital.id}
          hospital={hospital}
          deleteHospital={deleteHospital}
        />
      ));
  };

  return (
    <>
      <div>
        <img src={LogoSus} className="logo-sus" alt="Logo do SUS" />
        <Search search={search} className="search" setSearch={setSearch} />
      </div>
      <div>
        {/* Passe a função handleSortChange para o componente Filter */}
        <Filter
          filter={filter}
          setFilter={setFilter}
          handleSortChange={handleSortChange}
        />
      </div>
      <div className="menuDeBusca">
        <div className="hospital-list">{renderHospitalCards()}</div>
      </div>
      <div>
        <Geolocation />
        <img src={Medico} className="medico" alt="Medico" />
      </div>
      <div>
        <img src={Medica} className="medica" alt="Medica" />
      </div>
    </>
  );
}

export default MenuDeBusca;
