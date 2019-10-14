import React from 'react';
import "../App.css";
import Case from "./Case.js";
import Button from "./Button.js";

function Controle() {
    return (
    <footer>
    <div className="select p-2 flex justify-around md:px-32 lg:px-64">
          <div className="palette flex justify-around w-4/5">
          <Case></Case>
          <Case></Case>
          <Case></Case>
          <Case></Case>
          <Case></Case>
          <Case></Case>
          </div>
          <Button></Button>
        </div>
    </footer>
    );
}

export default Controle;