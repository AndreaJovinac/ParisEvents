import React, {useState} from 'react';
import './Eventscomponents.css';
import imgplus from '../Img/plus.svg';
import imgmoins from '../Img/signe-moins.svg';
import logo from '../Img/img.jpg';
import {Link} from 'react-router-dom';
//import Details from './Vue/Details'; 


function Eventscomponents({evenement, onOpenModal}) {
    return ( 
      <section className="containersection">
        <div className="event" onClick={onOpenModal}> 
            <div className="container">
                  <div className="imgEvent" style={{ backgroundImage: `url(${evenement.cover_url})`}}> 
                  </div>
                  <div className="contentEvent">
                    <time>{evenement.date_start}</time>
                      <h3 dangerouslySetInnerHTML={{ __html: evenement.title }}></h3>
                      <p maxlength="4" dangerouslySetInnerHTML={{ __html: evenement.lead_text }}></p>
                      {/* dangerouslySetInnerHTML permet de retirer tous les caractères speciaux dans une chaine de caractère */}
                    <button className="buttonEvent"> <img className="cross" src={imgplus} height="10px" alt=""/> Ajouter en favoris</button>
                    <button className="buttonEvent"> <img className="cross" src={imgmoins} height="10px" alt=""/> Retirer en favoris</button>
                  </div>
            </div>
        </div>
      </section>
  );
  }

export default Eventscomponents;





/*const List = () => {
  const[donnees, setDonnees] = useState([]);
         class Eventscomponents extends React.Component {
            fetch("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_end%20asc&limit=10&pretty=false&timezone=UTC")
            .then(response=>response.json()
            .then(result =>
        {
        console.log(result.records[0].record.id);
        setdonnees(result);
       
       
   /* render() {
      return (
        <div className="App">
          <div className="container">
            <div class="imgFond">
              <img src={logo} width="30%" alt="img" />
            </div>
            <h3> Titre de l'événement</h3>
            <p> Date de debut</p>
            <p> Description</p>
            <p> Retrouver les derniers événements publiés </p>
            <button>Mettre en Favoris</button>
            <button>Retirer en Favoris</button>
          </div>
      </div>
      );*/
    //}

 





/*export default Eventscomponents;
/*** ***/
