import React from 'react';
import logo from '../Img/logo-paris.png';

class Details extends React.Component {
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
      <h1> Détails</h1>
      <p>Voici les détails d'un events</p>
      <button onClick={()=> {this.loadevent()}}>Charger les events</button>
      
    </div>
  );
  }
 
    

    

}

export default Details;