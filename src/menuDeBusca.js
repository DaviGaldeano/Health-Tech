import React, { useState } from 'react';
import './styles/menuDeBusca.css';
import Filter from './components/Filter';
import HospitalCard from './components/HospitalCard';
import { getHospitais } from './hospitalUtils';
import LogoSus from './images/logoSus.jpeg';
import Medico from './images/medico.jpeg';
import Medica from './images/medica.jpeg';
import Search from './components/Search';

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
    <>
        <div>
            <img src={LogoSus} className='logo-sus' alt="Logo do SUS"/>
          <div>
              <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <Search search={search} className='search' setSearch={setSearch} />
        <div className='menuDeBusca'>
          <div className='hospital-list'>{renderHospitalCards()}</div>
        </div>
        <div>
          <img src={Medico} className='medico' alt="Medico"/>
        </div>
        <div>
          <img src={Medica} className='medica' alt="Medica"/>
        </div>
    </>
  );
}

export default MenuDeBusca;
