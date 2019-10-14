import React from 'react';
import "../App.css";
import logo from "../img/logo.png";

function Nav() {
    return (
    <header className="p-1 flex justify-between">
   <div className="logo">
          <img id="logo" src={logo} alt="logo"/>
        </div>
        <nav className="nav flex items-center">
          <ul className="nav-ul flex">
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
    );
}

export default Nav;