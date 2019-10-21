import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Plateau from './Plateau';
import Line from './Line';
import Control from './Control';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentCase: 0,
      currentLine: 0,
      combination: [],
      combinationToFind: ["red","orange","green","blue"],
      game: [
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
        [[],[]],
      ],
    };
    this.change = this.change.bind(this);
  }

  change(color) {
    const gameBis = [...this.state.game]
    const combination = [...this.state.combination]

    if (this.state.currentCase < 4) { 
      gameBis[this.state.currentLine][0].push(color)
      combination.push(color)

      this.setState((state) => ({
        game: gameBis,
        currentCase: state.currentCase + 1,
      }));
    } 

  }

  /* undo() {
    const gameBis = [...this.state.game]

    if (this.state.currentCase > 0) {
      gameBis[this.state.currentLine][0].push(color)
    }

  } */

  render() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Plateau game={this.state.game}></Plateau>
        <Control colorize={this.change}></Control>
      </main> 
    </div>
  );
  }
}

export default App;
