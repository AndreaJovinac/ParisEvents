import React from 'react';
import logo from '../Img/logo-paris.png';
import '../Vue/favoris.css';

function Favoris () {

      return (
        <div className="App">
          <section className="bandeau2">
            <h1> Favoris</h1>
            <h6> Les événements que vous aimez</h6>
          </section>
          <div className="container">
             <p> Vous n'avez pas encore de favoris</p>
          </div>
      </div>
    );
  }
  
  export default Favoris;