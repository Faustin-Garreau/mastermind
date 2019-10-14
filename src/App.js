import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Board from "./components/Board.js";
import Controle from "./components/Controle.js";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Board></Board>
      <Controle></Controle>
    </div>
  );
}




export default App;
