import React from 'react';
import './Nav.css'; // Use a separate CSS file for the nav-specific styles
import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      
      { /* logo */ }
      <a href='/' >
        <img src="/Logo.svg" alt="Little Lemon Logo" className="logo" />
        </a>
      
        { /* mobile */ }
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        { /* desktop */ }
      
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="booking">RESERVATIONS</a></li>
          <li><a href="#order-online">ORDER ONLINE</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
       
        
      </nav>

  );
}

export default Nav;
