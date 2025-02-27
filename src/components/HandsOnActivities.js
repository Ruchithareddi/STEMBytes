import React from 'react';
import './HandsOnActivities.css';
import projectVideo from '../Assets/project1.mov'; // Video file
import photo1 from '../Assets/project1a.png'; // Photo 1
import photo2 from '../Assets/project1b.png'; // Photo 2
import comingSoonImage from '../Assets/comingsoon.png'; // Coming Soon image

const HandsOnActivities = () => (
  <section className="hands-on-activities">
    <h1>Hands-On Activities</h1>
    <p>
      Dive into exciting STEM projects! Explore videos, pictures, and tutorials showcasing creativity and innovation.
    </p>

    {/* Video Section */}
    <div className="activities-gallery">
      <h2>Project Spotlight: Circuits in Action</h2>
      <video width="640" height="360" controls>
        <source src={projectVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Discover the magic of circuits as we light up a bulb and bring fundamental electronics to life!</p>

      {/* Photo Gallery Section */}
      <div className="photo-gallery">
        <h3>More Project Highlights</h3>
        <div className="photos">
          <img src={photo1} alt="Activity 1" />
          <img src={photo2} alt="Activity 2" />
        </div>
      </div>
    </div>

    {/* Coming Soon Section */}
    <div className="coming-soon-section">
      <h3>Stay Tuned for More Activities</h3>
      <img src={comingSoonImage} alt="Coming Soon" className="coming-soon-image" />
    </div>
  </section>
);

export default HandsOnActivities;
