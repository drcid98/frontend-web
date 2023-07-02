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
            <ul>
              <li>Para entrar al juego, se encesita iniciar sesion primero en "login" dentro de la barra de navegación</li>
              <li>Antes de lo anterior, para registrarse, se necesita dar click en "Signup" dentro de la barra de navegación</li>
              <li>El juego solo se puede iniciar con 4 jugadores. No más ni menos, por lo que es necesario crear 4 cuentas y entrar con cada una de estas al juego</li>
              <li>Una vez creadas las cuentas, se debe iniciar sesión con cada una y entrar al juego, en donde se podrá presionar un botón para verificar cuantos jugadores hay en espera</li>
              <li>Una vez hayan entrado los 4 jugadores a esta "sala de espera", se mostrará un nuevo botón al checkear jugadores (jugar)</li>
              <li>Al presionar el botón de jugar, se iniciará el juego</li>
              <li>Para jugar, hay que tener en cuenta que para que las cosas se actualicen en el jugador actual, hay que apretar el botón que está abajo con un circulo y flecha</li>
              <li>También, para evitar problemas, solo se debe presionar una vez cada botón y luego el botón para avanzar (flecha hacia la derecha)</li>
              <li>En la primera fase, se refresca con el botón y se informará cuantas tropas puedes situar en uno de tus territorios. Debes presionar uno de estos y la flecha para avanzar</li>
              <li>En la segunda fase, se refresca con el botón y deberás presionar, primero, el territorio con el que quieres atacar y, segundo, el territorio al que quieres atacar. Este último no debe ser de tu color</li>
              <li>En la tercera fase, se refresca con el botón y deberás presionar, primero, el territorio desde donde quieres mover tropas y, segundo, el territorio al que quieres mover tropas. Este último debe ser de tu color</li>
              <li>La fase no avanzará hasta que se ingrese una acción permitida. En general, cuando se ingresa algo no permitido es recomendado refrescar la página (desde el navegador, no con el botón) para asegurarse de que funcione</li>
              <li>Cuando no es tu turno, hay que refrescar la página para poder ver los cambios hechos por otros jugadores y poder enterarse de cuando es tu turno.</li>


            </ul>
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
