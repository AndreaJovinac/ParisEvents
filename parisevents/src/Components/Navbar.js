import React from 'react';
import '../Components/navbar.css';
import {Link} from 'react-router-dom';
import logo from '../Img/logo.parisevent.svg';

function Navbar() {
    return (
        <header>
            <div className="content_header">
                <div className="logoHeader">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <ul className="menu">
                        <Link to="/">
                            <li className="items active">Accueil</li>
                        </Link>
                        <Link to="/Search">
                            <li className="items">Rechecher un événement</li>
                        </Link>
                        <Link to="/Favoris">
                            <li className="items"> Vos Favoris</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;