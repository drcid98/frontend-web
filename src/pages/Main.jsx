import './Main.css'
import Button from '../common/Button'
import Layout from '../common/Layout'
import DCConquista from '../assets/DCConquista_small.png'

function Main() {
  return (
    <Layout> 

      <div className="Main">
        <div>
        <img src={DCConquista} className="logo" alt="game-logo" />
        <h1>DCConquista</h1>
        </div>
        <div className="card">
          <p>
              DCConquista es un juego de estrategia y conquista en el que los jugadores compiten por la 
              dominación de la placa madre. Cada jugador asume el papel de un líder militar que busca conquistar 
              territorios y expandir su imperio mientras se defiende de los ataques de otros jugadores.
          </p>
          <div className='options'>
            <div className='buttons'>
            <Button path='/waiting' label='Jugar' />
            {/* <Button path='/game' label='Partida rápida' /> */}
            <Button path='/rules' label='Instrucciones' />
            <Button path='/about' label='Acerca de' />
            {/* <Button path='/userCheck' label='UserCheck' /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Main
