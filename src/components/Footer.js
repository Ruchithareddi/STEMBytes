import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* About Section */}
      <div className="footer-about">
        <h3>STEM Bytes</h3>
        <p>
          STEM Bytes inspires creativity, curiosity, and a passion for STEM learning in young minds. We are committed to preparing children with essential skills for a brighter future.
        </p>
      </div>

      {/* Contact Section */}
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>San Francisco, CA 94542</p>
        <p><a href="tel:+1234567890">(951) 712-8365</a></p>
        <p><a href = "email">admin@stem-bytes.com</a></p>
        <Link to="/contact">
          <button className="contact-btn">Get in Touch</button>
        </Link>
      </div>

      {/* Useful Links */}
      <div className="footer-links">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/careers">Careers</a></li>

        </ul>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <h3>Connect with Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-bottom-links">
        <a href="/sitemap">Sitemap</a>
        <a href="/policy">Privacy Policy</a>
        <a href="/accessibility">Accessibility</a>
      </div>
    </div>
  </footer>
);

export default Footer;
