import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './styles/navbar.css';

const NavBar = () => (
  <>
    <div className="navbar">
      <div className="logo-section">
        <img src={logo} alt="" className="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/Rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/Missions">Missions</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
    <hr style={{ margin: '0 30px 0 30px' }} />
  </>
);

export default NavBar;
