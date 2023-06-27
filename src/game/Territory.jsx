import React, { useState } from "react";
import "./Territory.css"

function Territory(props) {
  let className = "territory";
  const [active, setActive] = useState(false);

  switch (props.index) {
    case 0:
      className += " territory1";
      break;
    case 1:
      className += " territory2";
      break;
    case 2:
      className += " territory3";
      break;
    case 3:
      className += " territory4";
      break;
    default:
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


  return (
    <button className={`${className} ${active ? "active" : ""}`} onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default Territory;
