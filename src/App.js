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
      msg: "",
      iswinorloose: "hidden",
      combinationToFind: this.aleatoire(),
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

  aleatoire() {
    const combinationToFind = []

    for (var i = 0; i < 4;i++) {
      let entier = Math.floor(Math.random() * 6);
      if (entier == 0) {
        combinationToFind.push("red")
      } else if (entier == 1) {
        combinationToFind.push("orange")
      } else if (entier == 2) {
        combinationToFind.push("yellow")
      } else if (entier == 3) {
        combinationToFind.push("green")
      } else if (entier == 4) {
        combinationToFind.push("blue")
      } else if (entier == 5) {
        combinationToFind.push("purple")
      } else {
        console.log('error aleatoire')
      }
    }
    return combinationToFind
  }

  change(color) {
    const gameBis = [...this.state.game]
    if (this.state.currentLine == 10) {
      this.setState((state) => ({
        msg: "YOU LOOSE",
        iswinorloose: "visible"
      }));
    }
    else if (this.state.currentCase < 4) { 
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

      for (let index = 0;index < result[0]; index++) {
        gameBis[this.state.currentLine][1].push('black')
      }
      for (let index = 0;index < result[1]; index++) {
        gameBis[this.state.currentLine][1].push('grey')
      }
      if (result[0] == 4) {
        
        this.setState((state) => ({
          msg: "YOU WIN",
          iswinorloose: "visible"
        }));
      }

    this.setState((state) => ({
      game: gameBis,
      currentLine: state.currentLine + 1,
      currentCase: state.currentCase = 0
    }));
    } 

  }  

  compare() {
    let combination = [...this.state.game[this.state.currentLine][0]]
    let combinationToFind = [...this.state.combinationToFind]
    let good = 0
    let bad = 0
    
    for(let index = 0; index < combination.length; index++) {
      if (combination[index] == combinationToFind[index]) {
        good++
        combinationToFind[index] = "X"
        combination[index] = "A"
      } 

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
      <div className="result-box">
      <div className={this.state.iswinorloose} id="winorloose">{this.state.msg}</div>
      </div>
      <main>
        <Plateau className="plateau" game={this.state.game}></Plateau>
        <Control className="control" undo={this.undo} colorize={this.change} submit={this.submit}></Control>
      </main> 
    </div>
  );
  }
}

export default App;
