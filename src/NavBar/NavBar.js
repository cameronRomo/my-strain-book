import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav
    >
      <NavLink 
        aria-current='page' 
        to='/strains'
      >Strains
      </NavLink>
      <NavLink 
        aria-current='page' 
        to='/experiences'
      >Experiences
      </NavLink>
    </nav>
  );
}