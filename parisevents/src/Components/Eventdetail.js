import React, {useState} from 'react';
import '../Components/Eventdetail.css';


function Eventdetail({toto, onCloseModal}) {
    return (
        <div className="Container">
            <div className="imgFond" style={{ backgroundImage: `url(${toto.cover_url})`}}> 
                  </div>
                  <button onClick={onCloseModal} ></button>
                    <h3> {toto.title}</h3>
                    <p> {toto.date_description}</p>
                    <p className="descrip"> {toto.description} </p>
                    <p> adresse : {toto.address_name} {toto.address_street} {toto.address_zipcode} {toto.address_city}</p>
                    <p> prix : {toto.price_type}</p>
                    <p> map : {toto.transport}</p>
                    <p> contact : {toto.contact_mail}, {toto.contact_facebook} </p>
                    <button >Sauvegarder</button>
                    <button > Retirer des favoris</button>
                    
        </div>
    )
}
export default Eventdetail;