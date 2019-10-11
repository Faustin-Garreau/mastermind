import React from 'react';
import './App.css';
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <header className="bg-red-500">
        <div>
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <nav className="nav">
          <ul className="nav-ul">
            <li>
              Scores
            </li>
            <li>
              Règles
            </li>
            <li>
              Contact
            </li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}




export default App;
