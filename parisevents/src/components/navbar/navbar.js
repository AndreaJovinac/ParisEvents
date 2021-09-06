import React, {useState, useEffect} from 'react'
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li className="items">Accueil</li>
                <li className="items">Liste des événements</li>
                <li className="items">Favoris</li>
            </ul>
            <button className="btn"> Menu</button>

        </nav>
    )

}