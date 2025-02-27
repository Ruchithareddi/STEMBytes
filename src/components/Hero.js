import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>STEM Bytes</h1>
        <p>Never Stop Learning</p>
        <Link to="/about">
          <button>READ MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
