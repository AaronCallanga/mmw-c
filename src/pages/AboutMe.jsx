import React from 'react';
import Profile from '../assets/Profile.jpg'; // Ensure this image path is correct
import '../App.css';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className="about-me-cont" ref={ref}>
      <img src={Profile} className="prof-img" alt="Profile" />
      <div>
        <p>Description here</p>
      </div>
    </div>
  );
});

export default AboutMe;
