import React, { useState } from "react";
import "./Territory.css"

function Territory(props) {
  let className = "territory";
  let id = 1;
  const [active, setActive] = useState(false);
  let value = "white";


  switch (props.index) {
    case 0:
      className += " territory1";
      id = 0;
      value="red";
      break;
    case 1:
      className += " territory2";
      id = 2;
      value="green";
      break;
    case 2:
      className += " territory3";
      id = 3;
      value="blue";
      break;
    case 3:
      className += " territory4";
      id = 4;
      value="cyan";
      break;
    default:
      className += " territoryDefault";
      id = 999;
      value="white";
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
