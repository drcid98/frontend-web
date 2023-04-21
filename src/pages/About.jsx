import './About.css'
import Diego from '../assets/diego.jpeg'
import Gloria from '../assets/gloria.jpg'
import Button from '../common/Button'
import Layout from '../common/Layout'

function About() {
  return (
    <Layout>
      <div className="About">
        <h1>Equipo SupremacíaBoris</h1>

        <div className='container'>

          <div className="card">
            <div className='info'>
              <img src={Diego} className="avatar" alt="avatar diego" />
            </div>
            <div className='info'>
              <ul>
                <li>Diego Rodríguez Cid</li>
                <li>Estudiante Ing. Civil Computación</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className='info'>
              <img src={Gloria} className="avatar" alt="avatar gloria" />
            </div>
            <div className='info'>
              <ul>
                <li>Gloria Figueroa Rivera</li>
                <li>Estudiante Ing. Civil Computación</li>
              </ul>
            </div>
          </div>

        </div>
          
      </div>
    </Layout>
  )
}

export default About