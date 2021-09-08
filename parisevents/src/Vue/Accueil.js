import React, {useEffect, useState} from 'react';
import Eventscomponents from '../Components/Eventscomponents';
import logo from '../Img/logo-paris.png';
import './accueil.css';

/* Va nous exécuter une promesse 
Then va nous sortir le résultat */


/*Créer une fonction Accueil */
 function Accueil() {
  const [event_,setEvent_] = useState(null) /* Valeur par défaut et setEvent c'est la valeur que l'on change à chaque fois - UseState qui permet de mettre à jour la valeur à chaque fois*/
  useEffect(() => { /* C'est une fonction dans une fontion qui prends en paramètre fetch et ses then */
    fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&limit=10&pretty=false&timezone=UTC')
    
    /* La méthode then() renvoie un objet Promise. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback à utiliser en cas de complétion ou d'échec de la Promise. */
     .then(response=>response.json()) 
    .then(result=>{
    //   /* console.log(result.records[0].record.id); */
      console.log(result.records[0].record.fields); /* C'est juste pour tester si ça fonctionne bien */
      const event_ = result.records[0].record.fields;
      setEvent_(event_)
    }) //Fin fetch et then
    //setEvent_({title:"coucocucoucoucu", date_start:"12/34/2%22", description:"sduhfoshfs sfkshjbsogbkdsf"})
  }, []) // fin useEffect
  
      return (
        <div className="App">
           
            <h1> Découvrez vos événements exceptionnels et sensationnels </h1>
            <p>L'application qui permet de voir tous les événements</p>
            <h3> L'actualité </h3>
            <div className="actu"> 
            </div> 
            { event_ && <Eventscomponents toto={event_} /> }
            
        </div>
    );
    }

  

  
  export default Accueil;