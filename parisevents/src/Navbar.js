import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <Link to="/">
                    <li className="items">Accueil</li>
                </Link>
                <Link to="/Search">
                    <li className="items">Rechecher</li>
                </Link>
                <Link to="/Events">
                    <li className="items">Events</li>
                </Link>
                <Link to="/Favoris">
                    <li className="items">Favoris</li>
                </Link>
            </ul>
            <button className="btn"> Menu</button>
        </nav>
    )
}

export default Navbar;