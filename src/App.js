import React from 'react';
import './App.css';
import './framework.css';
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App h-screen">
      <div className="Header flex flex-col justify-center items-center">
        <div className="logo flex justify-center items-center">
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <nav className="nav">
          <ul className="nav-ul flex">
            <li className="p-5">
              Scores
            </li>
            <li className="p-5">
              Règles
            </li>
            <li className="p-5">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="Main">
        <div className="plateau">
          
        </div>
      </div>
    </div>
  );
}

export default App;
