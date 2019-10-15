import React from 'react';
import "../App.css";

function Button() {
    return (
    <div className="action flex justify-around w-1/5">
        <button className="undo flex justify-center items-center"><i className="fas fa-undo"></i></button>
        <button className="start flex justify-center items-center">GO</button>
      </div>
    );
}

export default Button;