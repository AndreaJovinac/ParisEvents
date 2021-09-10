import React from 'react';
import logo from '../Img/logo-paris.png';
import Eventscomponents from '../Components/Eventscomponents';

class Favoris extends React.Component {
    
    render() {
      return (
        <div className="App">
        <h1> Favoris</h1>
        <p>Ce que l'utilisateur a sélectionné de doux</p>
        <Eventscomponents/>
      </div>
    );
    }
  
  }
  
  export default Favoris;