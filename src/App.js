import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Programs from './components/Programs.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import HandsOnActivities from './components/HandsOnActivities.js';
import Careers from './components/Careers.js'; // Import Careers component
import Footer from './components/Footer.js';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Hero />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hands-on-activities" element={<HandsOnActivities />} />
      <Route path="/careers" element={<Careers />} /> {/* Add Careers route */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
