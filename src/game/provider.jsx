import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';

export const GameContext = createContext(null);


export function GameProvider(props) {
  const [state, setState] = useState(null);
  const [gameId, setGameId] = useState(props.gameId);

	const fetchGameData = async () => {
		return new Promise((resolve, reject) => {
			const interval = setInterval(() => {
				if (state != null) {
					clearInterval(interval);
					resolve(state);
				}
			}, 100); // Adjust the interval as per your needs
	
			axios.get(`${import.meta.env.VITE_BACKEND_URL}/start/${gameId}`)
			.then(response => {
					setState(response.data);
			})
			.catch(error => {
					setState(error.message);
					reject(error);
			});
		});
	};
	


	
	useEffect(() => {
		fetchGameData();
	}, [gameId]);
	// Esto de aca genera que se ejecute a cada rato
    
  return (
    <GameContext.Provider value={{state, fetchGameData, setGameId}}>
      {props.children}
    </GameContext.Provider>
  )
}

