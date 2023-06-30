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
	const [activeIndex, setActiveIndex] = useState(0); 
	const [wonTroops, setWonTroops] = useState(0);
	const [gameInfo, setGameInfo] = useState(null);
	const playerId = props.playerId;
	const [isTurn, setIsTurn] = useState(false);
	const { state } = useContext(GameContext);
  const [playerData, setPlayerData] = useState(null);


	
	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1));
		setIsTurn(false);
	};
	if (activeIndex === 4){
		setActiveIndex(0);
	}
	
	let text = PhaseShift(activeIndex);
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
				setWonTroops(response.data.troops);
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
			let color = playerData?.color;

			axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/available/diff`)
			.then(response => {
				const ID = response.data.id;
				axios.get(`${import.meta.env.VITE_BACKEND_URL}/games/${ID}`)
				.then(response => {
						setGameInfo(response.data);
						
						if (gameInfo.turn == color) {
							setIsTurn(true);
						}
						else {
							setIsTurn(false);
						}

						console.log(gameInfo);
				})
				.catch(error => {
						setGameInfo(error.message);
						reject(error);
				});
			})
			.catch(error => {
				setGameInfo(error.message);
				reject(error);
			});
			// setIsTurn(false);
		}
		else {
			path = 'start';
			setIsTurn(true);
		}
	}

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
			tienes {wonTroops} tropas para poner

		</div>
	);
};
      

export default Phase;
