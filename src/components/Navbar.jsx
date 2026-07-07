import React from 'react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#home" id="nav-logo-link">
            <img src={logoImg} alt="BUNBAY Logo" style={{ height: '60px' }} />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
