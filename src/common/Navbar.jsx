import React from 'react';
import './Navbar.css'
import DCConquista from '../assets/DCConquista_small.png'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/"><img src={DCConquista} className="mini-logo" alt="game-logo" /></a></li>
        <li><a href="/main"><span>&#127918;</span> Jugar</a></li>
        <li><a href="/rules"><span>&#128220;</span>Instrucciones</a></li>
        <li><a href="/about"><span>&#9432;</span>Acerca de</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;