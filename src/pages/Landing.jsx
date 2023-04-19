import { useState } from 'react'
import './Landing.css'
import DCConquista from '../assets/DCConquista.jpeg'
import Motherboard from '../assets/motherboard.png'
import Button from '../common/Button'


function Landing() {
  return (
    <div className="Landing">
      <div>
        <img src={DCConquista} className="logo" alt="game-logo" />
      </div>
      
      <div className="card">
        <p>
        DCConquista es un juego de estrategia y conquista en el que los jugadores compiten por la 
        dominación total de una placa madre. Cada jugador asume el papel de un líder militar que busca conquistar 
        territorios y expandir su imperio mientras se defiende de los ataques de otros jugadores.
        </p>
          <Button path="/about" label="Acerca de" />
          <Button path="/main" label="Jugar" />
          <Button path="/rules" label="Reglas" />
      </div>
    <div>
      <img src={Motherboard} className="imagen" alt="imagen-extra" />
    </div>
    </div>
  )
}

export default Landing
