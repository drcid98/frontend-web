import React, { useState } from "react";
import Territory from "./Territory";
import './Cell.css'

function Cell(props) {
  let className = "cell";
  const [Territories, setTerritories] = useState(Array(4).fill(null));

  switch (props.index) {
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
    default:
      break;
  }

  return (
    <div className={className} onClick={props.onClick}>
      <div className="cell-container">
        <Territory index={0} value={Territories[0]} />
        <Territory index={1} value={Territories[1]} />
        <Territory index={2} value={Territories[2]} />
        <Territory index={3} value={Territories[3]} />
        </div>
    </div>
    
  );
}

export default Cell;

