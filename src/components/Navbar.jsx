import React from 'react';
import logoImg from '../assets/logo.png';
import { useCart } from '../context/CartContext';

const Navbar = ({ onCartClick }) => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#home" id="nav-logo-link">
            <img src={logoImg} alt="BUNBAY Logo" style={{ height: '60px' }} />
          </a>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <button className="navbar-cart-btn" onClick={onCartClick} aria-label="Open cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 5.04 7.997-.4 1.12-5.6H3.05zm3.178 7 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Zm4.018 0 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Z"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
