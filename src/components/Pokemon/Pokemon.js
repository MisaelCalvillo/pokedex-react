import React, { Component } from 'react';
import './Pokemon.css';
import pokemonImagePrueba from './01.jpg';

class Pokemon extends Component {


  render() {
    return (
      <div className='pokemon'>
        <img src={pokemonImagePrueba} alt="Imagen del pokemon"/>
        <h2>Nombre del pokemon</h2>
        <div className='details'>
          <div className='id'></div>
          <div className='types'>
              <span className='type type-fighting'>Fighting</span>
              <span className='type type-bug'>Bug</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;