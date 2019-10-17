import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Plateau from "./components/Plateau.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ],
        [ "","","","" ]
      ],
      currentLine: 0,
      currentCase: 0,
      combinationToFind: ["red","orange","yellow","green"],
      combination: []
    };
}

  render() {
      return (
        <div className="App">
        <Nav></Nav>
        <Plateau></Plateau>
        </div> 
      );
  }
}

export default App;



