import React from 'react'

function Navbar(props) {
    return (
        <header>
                <a href="https://fr.wikipedia.org/wiki/Mastermind" target="_blank" className="logo">Mastermind</a>
            <nav>
                <ul>
                <li><a href="#">Scores</a></li>
                <li><a href="#">Règles</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar