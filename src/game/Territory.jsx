import React, { useState } from "react";
import "./Territory.css"
import { useTerritoryData } from "./provider";


function Territory(props) {
  let className = "territory";
  let id = 1;
  const [active, setActive] = useState(false);
  let value = "white";

  // Del territorio 0
  const territoryData = useTerritoryData(0)
  .then((data) => {
    if (data) {
      const playerId = data.player_id;
      console.log(data.player_id);
    }
    // console.log(data['player_id']);
  });
  
  // while (typeof(territoryData) == 'object') {
  //   console.log("esperanzdo");
  // }

  // console.log(territoryData + "tipo: " + typeof(territoryData));
  
  const playerId = territoryData['player_id'];
  const troops = territoryData.troops;

  console.log(playerId + " aaaaa");

  // value = territoryData.color;
  // Aca debo pasarle el nombre del jugador que tiene el territorio
  // Luego completar con un if para setear el color dependiendo del jugador



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

  const handleClick = () => {
    if (!active) {
    setActive(true);
    }
    else {
      setActive(false);
    }
  };

  // console.log({id});


  return (
      <button value={value} id={props.id} className={`${className} ${active ? "active" : ""}`} onClick={handleClick}>
        {props.value}
        {props.id}
        {/* {id} */}
      </button>
  );
}

export default Territory;
