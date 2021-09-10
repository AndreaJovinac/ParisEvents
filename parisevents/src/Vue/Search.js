import React, {useEffect, useState} from 'react';
import '../Vue/search.css';
import Eventscomponents from '../Components/Eventscomponents';
import Eventsdetail from '../Components/Eventdetail';
import Navbar from '../Components/Navbar';

function Search() {
  const [datas, setDatas] = useState([]);
  const [donnees, setDonnees] = useState("");
  const Lienapi = "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=";

/* Recuperer les données du input */
  const donneesinput = (e) => {
    let value = e.target.value;
    setDonnees(value);
  }

  console.log(donnees);
  
  useEffect(() => {
    fetch(Lienapi+donnees)
        .then(response => response.json())
        .then(result => setDatas(result.records))
}, [donnees]); // fin useEffect


console.log(datas);

    return (
      <div className="App">
          <section className="bandeau">
            <h1> Rechercher</h1>
            <label for="name">Tapez votre mot de recherche</label>
              <input type="text" id="name"  placeholder="Tapez votre mot" onInput={donneesinput}/>
              <button>Rechercher</button>
          </section>

          <div className="search-result-container">
              { datas && datas.map((event) => (
                  <Eventscomponents key={ event.record.id } id={ event.record.id } evenement={ event.record.fields } />
              ))}

          </div>
      </div>
  );
}

export default Search;