import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav
      className='nav-bar'
    >
      <NavLink
        className='button'
        aria-current='page' 
        to='/strains'
      >Strains
      </NavLink>
      <NavLink 
        className='button'
        aria-current='page' 
        to='/experiences'
      >Experiences
      </NavLink>
    </nav>
  );
}