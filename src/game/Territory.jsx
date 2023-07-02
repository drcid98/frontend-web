import React, { createContext, useContext, useEffect, useState } from "react";
import "./Territory.css"
import { GameContext } from "./provider";

function getPlayerId(state, userId) {
  for (let i = 0; i < state.players.length; i++) {
    if (state.players[i].id === userId) {
      console.log(state.players[i].color);
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


export function  TerritoryWrapper({ index, id, props}) {
  const { state } = useContext(GameContext);
  const [territoryData, setTerritoryData] = useState(null);
  const [territoryValue, setTerritoryValue] = useState(null);
  const onButtonPress = props.onButtonPress;
  const sharedInfo = props.sharedInfo;
  const [troops, setTroops] = useState(0);

  const buttonsInfo = sharedInfo?.button;


  useEffect(() => {
    if (state !== null) {
      // console.log(state);
      const territories = state.territories;
      // const territoryData = territories[id];
      const territoryData = getTerritoryId(state, id);
      setTerritoryData(territoryData);
      setTroops(territoryData.troops);

      const _playerId = territoryData.player_id;
      const _colorId = getPlayerId(state, _playerId);
      if (_colorId === 1) {
          setTerritoryValue('red');
      } else if (_colorId === 2) {
          setTerritoryValue('green');
      } else if (_colorId === 3) {
          setTerritoryValue('blue');
      } else if (_colorId === 4) {
          setTerritoryValue('cyan');
      }
    }
  }, [state, id]);

  let className = 'territory';
  let territoryId = null;
  const [active, setActive] = useState(false);
  
  
  const handleButtonPress = (id) => {
    if (buttonsInfo?.id && !buttonsInfo?.id2){
      console.log("Apretando el segundo", id);
      const id2 = id;
      const buttonInfo = { 'button': {'id': buttonsInfo.id, 'id2': id2} };
      setActive(!active);
      onButtonPress(buttonInfo);
    }
    else {
      console.log("me apretaron", id);
      const buttonInfo = { 'button': {'id':id} };
      setActive(!active);
      onButtonPress(buttonInfo);
    }
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
    // console.log("Me refrescaron");
    if (sharedInfo !== null) {
      // console.log("entra con: ", sharedInfo);
      for (let i = 0; i < sharedInfo.length; i++) {
        if (sharedInfo[i].id === territoryData?.id) {
          // console.log("entra al if");
          setTroops(sharedInfo[i].troops);
          const _playerId = sharedInfo[i].player_id;
          const _colorId = getPlayerId(state, _playerId);
          console.log("player id: ", _playerId, _colorId);
          if (_colorId === 1) {
           setTerritoryValue('red');
          } else if (_colorId === 2) {
           setTerritoryValue('green');
          } else if (_colorId === 3) {
           setTerritoryValue('blue');
          } else if (_colorId === 4) {
           setTerritoryValue('cyan');
          }
              
            }
          }
    }
  }, [sharedInfo]);


  return (
    <button
      value={territoryValue}
      id={id}
      className={`${className} ${active ? 'active' : ''}`}
      onClick={() => handleButtonPress(id)}
    >
      troops: {troops}
    </button>
);
}

export default TerritoryWrapper;