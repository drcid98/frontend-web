import React, { useState } from "react";
import Territory from "./Territory";
import TerritoryWrapper from "./Territory";
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

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };


  if (name == 6 || name == 7){
    let t1 = TerritoryWrapper(0, ShowAdd(idObj));
    let t2 = TerritoryWrapper(1, ShowAdd(idObj));
    
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <button
            value={t1[0]}
            id={t1[1]}
            className={t1[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t1[1]}
            <br />
            T: {t1[3]}
          </button> 

          <button
            value={t2[0]}
            id={t2[1]}
            className={t2[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t2[1]}
            <br />
            T: {t2[3]}
          </button> 
        
      </div>
    </div>
    );
  }

  else {
    let t1 = TerritoryWrapper(0, ShowAdd(idObj));
    let t2 = TerritoryWrapper(1, ShowAdd(idObj));
    let t3 = TerritoryWrapper(2, ShowAdd(idObj));
    let t4 = TerritoryWrapper(3, ShowAdd(idObj));

    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
        <button
            value={t1[0]}
            id={t1[1]}
            className={t1[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t1[1]}
            <br />
            T: {t1[3]}
        </button> 
        <button
            value={t2[0]}
            id={t2[1]}
            className={t2[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t2[1]}
            <br />
            T: {t2[3]}
        </button> 
        <button
            value={t3[0]}
            id={t3[1]}
            className={t3[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t3[1]}
            <br />
            T: {t3[3]}
        </button> 
        <button
            value={t4[0]}
            id={t4[1]}
            className={t4[2]}
            onClick={handleClick}
            >
            {/* {territoryValue} */}
            id: {t4[1]}
            <br />
            T: {t4[3]}
          </button> 
          </div>
      </div>
      
    );
  }

  
}

export default Cell;

