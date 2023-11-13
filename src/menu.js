// Menu.js
import React, { useState } from 'react';
import './menu.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Menu">
      <div className="MenuToggle" onClick={toggleMenu}>
        <div className="MenuIcon">&#8942;</div>
      </div>
      {menuOpen && (
        <div className="MenuContent">
          <div>Perfil</div>
          <div>Ajuda</div>
          <div>Saq</div>
          <div>Notícias</div>
        </div>
      )}
    </div>
  );
}

export default Menu;
