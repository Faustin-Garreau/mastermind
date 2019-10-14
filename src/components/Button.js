import React from 'react';
import "../App.css";

function Button() {
    return (
    <div className="action flex justify-around w-1/5">
        <div className="undo flex justify-center items-center"><i className="fas fa-undo"></i></div>
        <div className="start flex justify-center items-center">GO</div>
      </div>
    );
}

export default Button;