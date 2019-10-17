import React from 'react';
import "../App.css";
import Ligne from "./Ligne.js";

class Board extends React.Component {

    render() {
    return (
        <div className="mastermind p-5 md:p-10 lg:p-32">
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
            <Ligne></Ligne>
      </div>
    );
    }
}

export default Board;