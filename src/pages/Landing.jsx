import { useState } from 'react'
import './Landing.css'
import DCConquista from '../assets/DCConquista_small.png'
import Motherboard from '../assets/motherboard_2.png'
import Button from '../common/Button'
import Layout from '../common/Layout'


function Landing() {
  return (
    <Layout> 
      <div className="Landing">
        <div>
          <img src={DCConquista} className="logo" alt="game-logo" />
          <h1>DCConquista</h1>
        </div>
        

        <div className="container">
          <div className="card">
            <p>
            DCConquista es un juego de estrategia y conquista en el que los jugadores compiten por la 
            dominación total de una placa madre. Cada jugador asume el papel de un líder militar que busca conquistar 
            territorios y expandir su imperio mientras se defiende de los ataques de otros jugadores.
            </p>
          </div>
          
          <div className="card">
            <img src={Motherboard} className="imagen" alt="imagen-extra" />
          </div>

        </div>
          
      

      </div>
    </Layout>
  )
}

export default Landing
