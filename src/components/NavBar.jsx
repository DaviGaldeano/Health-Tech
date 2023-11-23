import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import assistencia from "../images/assistencia_medica.png";
import Search from "../components/Search";

function Navbar({ setSearch, search }) {
  return (
    <div className="navbar-header">
      <nav className="navbar">
        <div className="header-buttons">
          <Link to="/login" className="button">
            Login
          </Link>
          <Link to="/cadastro" className="button">
            Cadastro
          </Link>
        </div>
        <Search search={search} setSearch={setSearch} />
        <img src={assistencia} className="header-img" alt="Logo" />
        {/* Adicione outros elementos da barra de navegação aqui, se necessário */}
      </nav>
    </div>
  );
}

export default Navbar;
