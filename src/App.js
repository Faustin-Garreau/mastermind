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
      combinationToFind: ["red","orange","yellow","green"],
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
    this.undo = this.undo.bind(this);
    this.compare = this.compare.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(color) {
    const gameBis = [...this.state.game]

    if (this.state.currentCase < 4) { 
      gameBis[this.state.currentLine][0].push(color)

      this.setState((state) => ({
        game: gameBis,
        currentCase: state.currentCase + 1,
      }));
    } 

  }

   undo(color) {
    const gameBis = [...this.state.game]

    if (this.state.currentCase > 0) {
      gameBis[this.state.currentLine][0].pop(color)

      this.setState((state) => ({
        game: gameBis,
        currentCase: state.currentCase - 1,
      }));
    }
  
  }

  submit() {
    let gameBis = [...this.state.game]
    if (this.state.currentCase === 4) {
      let result = this.compare();
      console.log(result)

      for (let index = 0;index < result[0]; index++) {
        gameBis[this.state.currentLine][1].push('black')
      }
      for (let index = 0;index < result[1]; index++) {
        gameBis[this.state.currentLine][1].push('grey')
      }
     
    }

    this.setState((state) => ({
      game: gameBis,
      currentLine: state.currentLine + 1,
      currentCase: state.currentCase = 0
    }));
  }  

  compare() {
    let combination = [...this.state.game[this.state.currentLine][0]]
    let combinationToFind = [...this.state.combinationToFind]
    let good = 0
    let bad = 0
    console.log(combination,combinationToFind,good,bad)

    for(let index = 0; index < combination.length; index++) {
      if (combination[index] == combinationToFind[index]) {
        good++
        combinationToFind[index] = "X"
        combination[index] = "A"
      } 
      console.log(combination,combinationToFind,good,bad)
    }

    for (let index = 0; index < combinationToFind.length;index++) {
      if (combinationToFind.includes(combination[index])) {
        bad++
        combinationToFind[combinationToFind.indexOf(combination[index])] = "X"
        combination[index] = "A"
      }
    }

    return [good , bad]
  }


  render() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Plateau className="plateau" game={this.state.game}></Plateau>
        <Control className="control" undo={this.undo} colorize={this.change} submit={this.submit}></Control>
      </main> 
    </div>
  );
  }
}

export default App;
