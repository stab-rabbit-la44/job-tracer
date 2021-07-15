import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => (

  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/Doges'>Doges</NavLink></li>
    </ul>
  </nav>
  
);

export default Navbar;