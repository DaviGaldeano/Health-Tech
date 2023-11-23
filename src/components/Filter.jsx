import React, { useState } from "react";
import "../styles/filter.css";

const Filter = ({ handleSortChange }) => {
  const [sortBy, setSortBy] = useState(null);
  console.log(sortBy);
  console.log(handleSortChange);

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
          Mais próximo de mim
        </label>
        <label className="checkbox-item">
          <input
            type="checkbox"
            name="menorTempoEspera"
            checked={sortBy === "menorTempoEspera"}
            onChange={handleCheckboxChange}
          />
          Menor tempo de espera
        </label>
      </div>
    </div>
  );
};

export default Filter;
