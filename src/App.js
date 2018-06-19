import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Pokemon from './components/Pokemon/Pokemon';

import axios from 'axios';
console.log(axios);
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
