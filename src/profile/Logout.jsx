import React, {useContext, useState} from 'react';
import './Login.css';
import { AuthContext } from '../auth/AuthContext';
import Layout from '../common/Layout'

const LogoutButton = () => {
  const {logout} = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const handleLogout = () => {
    logout();
    setMsg("Has hecho logout con éxito!")
  }

  return (
    <Layout>
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}
        <button onClick={handleLogout}>
        Cerrar sesión
        </button>
    </Layout>
  );
}

export default LogoutButton;