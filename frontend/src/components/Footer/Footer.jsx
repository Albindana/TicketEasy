import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TicketEasy</h3>
          <p>Your all-in-one platform for event planning and ticketing.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">ig</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/api">API Documentation</Link></li>
            <li><Link to="/developers">Developer Portal</Link></li>
            <li><Link to="/status">System Status</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/gdpr">GDPR</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TicketEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 