import React, {useState} from 'react';
import '../Components/Eventdetail.css';


function Eventdetail({evenement, onCloseModal}) {
    return (
        <div className="Container">
            <div className="imgFond" style={{ backgroundImage: `url(${evenement.cover_url})`}}> 
                  </div>
                  <button onClick={onCloseModal} >X Fermer</button>
                    <h3> {evenement.title}</h3>
                    <p> {evenement.date_description}</p>
                    <p className="descrip"> {evenement.description} </p>
                    <p> adresse : {evenement.address_name} {evenement.address_street} {evenement.address_zipcode} {evenement.address_city}</p>
                    <p> prix : {evenement.price_type}</p>
                    <p> map : {evenement.transport}</p>
                    <p> contact : {evenement.contact_mail}, {evenement.contact_facebook} </p>
                    <button >Sauvegarder</button>
                    <button > Retirer des favoris</button>
                    
        </div>
    )
}
export default Eventdetail;