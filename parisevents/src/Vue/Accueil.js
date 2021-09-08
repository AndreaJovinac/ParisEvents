import React, {useEffect, useState} from 'react';
import Eventscomponents from '../Components/Eventscomponents';
import logo from '../Img/logo-paris.png';
import './accueil.css';

/* Va nous exécuter une promesse 
Then va nous sortir le résultat */



 function Accueil() {
  const [event_,setEvent_] = useState(null)
  useEffect(() => {
    // fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&limit=10&pretty=false&timezone=UTC')
    // .then(response=>response.json())
    // .then(result=>{
    //   /*console.log(result.records[0].record.id);*/
    //   console.log(result.records[0].record.fields);
    //   const event_ = result.records[0].record.fields;
    //   setEvent_(event_)
    // }) //Fin fetch et then
    setEvent_({title:"coucocucoucoucu", date_start:"12/34/2%22", description:"sduhfoshfs sfkshjbsogbkdsf"})
  }, []) // fin useEffect
  
      return (
        <div className="App">
            <img src={logo} height="70" className="App-logo" alt="logo" />
            <h1> Bienvenue sur Paris Events ! </h1>
            <p>L'application qui permet de voir tous les événements</p>
            <h3> L'actualité </h3>
            <div className="actu"> 
            </div> 
            { event_ && <Eventscomponents toto={event_} /> }
            
        </div>
    );
    }

  

  
  export default Accueil;