import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Cadastro from "./cadastro";
import MenuDeBusca from "./menuDeBusca";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/menu-busca" element={<MenuDeBusca />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
