// FilterComponent.jsx

import React from 'react';
import '../styles/filter.css';  // Importando o arquivo CSS

class FilterComponent extends React.Component {
    render() {
        return (
            <div className="filter-container">
                <h2>Pesquisar por</h2>
                <div className="checkbox-container">
                    <label className="checkbox-item">
                        <input type="checkbox" name="nomeHospital"/> Nome do hospital
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" name="especialidade"/> Especialidade
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" name="maisProximo"/> Mais próximo de mim
                    </label>
                </div>
            </div>
        );
    }
}

export default FilterComponent;
