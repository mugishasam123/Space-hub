import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './styles/navbar.css';

const NavBar = () => (
  <>
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/missions">Missions</NavLink>
    </div>
  </>
);
export default NavBar;
