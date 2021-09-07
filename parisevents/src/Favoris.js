import React from 'react';
import logo from './logo-paris.png';

class Favoris extends React.Component {
    loadevent(){
      fetch( 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=5&refine.category=%C3%89v%C3%A9nements+&refine.address_city=Paris').then(response=>response.json()
      .then(result=>{
        console.log(result);
      }))
    } 
    render() {
      return (
        <div className="App">
        <img src={logo} height="70" className="App-logo" alt="logo" />
        <h1> Favoris</h1>
        <p>Ce que l'utilisateur a sélectionné de doux</p>
       
        
        
      </div>
    );
    }
   
      
  
      
  
  }
  
  export default Favoris;