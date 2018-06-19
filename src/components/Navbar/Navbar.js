import React, { Component } from 'react';
import './Navbar.css';

import logo from './logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
            <img src={ logo } alt="" />
            <input type="text"/>
      </div>
    )
  }
}

export default Navbar;