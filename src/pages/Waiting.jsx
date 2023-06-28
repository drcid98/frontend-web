import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import Button from '../common/Button'
import './Waiting.css'
import Layout from '../common/Layout'

const UserCheck = () => { 
  const { token } = useContext(AuthContext)
  const [status, setStatus] = useState(null);
  const [nombre, setNombre] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data.user)
        setStatus(true);
        setNombre(response.data.username);
      })
      .catch(error => {
        setStatus(false);
      });
  }, []);


  if (!status){
    return (
        <Layout>
        <div className="Waiting">
            <h1>Debes registrarte o ingresar para poder jugar!</h1>
            <Button path='/login' label='Login' />
            <Button path='/signup' label='Signup' />
        </div>
        </Layout>
    );
    }
    else {
        return (
            <Layout>
            <div className="Waiting">
                <h1>Bienvenid@, {nombre}</h1>
                <h2>Te encuentras en la sala de espera</h2>
            </div>
            </Layout>
        );
    }
}

export default UserCheck;