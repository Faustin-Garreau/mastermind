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
      <div className="Main p-3">
        <div className="plateau">
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="master-row w-full">
            <div className="master-col  justify-around w-2/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="master-col2 w-1/3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer p-1 flex justify-around items-center">
        <div className="palette flex w-2/3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="action flex w-1/3">
          <div className="reset"><i class="fas fa-undo"></i></div>
          <div className="go"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
