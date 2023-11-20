import React, { useState } from 'react';
import './menuDeBusca.css';
import HospitalCard from './components/HospitalCard'; 
import Search from './components/Search';
import Filter from './components/Filter';

function MenuDeBusca() {
  const [hospitais, setHospitais] = useState([
    {
      id: 1,
      nome: 'Hospital A',
      especialidade: 'Cardiologia',
      endereco: 'Rua A, 123',
    },
    {
      id: 2,
      nome: 'Hospital B',
      especialidade: 'Ortopedia',
      endereco: 'Avenida B, 456',
    },
    {
      id: 3,
      nome: 'Hospital C',
      especialidade: 'Pediatria',
      endereco: 'Praça C, 789',
    },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const deleteHospital = (id) => {
    const newHospitais = hospitais.filter((hospital) => hospital.id !== id);
    setHospitais(newHospitais);
  };

  const renderHospitalCards = () => {
    return hospitais
      .filter((hospital) => {
        if (filter === 'All') {
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
    <div className='menuDeBusca'>
      <h1 className='login-title'>Busca por hospitais</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className='hospital-list'>{renderHospitalCards()}</div>
    </div>
  );
}

export default MenuDeBusca;
