import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-ticket-alt"></i>
          TicketEasy
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/events" className="nav-link">
            <i className="fas fa-calendar-alt"></i>
            Events
          </Link>
          <Link to="/pricing" className="nav-link">
            <i className="fas fa-tags"></i>
            Pricing
          </Link>
          <Link to="/contact" className="nav-link">
            <i className="fas fa-envelope"></i>
            Contact
          </Link>
          <div className="auth-links">
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt"></i>
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              <i className="fas fa-user-plus"></i>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 