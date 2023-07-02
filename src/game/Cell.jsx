import React, { useEffect, useState } from "react";
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


  if (name == 6 || name == 7){
    
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <TerritoryWrapper index={0} id={ShowAdd(idObj)} props={props}/>
          <TerritoryWrapper index={1} id={ShowAdd(idObj)} props={props}/>
          </div>
      </div>
      
    );
  }

  else {

    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <TerritoryWrapper index={0} id={ShowAdd(idObj)} props={props}/>
          <TerritoryWrapper index={1} id={ShowAdd(idObj)} props={props}/>
          <TerritoryWrapper index={2} id={ShowAdd(idObj)} props={props}/>
          <TerritoryWrapper index={3} id={ShowAdd(idObj)} props={props}/>
          </div>
      </div>
      
    );
  }

  
}

export default Cell;

