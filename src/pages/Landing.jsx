import { useState } from 'react'
import './Landing.css'


function Landing() {
  return (
    <div className="Landing">
      <div>
      <p>Logo</p>
      </div>
      <h1>Risk</h1>
      <div className="card">
        <p>
        Risk es un juego de estrategia y conquista en el que los jugadores compiten por la 
        dominación mundial. Cada jugador asume el papel de un líder militar que busca conquistar 
        territorios y expandir su imperio mientras se defiende de los ataques de otros jugadores.
        </p>
          <a href='/main'> Jugar </a>
          <a href='/about'> Sobre el juego</a>
      </div>
    </div>
  )
}

export default Landing
