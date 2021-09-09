import React from 'react';
import '../Components/navbar.css';
import {NavLink} from 'react-router-dom';
import logo from '../Img/logo.parisevent.svg';



function Navbar() {
   /* function active() {
        const activation = document.getElementById('test');
        if (<Link to="/"/>) {
           return  activation.className = 'active'  
        }  
           return activation.className = ''
    }
    active();*/

    return (
        <header>
            <div className="content_header">
                <div className="logoHeader">
                    <img src={logo} alt=""/>
                </div>
                <nav>
                    <ul className="menu">
                        <NavLink to="/">
                            <li className="items ">Accueil</li>
                        </NavLink>
                        <NavLink to="/Search">
                            <li className="items">Rechecher un événement</li>
                        </NavLink>
                        <NavLink to="/Favoris">
                            <li className="items"> Vos favoris</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
        
    )
}

export default Navbar;