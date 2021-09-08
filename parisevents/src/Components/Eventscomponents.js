import React, {useState} from 'react';
import './Eventscomponents.css';
import logo from '../Img/img.jpg';


function Eventscomponents({toto}) {
    return (
      <div className="container">
            <div className="imgFond">
              <img src={logo} width="30%" alt="img" />
            </div>
              <h3> {toto.title}</h3>
              <p> {toto.date_start}</p>
              <p> {toto.description}</p>
              <button>Mettre en Favoris</button>
              <button >Retirer en Favoris</button>
      </div>
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
