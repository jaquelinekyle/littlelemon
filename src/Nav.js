import React from 'react';
import './Nav.css'; // Use a separate CSS file for the nav-specific styles

function Nav() {
  return (
    <header className="nav-header">
      <div className="logo-container">
        <img src="/Logo.svg" alt="Little Lemon Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#reservations">RESERVATIONS</a></li>
          <li><a href="#order-online">ORDER ONLINE</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
