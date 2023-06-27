import React, { useState } from 'react';
import './Game.css'
import Layout from '../common/Layout';
import Board from '../game/Board';
import Phase from '../game/Phase';


function Game() {
    return (
        <Layout>
        <div className="page-contanier">
          <h1> DCConquista </h1>
          <div className="game-container">
            <Board/>
          </div>
          
          <Phase/>  


        </div>
        
        </Layout>
      );
}



export default Game