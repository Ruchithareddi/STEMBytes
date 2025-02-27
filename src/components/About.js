import React from 'react';
import './About.css';
import about1 from '../Assets/about1.png';
import about2 from '../Assets/about2.png';
import about3 from '../Assets/about3.png'; // Import the third image

const About = () => (
  <div className="about-container">
    <section className="about-section">
      <div className="about-content">
        <h5>Little More About Us</h5>
        <h4>Grade Level: K-12th</h4>
        <h2>Your Kids is Our Next Gen Future</h2>
        <p>
          At STEM Bytes, we believe in nurturing young minds and empowering the next generation of innovators. Our mission is to inspire creativity, ignite curiosity, and equip children with essential skills for the future. Through engaging activities and hands-on learning, we foster a love for STEM (Science, Technology, Engineering, and Math) that lasts a lifetime.
        </p>
        <button className="about-btn">READ MORE</button>
      </div>
      <div className="about-image">
        <img src={about1} alt="Kids" />
      </div>
    </section>

    <section className="about-section">
  {/* Remove the dedicated about-image div (if you're not using about2 anymore) */}
  <div className="about-image">
    <img src={about2} alt="Smiling Kids" />
  </div> 

  <div className="about-content">
    <h5>Little More About Us</h5>
    <h2>Quick, Smart & Great Solutions</h2>
    <p>
      Education is not just about learning—it’s about creating opportunities.
      At STEM Bytes, we provide tailored, interactive programs designed to 
      make learning fun, relevant, and impactful. From robotics to coding, 
      we ensure that every child is ready to tackle real-world challenges 
      with confidence and creativity.
    </p>
    <button className="about-btn red-btn">READ MORE</button>

    {/* Place the second image in a 'footer-image-container' (or rename at will) */}
    <div className="footer-image-container">
      <img className="footer-image" src={about3} alt="Happy Kids" />
    </div>
  </div>
</section>


    {/* Adding the third image as a visually connected footer */}
  </div>
);

export default About;
