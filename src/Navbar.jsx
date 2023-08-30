import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <img src="/path/to/logo.png" alt="MALNBADENS CAMPING" className="navbar-logo" />
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">HEM</Link></li>
                <li className="navbar-item"><Link to="/boende">BOENDE</Link></li>
                <li className="navbar-item"><Link to="/aktiviteter">AKTIVITETER</Link></li>
                <li className="navbar-item"><Link to="/oppettider">ÖPPETTIDER</Link></li>
                <li className="navbar-item"><Link to="/kontakt">KONTAKT</Link></li>
            </ul>
            <button className='highlighted-button'>BOKA</button>
        </nav>
    );
}


export default Navbar;