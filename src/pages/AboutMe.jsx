import React from 'react';
import Profile from '../assets/Profile.jpg'; // Ensure this image path is correct
import '../App.css';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className="about-me-cont" ref={ref}>
      <img src={Profile} className="prof-img" alt="Profile" />
      <div>
        <p>Aaron Dave D. Callanga</p>
        <p>BSCS 1-1</p>
        <p>GEED 004 1ST2425</p>
        <p>This website is my E-Portfolio namely Beyond The Walls for our performance task requirement</p>
        <p>January 2025</p>
      </div>
    </div>
  );
});

export default AboutMe;
