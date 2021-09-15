import React, {useState} from 'react';
import '../Components/Eventdetail.css';
import cross from '../Img/close.svg';

function Eventdetail({evenement, onCloseModal}) {

const [datas, setDatas] = useState([]);
  const [donnees, setDonnees] = useState("");
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



    
    return (
    <div className="container">
        <div className="overlay"></div>
        <div className="Container-Modal">
            <button className="btn-close" onClick={onCloseModal}><img className="cross" src={cross} height="10px" alt=""/>
             Fermer </button>
            <h1> Détail de l'événement </h1>
            <div className="imgDetail" style={{ backgroundImage: `url(${evenement.cover_url})`}}> 
            </div>
                    <h3> {evenement.title}</h3>
                    {/* <h1 key={"title"+eventdata.evenement.id}>{eventdata.evenement.fields.title}</h1> */}
                    <p dangerouslySetInnerHTML={{ __html: evenement.date_description}}></p>
                    <p dangerouslySetInnerHTML={{ __html: evenement.description }}className="descrip"></p>
                    <p> Adresse : {evenement.address_name} {evenement.address_street} <br/> {evenement.address_zipcode} {evenement.address_city}</p>
                    <p> Prix : {evenement.price_type}</p>
                    <p> Map : {evenement.transport}</p>
                    <p> Contact : {evenement.contact_mail}, {evenement.contact_facebook} </p>
                    <button >Ajouter en favoris</button>
                    <button > Retirer des favoris</button>
        </div>
    </div>  
    )
}

export default Eventdetail;