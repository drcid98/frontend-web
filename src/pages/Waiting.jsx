import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import Button from '../common/Button';
import './Waiting.css';
import Layout from '../common/Layout';



const WaitingRoom = () => {
  const { token } = useContext(AuthContext);
  const [status, setStatus] = useState();
  const [nombre, setNombre] = useState();
  const [userID, setUserID] = useState();
  const [available, setAvailable] = useState();
  const [players, setPlayers] = useState(null);
  const [clicked, setClicked] = useState(0);
  const [first, setFirst] = useState();
  const [print, setPrint] = useState();
  const [color, setColor] = useState();
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    if (!available){
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/available/diff`)
      .then(response => {
        setAvailable(response.data.id);
        setClicked(prevClicked => prevClicked + 1);
      })
      .catch(error => {
        // console.error(error);
        createGame();
      });
    }
    else {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${available}`)
      .then(response => {
        setAvailable(response.data.id);
        setClicked(prevClicked => prevClicked + 1);
      })
      .catch(error => {
        console.error(error);
        //createGame();
      });
    }
  };

  const handleStart = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/start/${available}`)
      .then(response => {
        setFirst(true);
        
        
        // setPlayers(`Hay ${response.data.game.num_players} jugadores acualmente, vuelva a intentarlo más tarde`);
        console.log(response.data);
        setColor(response.data.game.num_players);
        if (players){
          console.log("players")
          setPlayers(response.data.game.num_players);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getGame = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${available}`)
      .then(response => {
        setPlayers(response.data.num_players);
        setColor(response.data.num_players);
    
      })
      .catch(error => {
        console.error(error);
      });
  };

    const existingUser = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${available}/${userID}`)
      .then(response => {
        console.log(response.data);
        if (response.data.value){
              setPlayers(response.data.num_players);
        }
        else {
          setPrint(`La partida está llena :( `);
        }
    
      })
      .catch(error => {
        console.error(error);
      });
  };

  const createGame = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/games`, {
      turn: 1,
      winner: null,
      stage: 1,
      num_players: 0
    })
      .then(response => {
        setFirst(true);
        setAvailable(response.data.game.id);
    
      })
      .catch(error => {
        console.error(error);
      });
  };



  useEffect(() => {
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data.user);
        setStatus(true);
        setNombre(response.data.username);
        setUserID(response.data.userID);
        setIsLoading(false);
      })
      .catch(error => {
        setStatus(false);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (clicked){
    if (available !== null && available !== undefined) {
      console.log("starteando");
      handleStart();
    }
   else {
    console.log("creando");
      createGame();
    }
  }
  }, [clicked]);

  useEffect(() => {
    if (players !== null){
      if (players < 4){
      setPrint(`Hay ${players} jugadores acualmente, vuelva a intentarlo más tarde`);
      }
      else if (players === 4){
        setShowButton(true);
        setPrint(`Hay 4 jugadores, se puede empezar la partida!`);
      }
  }
  }, [players]);



  useEffect(() => {
    if (first) {
      const numeroAleatorio = Math.floor(Math.random() * (1000 - 0 + 1));
      let color_final;
      if (!color) {
        color_final = 1;
      } else {
        color_final = color + 1;
      }
      console.log(color_final);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/players`, {
          user_id: userID,
          game_id: available,
          name: `${nombre}`,
          color: `${color_final}`,
          troops: 24,
          territories: 6,
        })
        .then(response => {
          getGame();
        })
        .catch(error => {
          existingUser();
          console.error(error);
        });
    }
  }, [first]);
  
  

 

  if (isLoading) {
    return <div> </div>; // Mostrar un mensaje de carga mientras se verifica el estado
  } else if (!status) {
    return (
      <Layout>
        <div className="Waiting">
          <h1>Debes registrarte o ingresar para poder jugar!</h1>
          <Button path='/login' label='Login' />
          <Button path='/signup' label='Signup' />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="Waiting">
          <h1>Bienvenid@, {nombre}</h1>
          <h2>Te encuentras en la sala de espera</h2>
          <button onClick={handleClick}>Checkear jugadores</button>
          {showButton && (
            <Button path='/game' label='Jugar' />
          )}
          <div>{print}</div>
        </div>
      </Layout>
    );
  }
};

export default WaitingRoom;
