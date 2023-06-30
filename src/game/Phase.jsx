import React, { useState } from "react";
import './Phase.css'
import axios from 'axios';


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

// phase es un string
function getRefresh(phase, id) {
	let path = '';
	const [wonTroops, setWonTroops] = useState(0);

	// gets posibles: draft, start
	if (phase === "Refuerzo") {
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_BACKEND_URL}/draft/${id}`,
		})
		.then(response => {
			setWonTroops(response.data.troops);
		})
		.catch(error => {
			console.error(error);
		});
		return wonTroops;
	}
	else {
		path = 'start';
	}

}

function Phase(props) {
	const [activeIndex, setActiveIndex] = useState(0); 
	const [wonTroops, setWonTroops] = useState(0);

	
	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1));
	};
	if (activeIndex === 4){
		setActiveIndex(0);
	}
	
	let text = PhaseShift(activeIndex);
	const playerId = props.playerId;
	const gameId = props.gameId;

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
			})
			.catch(error => {
				console.error(error);
			});
		}
		else {
			path = 'start';
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
				<button onClick={handleNext}>{"\u2192"}</button>
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
