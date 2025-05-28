import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default navbar;
