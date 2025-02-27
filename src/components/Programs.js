import React from 'react';
import './Programs.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Programs = () => (
  <section id="programs" className="programs">
    <h2>Our Programs</h2>
    <div className="program-list">
      <div className="program-card">
        <h3>Artificial Intelligence</h3>
        <p>Build Smart AI for Real-World Tasks!</p>
      </div>
      <div className="program-card">
        <h3>Programming</h3>
        <p>Learn programming languages like Python and JavaScript.</p>
      </div>
      <div className="program-card">
        <h3>Robotics</h3>
        <p>Build & Code a Robot!</p>
      </div>
      <div className="program-card">
        <h3>Electronics</h3>
        <p>Create Smart Gadgets with Circuits!</p>
      </div>
      <div className="program-card">
        <h3>Workshops</h3>
        <p>Hands-On STEM Labs to strength the logical thinking and skills!</p>
      </div>
      <div className="program-card">
        <h3>Competitions</h3>
        <p>Design a Tech Product with the Season Themes.</p>
      </div>
    </div>

    {/* Add Explore Hands-On Activities Section */}
    <div className="explore-section">
      <h3>Explore Hands-On Activities</h3>
      <p>
        Embark on thrilling STEM activities that spark imagination, nurture innovation, and empower you to tackle challenges with creativity and confidence!
      </p>
      <Link to="/hands-on-activities"> {/* Link to Hands-On Activities page */}
        <button className="explore-btn">Learn More</button>
      </Link>
    </div>
  </section>
);

export default Programs;
