import React, { useState } from "react";
import "../styles/filter.css";

const Filter = ({ handleSortChange }) => {
  const [sortBy, setSortBy] = useState(null);

  const handleCheckboxChange = (event) => {
    const newSortBy = event.target.name === sortBy ? null : event.target.name;
    setSortBy(newSortBy);
    handleSortChange(newSortBy);
  };

  return (
    <div className="filter-container">
      <h2>Pesquisar por:</h2>
      <div className="checkbox-container">
        <label className="checkbox-item">
          <input
            type="checkbox"
            name="maisProximo"
            checked={sortBy === "maisProximo"}
            onChange={handleCheckboxChange}
          />
          <span className="labelText">Mais próximo de mim</span>
        </label>
        <label className="checkbox-item">
          <input
            type="checkbox"
            name="menorTempoEspera"
            checked={sortBy === "menorTempoEspera"}
            onChange={handleCheckboxChange}
          />
          <span className="labelText">Menos pessoas na fila</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
