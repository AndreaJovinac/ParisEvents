import React from 'react';
import './Eventscomponents.css';

function Eventscomponents() {
    return (
      <div className="App">
          <div className="container">
            <image/>
            <h3> Titre de l'événement</h3>
            <p> Date de debut</p>
            <p> Description</p>
            <p> Retrouver les derniers événements publiés </p>
            <button>Mettre en Favoris</button>
            <button>Retirer en Favoris</button>
          </div>
      </div>
    );
  }
  
  export default Eventscomponents;