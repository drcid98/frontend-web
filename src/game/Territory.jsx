import React, { createContext, useContext, useEffect, useState } from "react";
import "./Territory.css"
import { GameContext } from "./provider";

function getPlayerId(state, userId) {
  for (let i = 0; i < state.players.length; i++) {
    if (state.players[i].id === userId) {
      return state.players[i].color;
    }
  
  }
  return -1;
}


export function TerritoryWrapper({ index, value, id }) {
  const { state } = useContext(GameContext);
  const [territoryData, setTerritoryData] = useState(null);

  useEffect(() => {
    if (state !== null) {
      // console.log(state);
      const territories = state.territories;
      const territoryData = territories[id];
      setTerritoryData(territoryData);
    }
  }, [state, id]);

  let className = 'territory';
  let territoryId = 1;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  switch (index) {
    case 0:
      className += ' territory1';
      territoryId = 0;
      break;
    case 1:
      className += ' territory2';
      territoryId = 2;
      break;
    case 2:
      className += ' territory3';
      territoryId = 3;
      break;
    case 3:
      className += ' territory4';
      territoryId = 4;
      break;
    default:
      className += ' territoryDefault';
      territoryId = 999;
      break;
  }

  // console.log(territoryData);

  let troops = 0;
  if (territoryData) {
    troops = territoryData.troops;
  }

  let territoryValue = 'white';
  // console.log(territoryData);
  if (territoryData) {
    const playerId = territoryData.player_id;
    const colorId = getPlayerId(state, playerId);
    if (colorId === 1) {
      territoryValue = 'red';
    } else if (colorId === 2) {
      territoryValue = 'blue';
    } else if (colorId === 3) {
      territoryValue = 'green';
    } else if (colorId === 4) {
      territoryValue = 'cyan';
    }
  }

  return (
    <button
      value={territoryValue}
      id={id}
      className={`${className} ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {/* {territoryValue} */}
      id: {id}
      <br />
      T: {troops}
    </button>
  );
}


function Territory(props) {
  let className = "territory";
  let id = 1;
  const [active, setActive] = useState(false);
  let value = "white";

  const handleClick = () => {
    setActive(!active);
  };

	
	switch (props.index) {
		case 0:
			className += " territory1";
			id = 0;
			break;
		case 1:
			className += " territory2";
			id = 2;
			break;
		case 2:
			className += " territory3";
			id = 3;
			break;
		case 3:
			className += " territory4";
			id = 4;
			break;
		default:
			className += " territoryDefault";
			id = 999;
			break;
	}
	


  // console.log(props.value);


  return (
      <button
				value={props.value}
				id={props.id}
				className={`${className} ${active ? "active" : ""}`}
				onClick={handleClick}
			>
        {props.value}
        {props.id}
        {/* {id} */}
      </button>
  );
}


export default TerritoryWrapper;