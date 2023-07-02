import React, { useState } from "react";
import Cell from "./Cell";
import './Board.css'

function Board({ sharedInfo, onButtonPress }) {
  const [Cells, setCells] = useState(Array(5).fill(null));

  const handleCellButtonPress = (buttonInfo) => {
    onButtonPress(buttonInfo);
  };


  return (
    <div className="board">
        <div className="board-container">
            <Cell index={{name: 0}}
              firstId={0}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 1, type:0}}
              firstId={4}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 2}}
              firstId={8}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 3, type:1}}
              firstId={12}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 4, type:1}}
              firstId={16}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 6, type:2}}
              firstId={20}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
            <Cell index={{name: 7, type:2}}
              firstId={22}
              onButtonPress={handleCellButtonPress}
              sharedInfo={sharedInfo} />
        </div>
    </div>
  );
}

export default Board;



