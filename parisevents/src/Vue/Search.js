import React, {useEffect, useState} from 'react';
import '../Vue/search.css';
import Eventscomponents from '../Components/Eventscomponents';
import Eventsdetail from '../Components/Eventdetail';
import Navbar from '../Components/Navbar';

function Search() {
  /* Tu créer des constantes 
  Le Hook d’effet permet l’exécution d’effets de bord dans les fonctions composants :
  La fonction setState permet de mettre à jour l’état local. Elle accepte une nouvelle valeur d’état local et planifie un nouveau rendu du composant.
  
  Souvent, les effets de bord créent des ressources qui nécessitent d’être nettoyées avant que le composant ne quitte l’écran, telles qu’un abonnement ou l’ID d’une horloge. 
  Pour ce faire, la fonction fournie à useEffect peut renvoyer une fonction de nettoyage. Par exemple, pour créer un abonnement :
  */
  const [datas, setDatas] = useState([]);
  const [donnees, setDonnees] = useState([""]);
  const Lienapi = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=";
  const [event_,setEvent_] = useState(null); /* Valeur par défaut et setEvent c'est la valeur que l'on change à chaque fois - UseState qui permet de mettre à jour la valeur à chaque fois*/
  const [event_id,setEvent_id] = useState(null);
  const [displayModal,setDisplayModal] = useState(false);
  const value = [];

/* Recuperer les données du input */
  const donneesinput = (e) => {

    let value = e.target.value;
    setDonnees(value);
    
  }
  

  /* On teste  */
  console.log(donnees);
  
  
  function reload(){
    fetch(Lienapi+donnees)
          .then(response => response.json())
          .then(result => {
            setDatas(result.records);
            const event_ = result.records[0].record.fields;
            const event_id_ = result.records[0].record.id;
            setEvent_(event_);
            setEvent_id(event_id_)})
 
           
  
          }

  console.log(donnees);

  const openModal = () => { /* Ouvrir une modal tu mets à vrai */
    console.log(event_id);
    setDisplayModal(true) 
  }
  const closeModal = () => { /*Fermer une modal tu mets à faux */
    setDisplayModal(false) 
  }
     /* On teste  */
    // console.log(datas);
  


 

    return (
      <div className="App">
          <section className="bandeau">
            <h1> Rechercher un événement</h1>
            
              <input type="text" id="name"  placeholder="Tapez votre mot de recherche" onInput={donneesinput}/>
              <button type="submit" id="" className="btnSearch" onClick={reload} >Rechercher </button>

              
          </section>

          <div className="search-result-container">
          <h2> Résultat de votre recherche</h2>
                <hr/>
                
              {datas && datas.map((event, event_id) => (
                  <Eventscomponents key={event.record.id} id={event.record.id} evenement={event_id, event_, event.record.fields} onOpenModal={openModal}/>
              ))}
              {displayModal && <Eventsdetail evenement={event_id, event_} onCloseModal={closeModal}/>}
          </div>
      </div>
  );
}

export default Search;