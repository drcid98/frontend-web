import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/main">Jugar</a></li>
        <li><a href="/rules">Instrucciones</a></li>
        <li><a href="/about">Acerca de</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;