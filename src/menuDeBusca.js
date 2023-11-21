import React, { useState } from 'react';
import './styles/menuDeBusca.css';
import Navbar from './components/NavBar';
import Filter from './components/Filter';
import HospitalCard from './components/HospitalCard';
import { getHospitais } from './hospitalUtils';

function MenuDeBusca() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const hospitaisData = getHospitais();
  const [hospitais, setHospitais] = useState(hospitaisData);

  const deleteHospital = (id) => {
    const newHospitais = hospitais.filter((hospital) => hospital.id !== id);
    setHospitais(newHospitais);
  };

  const renderHospitalCards = () => {
    return hospitais
      .filter((hospital) => {
        // Lógica de filtragem por especialidade aqui
        return true; // Altere conforme sua lógica
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
    <div>
      <Navbar setSearch={setSearch} />
      <div className='menuDeBusca'>
        <Filter filter={filter} setFilter={setFilter} />
        <div className='hospital-list'>{renderHospitalCards()}</div>
      </div>
    </div>
  );
}

export default MenuDeBusca;
