import React, { useEffect, useState } from "react";
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
  const index = props.index;
  const firstId = props.firstId;
  const onButtonPress = props.onButtonPress;
  const sharedInfo = props.sharedInfo;

  let className = "cell";
  let classType = "";
  const [Territories, setTerritories] = useState(Array(4).fill(null));

  const handleButtonPress = (id) => {
    const buttonInfo = { 'button': {name, id} };
    setActive(!active);
    onButtonPress(buttonInfo);
  };


  let idObj = {value: props.firstId};

  let t1 = null;
  let t2 = null;
  let t3 = null;
  let t4 = null;
  

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

  useEffect(() => {
    if (sharedInfo !== null) {
      if (name == 6 || name == 7){
        t1 = TerritoryWrapper(0, ShowAdd(idObj), sharedInfo);
        t2 = TerritoryWrapper(1, ShowAdd(idObj), sharedInfo);
      }
      else {
        t1 = TerritoryWrapper(0, ShowAdd(idObj), sharedInfo);
        t2 = TerritoryWrapper(1, ShowAdd(idObj), sharedInfo);
        t3 = TerritoryWrapper(2, ShowAdd(idObj), sharedInfo);
        t4 = TerritoryWrapper(3, ShowAdd(idObj), sharedInfo);
      }
    }
  }, [sharedInfo]);


  if (name == 6 || name == 7){
    t1 = TerritoryWrapper(0, ShowAdd(idObj), sharedInfo);
    t2 = TerritoryWrapper(1, ShowAdd(idObj), sharedInfo);
    
    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
          <button
            value={t1[0]}
            id={t1[1]}
            className={t1[2]}
            onClick={() => handleButtonPress(t1[1])}
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
            onClick={() => handleButtonPress(t2[1])}
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
    t1 = TerritoryWrapper(0, ShowAdd(idObj), sharedInfo);
    t2 = TerritoryWrapper(1, ShowAdd(idObj), sharedInfo);
    t3 = TerritoryWrapper(2, ShowAdd(idObj), sharedInfo);
    t4 = TerritoryWrapper(3, ShowAdd(idObj), sharedInfo);

    return (
      <div className={className} onClick={props.onClick}>
        <div className={classType}>
        <button
            value={t1[0]}
            id={t1[1]}
            className={t1[2]}
            onClick={() => handleButtonPress(t1[1])}
            >
            id: {t1[1]}
            <br />
            T: {t1[3]}
        </button> 
        <button
            value={t2[0]}
            id={t2[1]}
            className={t2[2]}
            onClick={() => handleButtonPress(t2[1])}
            >
            id: {t2[1]}
            <br />
            T: {t2[3]}
        </button> 
        <button
            value={t3[0]}
            id={t3[1]}
            className={t3[2]}
            onClick={() => handleButtonPress(t3[1])}
            >
            id: {t3[1]}
            <br />
            T: {t3[3]}
        </button> 
        <button
            value={t4[0]}
            id={t4[1]}
            className={t4[2]}
            onClick={() => handleButtonPress(t4[1])}
            >
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

