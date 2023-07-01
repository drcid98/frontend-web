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

function getTerritoryId(state, territoryId) {
  for (let i = 0; i < state.territories.length; i++) {
    if (state.territories[i].id === territoryId + 1) {
      return state.territories[i];
    }
  }
  return null;
}


export function TerritoryWrapper( index, id, sharedInfo ) {

  // console.log('Shared Info:', sharedInfo);

  const { state } = useContext(GameContext);
  const [territoryData, setTerritoryData] = useState(null);

  useEffect(() => {
    if (state !== null) {
      // console.log(state);
      const territories = state.territories;
      // const territoryData = territories[id];
      const territoryData = getTerritoryId(state, id);
      setTerritoryData(territoryData);
    }
  }, [state, id]);

  let className = 'territory';
  let territoryId = null;
  const [active, setActive] = useState(false);
  

  let troops = 0;
  
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

  useEffect(() => {
    if (sharedInfo !== null) {
      // console.log("entra con: ", sharedInfo);
      for (let i = 0; i < sharedInfo.length; i++) {
        if (sharedInfo[i].id === territoryData?.id) {
          // console.log("entra al if");
          troops = sharedInfo[i].troops;
          
        }
      }
    }
  }, [sharedInfo]);

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
  console.log("tropas para el return: ", troops);

  return ([territoryValue, id, `${className} ${active ? 'active' : ''}`, troops]
  );
}

export default TerritoryWrapper;