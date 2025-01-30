import React from 'react';
import Profile from '../assets/Profile.jpg'; // Ensure this image path is correct
import '../App.css';

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className="about-me-cont" ref={ref}>
      <img src={Profile} className="prof-img" alt="Profile" />
      <div className='about-me-p'>
        <p className='m-0 p-1 about-me-n fs-1 home-h2'><b>Aaron Dave D. Callanga</b></p>
        <p className='m-0 p-1 '><b>BSCS 1-1</b></p>
        <p className='m-0 p-1 mb-2'><b>GEED 004 1ST2425</b></p>
        <p className='m-0 p-1'>This website is my E-Portfolio namely Beyond The Walls dedicated for our performance task requirement :D</p>
        <p className='text-white-50 about-me-d'>January 2025</p>
      </div>
    </div>
  );
});

export default AboutMe;
