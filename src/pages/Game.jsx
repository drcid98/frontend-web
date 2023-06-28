import React, { useState } from 'react';
import './Game.css'
import Layout from '../common/Layout';
import Board from '../game/Board';
import Phase from '../game/Phase';
import { GameProvider } from '../game/provider';


function Game() {
    return (
      <GameProvider gameId={1}>

        <Layout>
        <div className="page-contanier">
          <h1> DCConquista </h1>
          <div className="game-container">
            <Board/>
          </div>
          
          <Phase/>  


        </div>
        
        </Layout>
      </GameProvider>
      );
}



export default Game