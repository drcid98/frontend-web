import './About.css'
import Diego from '../assets/diego.jpeg'
import Gloria from '../assets/gloria.jpg'
import Button from '../common/Button'
import Layout from '../common/Layout'

function About() {
  return (
    <Layout>
      <div className="About">
        <card>
          <img src={Diego} className="avatar" alt="avatar diego" />
          <p>Diego Rodriguez Cid </p>
        </card>
        <card>
          <img src={Gloria} className="avatar" alt="avatar gloria" />
          <p>Gloria Figueroa Rivera</p>
        </card>
        <h1>Risk</h1>
        <div className="card">
          <p>
          SupremaciaBoris
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About