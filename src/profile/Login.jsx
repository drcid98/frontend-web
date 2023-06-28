import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Layout from '../common/Layout';
import axios from 'axios';
import './Login.css';
import DCConquista from '../assets/DCConquista_small.png'


function Login() {
  const { token, setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email: email,
        password: password
      }).then((response) => {
        console.log('Login successful');
        setError(false);
        setMsg("Login exitoso!");
        // Recibimos el token y lo procesamos
        const access_token = response.data.access_token;
        localStorage.setItem('token', access_token);
        setToken(access_token);
        console.log("Se seteo el token: ", token);
      }).catch((error) => {
        console.error('An error occurred while trying to login:', error);
        setError(true);// aquí puede haber más lógica para tratar los errores
      })

  };


  return (
    <Layout>
    <div className='grid-container'>
      <div className="Login-div">
        <h1 className="login-title">Login</h1>
        <div className="logo-container">
          <img src={DCConquista} className="logo" alt="game-logo" />
        </div>
      </div>

      <div className="Login">
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}

        {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
        <form onSubmit={handleSubmit}>
          <label>
            <div className="login-label">
              Email:
            </div>
              
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <div className="login-label">
              Password:
            </div>
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>

    </Layout>
  );
}

export default Login;