import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Accueil from './Vue/Accueil';
import Navbar from './Components/Navbar';
import Search from './Vue/Search';
import Events from './Vue/Events';
import Favoris from './Vue/Favoris';
import Details from './Vue/Details'; 

import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

function App () {
  
    /*useEffect(() =>  {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setData(result.data);
      };
      fetchData();
    })*/
  return (
    <div className="App">
      <Router>
      <Navbar />
          <Switch>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Favoris">
              <Favoris />
            </Route>
            <Route path="/Events">
              <Events />
            </Route>
            <Route path="/Details">
              <Details />
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
      </Router>
      <Fragment>
         
      </Fragment>
    </div>
  );
}

export default App;

