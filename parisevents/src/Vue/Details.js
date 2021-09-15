import React, {useEffect, useState} from 'react';
import logo from '../Img/logo-paris.png';
import './details.css';
import Eventdetail from '../Components/Eventdetail';
import Eventscomponents from '../Components/Eventscomponents';
import Search from '../Vue/Search';


function Details({evenement, onCloseModal}) {

      return (
        <div className="App">
            <h1> Détails de l'événements </h1>
            <p>Voici les détails d'un events</p>
            <div className="actu"> 
            </div> 
             
        </div>
    );
    }


  
  export default Details;


// class Details extends React.Component {
  
//   render() {
//     return (
//       <div className="App">
//       <img src={logo} height="70" className="App-logo" alt="logo" />
//       <h1> Détails</h1>
//       <p>Voici les détails d'un events</p>

      
//     </div>
//   );
//   }
 
    

    

// }

// export default Details;