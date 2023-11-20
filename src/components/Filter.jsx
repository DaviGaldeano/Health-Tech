import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h2 className="login-title">Filtrar</h2>
      <div className="filter-options">
        <div className="filter-options-div">
          <p>Especialidade</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas as especialidades</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Ortopedia">Ortopedia</option>
            <option value="Pediatria">Pediatria</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
