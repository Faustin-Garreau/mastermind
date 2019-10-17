import React from 'react';
import '../App.css';
import Board from "./Board.js";
import Controle from "./Controle.js";

class Plateau extends React.Component {

  render() {
      return (
        <div className="Plateau">
            <Board></Board>
            <Controle></Controle>
        </div> 
      );
  }
}

export default Plateau;
