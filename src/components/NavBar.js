import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
     <NavLink
       to="/"
     >Home</NavLink>
     <NavLink
       to="/movies"
     >Movies</NavLink>
     <NavLink
       to="/actors"
     >Actors</NavLink>
     <NavLink
       to="/directors"
     >Directors</NavLink>
   </div>
  );
};

export default NavBar;
