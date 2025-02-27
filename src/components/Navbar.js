import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGears } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FontAwesomeIcon 
          icon={faGears} 
          rotation={90} 
          size="2xl" // Updated size property
          style={{ color: "#7fa851" }} 
        />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/careers">Careers</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
