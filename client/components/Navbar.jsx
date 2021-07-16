import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

// our navbar which links to our three pages
class Navbar extends Component  {
  render() {
    return (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li ><NavLink to='/login'>Login</NavLink></li>
      <li ><NavLink to='/create'>Create Account</NavLink></li>
    </ul>
  </nav>
    )
  }
};

export default Navbar;