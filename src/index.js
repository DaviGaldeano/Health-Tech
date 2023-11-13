// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login'; // Certifique-se de usar a letra maiúscula para corresponder ao nome do arquivo
import Cadastro from './cadastro'; // Certifique-se de usar a letra maiúscula para corresponder ao nome do arquivo
import MenuDeBusca from './menuDeBusca'; // Adicione a importação para o novo componente
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        {/* Adicione esta rota */}
        <Route path="/menu-busca" element={<MenuDeBusca />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
