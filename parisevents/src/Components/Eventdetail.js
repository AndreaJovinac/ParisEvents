import React, {useState} from 'react';
import '../Components/Eventdetail.css';
import cross from '../Img/close.svg';


function Eventdetail({evenement, onCloseModal}) {
    return (
    <div className="container">
        <div className="overlay"></div>
        <div className="Container-Modal">
            <button className="btn-close" onClick={onCloseModal}><img className="cross" src={cross} height="10px" alt=""/>
             Fermer </button>
            <div className="imgDetail" style={{ backgroundImage: `url(${evenement.cover_url})`}}> 
            </div>
                    <h3> {evenement.title}</h3>
                    <p> {evenement.date_description}</p>
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