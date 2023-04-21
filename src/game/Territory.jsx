import React from "react";

function Territory(props) {
  let className = "territory";

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

  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Territory;
