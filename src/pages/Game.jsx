import React, { useContext, useEffect, useState } from 'react';
import './Game.css'
import Layout from '../common/Layout';
import Board from '../game/Board';
import Phase from '../game/Phase';
import { GameContext, GameProvider } from '../game/provider';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';


function Game() {
  const { token } = useContext(AuthContext);
  const [userID, setUserID] = useState();
	// info compartida sobre botones apretados
	const [sharedInfo, setSharedInfo] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setUserID(response.data.userID);
      })
      .catch(error => {
        setUserID(-9999);
      });
  }, []);

  const { state } = useContext(GameContext);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (state !== null) {
      const players = state.players;
      // console.log(players);
      for (let i=0; i<players.length; i++) {
        if (players[i].user_id === userID) {
          setPlayerData(players[i]);
          
        }
      }
    }
  }, [state, userID]);

  console.log(playerData);
  
  let textColor = 'jugador' + playerData?.color;
  
	// Para manejar el estado de los botones
	const handleButtonPress = (buttonInfo) => {
    setSharedInfo(buttonInfo);
  };

	const handleTroopsChange = (troopsInfo) => {
		console.log("cambian las tropas");
		console.log("troopsInfo", troopsInfo);
		setSharedInfo(troopsInfo);
	};


  return (
		// Aca hay que inicializar el id con el id del juego actual
		<Layout>
		<div className="page-contanier">
			<h1> DCConquista </h1>
			<div className="game-container">
				<Board sharedInfo={sharedInfo} onButtonPress={handleButtonPress} />
			</div>
			<Phase
				playerId={playerData?.id}
				gameId={playerData?.game_id}
				sharedInfo={sharedInfo}
				onTroopsChanged={handleTroopsChange} />

			Tu usuario: {userID}

			<div className="info-jugador">
				Tu color:
				<div className={`jugador ${textColor}`}>
					{/* {playerData?.color} */}
				</div>
			</div>

		</div>
		
		</Layout>
	
	);
}



export default Game