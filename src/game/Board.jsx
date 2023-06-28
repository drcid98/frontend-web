import React, { useState } from "react";
import Cell from "./Cell";
import './Board.css'

function Board() {
  const [Cells, setCells] = useState(Array(5).fill(null));


  return (
    <div className="board">
        <div className="board-container">
            <Cell index={{name: 0}} firstId={0}/>
            <Cell index={{name: 1, type:0}} firstId={4}/>
            <Cell index={{name: 2}} firstId={8}/>
            <Cell index={{name: 3, type:1}} firstId={12}/>
            <Cell index={{name: 4, type:1}} firstId={16}/>
            <Cell index={{name: 6, type:2}} firstId={20}/>
            <Cell index={{name: 7, type:2}} firstId={22}/>
        </div>
    </div>
  );
}

export default Board;



