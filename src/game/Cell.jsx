import React, { useState } from "react";
import Territory from "./Territory";
import './Cell.css'

function ShowAdd(obj) {
  let lastValue = obj.value;
  obj.value += 1;
  return lastValue;

}

function Cell(props) {
  const { name, type } = props.index;
  let className = "cell";
  let classType = "";
  const [Territories, setTerritories] = useState(Array(4).fill(null));

  // let _id = props.firstId

  // Creo que en esta seccion es donde se deberia agregar algo para setear el color de cada
  // territorio. En Territory.jsx se deben cambiar el value por props.value para pdoer acceder 
  // directamente a lo que se le pasa desde aca

  let idObj = {value: props.firstId};
  

  switch (name) {
    case 0:
      className += " cell1";
      break;
    case 1:
      className += " cell2";
      break;
    case 2:
      className += " cell3";
      break;
    case 3:
      className += " cell4";
      break;
    case 4:
      className += " cell5";
      break;
    case 5:
      className += " cell6";
      break;
    case 6:
      className += " cell7";
      break;
    case 7:
      className += " cell8";
      break;
    default:
      break;
  }

  switch (type) {
    case 0:
      classType += "cell-container0";
      break;
    case 1:
      classType += "cell-container1";
      break;
    case 2:
      classType += "cell-container2";
      break;
    case 3:
      classType += "cell-container3";
      break;
    case 4:
      classType += "cell-container4";
      break;
    default:
      classType = "cell-container";
      break;
  }

  if (name == 5){
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <Territory index={0} value={Territories[0]} id={ShowAdd(idObj)}/>
          <Territory index={1} value={Territories[1]} id={ShowAdd(idObj)}/>
          </div>
      </div>
      
    );
  }

  else if (name == 6 || name == 7){
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <Territory index={0} value={Territories[2]} id={ShowAdd(idObj)}/>
          <Territory index={1} value={Territories[3]} id={ShowAdd(idObj)}/>
          </div>
      </div>
      
    );
  }

  else {
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <Territory index={0} value={Territories[0]} id={ShowAdd(idObj)}/>
          <Territory index={1} value={Territories[1]} id={ShowAdd(idObj)}/>
          <Territory index={2} value={Territories[2]} id={ShowAdd(idObj)}/>
          <Territory index={3} value={Territories[3]} id={ShowAdd(idObj)}/>
          </div>
      </div>
      
    );
  }

  
}

export default Cell;

