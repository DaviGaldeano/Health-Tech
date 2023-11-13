// MenuBusca.js
import React, { useState } from 'react';

function MenuBusca() {
  const [searchTerm, setSearchTerm] = useState('');
  const [listaItens] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    // Adicione mais itens conforme necessário
  ]);

  const handleSearch = () => {
    // Lógica de busca aqui (pode filtrar a lista de acordo com o searchTerm)
    // Neste exemplo, estamos apenas filtrando a lista por correspondência parcial
    const filteredList = listaItens.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Aqui, você pode fazer algo com a lista filtrada, como exibir na tela
    console.log('Itens encontrados:', filteredList);
  };

  return (
    <div>
      <h1>Menu de Busca</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <ul>
        {listaItens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBusca;
