import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Pokemon from './components/Pokemon/Pokemon';

import axios from 'axios';


// Endpoint para obtener un Pokemon
axios.get("https://pokeapi.co/api/v2/pokemon/spearow/")
.then(function (response) {
  // Jala la imagen
  console.log(response.data.sprites.front_shiny
  );
})
.catch(function (error) {
  console.log(error);
});



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
          <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
