import { useState } from 'react'
import './Landing.css'
import DCConquista from '../assets/DCConquista.jpeg'
import Motherboard from '../assets/motherboard.png'


function Landing() {
  return (
    <div className="Landing">
      <div>
        <a href="/main">
          <img src={DCConquista} className="logo" alt="game-logo" />
        </a>
        <img src={Motherboard} className="logo" alt="game-logo" />
      </div>
      <div className="card">
        <p>
        Risk es un juego de estrategia y conquista en el que los jugadores compiten por la 
        dominación mundial. Cada jugador asume el papel de un líder militar que busca conquistar 
        territorios y expandir su imperio mientras se defiende de los ataques de otros jugadores.
        </p>
          <a href='/main'> Jugar </a>
          <a href='/about'> Acerca de </a>
      </div>
    </div>
  )
}

export default Landing
