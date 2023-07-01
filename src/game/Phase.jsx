import React, { useContext, useEffect, useState } from "react";
import './Phase.css'
import axios from 'axios';
import { GameContext } from "./provider";


function PhaseShift(phase){
	const phases = ["Refuerzo", "Ataque", "Fortalecimiento"];
	// const phase = props.phase;
	let actual = '';
	switch(phase){
		case 0:
			actual = phases[0];
			break;
		case 1:
			actual = phases[1];
			break;
		case 2:	
			actual = phases[2];
			break;
		default:
			actual = "No es tu turno";
			break;
	}
	return actual;
}


function Phase(props) {
	const [wonTroops, setWonTroops] = useState(0);
	const [gameInfo, setGameInfo] = useState(null);
	const playerId = props.playerId;
	const [isTurn, setIsTurn] = useState(false);
	const { state } = useContext(GameContext);
  	const [playerData, setPlayerData] = useState(null);
	// console.log(playerData?.color);
	// console.log(state?.game.turn);
	// console.log(state?.game.stage);
	// console.log(playerData?.color !== state?.game.turn ? 3 : state?.game.stage - 1);
	// console.log("???");
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (state !== null) {
			const players = state.players;
			// console.log(players);
			for (let i=0; i<players.length; i++) {
				if (players[i].user_id === playerId) {
					setPlayerData(players[i]);
				}
			}
		}
	}, [state, playerId]);

	useEffect(() => {
		setActiveIndex(playerData?.color !== state?.game.turn ? 3 : state?.game.stage - 1);
	}, [playerData]);

	let text = PhaseShift(activeIndex);
	
	const handleNext = () => {
		if (text === "Refuerzo") {
			axios.post(`${import.meta.env.VITE_BACKEND_URL}/draft`, {
				player_id: playerId,
				territory_id: 1,
			  })
			.then(response => {
				setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
				setIsTurn(false);
			})
			.catch(error => {
				console.error(error);
			});
		}
	};
	if (activeIndex === 4){
		setActiveIndex(0);
	}
	

	
	// const gameId = props.gameId;

	const getRefresh = () => {
		let path = '';
	
		// gets posibles: draft, start
		if (text === "Refuerzo") {
			axios({
				method: 'get',
				url: `${import.meta.env.VITE_BACKEND_URL}/draft/${playerId}`,
			})
			.then(response => {
				setWonTroops(`Tienes ${response.data.troops} tropas para poner`);
				setIsTurn(true);
			})
			.catch(error => {
				console.error(error);
			});
		}


		// Aca estoy tratando de que cuando no es su turno, haga el request necesario para poder saber si
		// ya cambio y el turno es suyo para habilitar el boton y pasar a la siguiente fase. No me funciona
		// y me tengo que ir a judo :(

		else if (text === "No es tu turno") {
			let color = playerData?.color;

			if (state.game.turn === color){
				setIsTurn(true);
			}
			else {
				setIsTurn(false);
			}

			// axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/available/diff`)
			// .then(response => {
			// 	const ID = response.data.id;
			// 	axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${ID}`)
			// 	.then(response => {
			// 			setGameInfo(response.data);
						
			// 			if (gameInfo.turn == color) {
			// 				setIsTurn(true);
			// 			}
			// 			else {
			// 				setIsTurn(false);
			// 			}

			// 			console.log(gameInfo);
			// 	})
			// 	.catch(error => {
			// 			setGameInfo(error.message);
			// 			reject(error);
			// 	});
			// })
			// .catch(error => {
			// 	setGameInfo(error.message);
			// 	reject(error);
			// });
			// // setIsTurn(false);
		}
		else {
			path = 'start';
			setIsTurn(true);
		}
	}

	if (playerData){
	return (
		<div className="Phase">
			<div className="phases">
				<div className="bar">
					<div className={`bar-item ${activeIndex === 0 ? "active" : ""}`} />
					<div className={`bar-item ${activeIndex === 1 ? "active" : ""}`} />
					<div className={`bar-item ${activeIndex === 2 ? "active" : ""}`} /> 
					<div className={`bar-item ${activeIndex === 3 ? "active" : ""}`} />  
				</div>
				<button disabled={!isTurn} onClick={handleNext}>{"\u2192"}</button>
			</div>

			<div className="current-phase">
				<p>
					{text}
				</p>
			</div>

			<div className="refresh-button">
				<button onClick={getRefresh}>{"\u21bb"}</button>
			</div>
			{wonTroops}

		</div>
	);
	}
};
      

export default Phase;
