import React, { useState } from "react";
import Cell from "./Cell";
import './Board.css'

function Board() {
  const [Cells, setCells] = useState(Array(5).fill(null));


  return (
    <div className="board">
        <div className="board-container">
        <Cell index={0} value={Cells[0]} />
        <Cell index={1} value={Cells[1]} />
        <Cell index={2} value={Cells[2]} />
        <Cell index={3} value={Cells[3]} />
        <Cell index={4} value={Cells[4]} />
        </div>
    </div>
  );
}

export default Board;



