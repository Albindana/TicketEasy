import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          TicketEasy
        </Link>
        <div className="navbar-links">
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 