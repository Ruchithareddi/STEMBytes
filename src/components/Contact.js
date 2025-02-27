import React from 'react';
import './Contact.css'; 
import contactImage from '../Assets/contact.png';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-form">
      <h2>Drop us your thoughts :)</h2>
      <form>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter a valid email address" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input type="text" id="phone" placeholder="Enter your valid Number" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    <div className="contact-image">
    <img src={contactImage} alt="Contact Illustration" />

    </div>
  </div>
);
export default Contact;
