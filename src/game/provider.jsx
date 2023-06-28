import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';

const GameContext = createContext(null);


export function GameProvider(props) {
  const [state, setState] = useState(null);
  const [gameId, setGameId] = useState(props.gameId);

  //console.log(gameId);
	// console.log("aaa" + `${import.meta.env.VITE_BACKEND_URL}/start/${gameId}`);

	const fetchGameData = async () => { 
		axios.get(`${import.meta.env.VITE_BACKEND_URL}/start/${gameId}`)
		.then(response => {
			// console.log(response.data);
			// const jsonData = JSON.parse(response.data);
			// setState(jsonData);
			setState(response.data);
		})
		.catch(error => {
			setState(error.message);
		});

	}
	useEffect(() => {
		fetchGameData();
	}, []);
	// Esto de aca genera que se ejecute a cada rato
    
  return (
    <GameContext.Provider value={{state, fetchGameData, setGameId}}>
      {props.children}
    </GameContext.Provider>
  )
}


export async function useTerritoryData(id) {
  // Todo:
  // const value = useContext(GameContext);

	const value = await new Promise((resolve) => {
    const context = useContext(GameContext);
    resolve(context);
  });

  if (!value.state) {
		// console.log(value.state + "aaaa");
    return null;
  }

  // console.log(value.state);
	const territories = value.state.territories;
	const territoryData = territories[id];
	// console.log(territoryData.player_id);
  return {'player_id': territoryData.player_id, 'troops': territoryData.troops};
}
