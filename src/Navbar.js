import React from 'react'

function Navbar(props) {
    return (
        <header>
                <a href="https://fr.wikipedia.org/wiki/Mastermind" target="_blank" className="logo">Mastermind</a>
            <nav>
                <ul>
                <li><a href="https://fr.wikipedia.org/wiki/Mastermind">Règles</a></li>
                <li><a href="#">JeSaisAP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar