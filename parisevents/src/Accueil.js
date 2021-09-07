import React, { Fragment } from 'react';
import Eventscomponents from './Eventscomponents';
import logo from './logo-paris.png';

class Accueil extends React.Component {
    afficheEvents(){
      fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=5&refine.category=%C3%89v%C3%A9nements+&refine.address_city=Paris')
      .then(response=>response.json()
      .then(result=>{
        console.log(result);
  
        
      }))
    }
    
    render() {
      return (
        <div className="App">
            <img src={logo} height="70" className="App-logo" alt="logo" />
            <h1> Bienvenue sur Paris Events ! </h1>
            <p>L'application qui permet de voir tous les événements</p>
            <h3> L'actualité </h3>
            <div className="actu"> 
            {this.afficheEvents()}
            </div> 
            
        </div>
    );
    }

  
  }
  
  export default Accueil;