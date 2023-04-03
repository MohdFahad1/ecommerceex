import React, { useState } from 'react';
import './About.css';

const About = () => {

  return (
      <div style={{paddingTop:"80px"}}>
     <div className="about-container">
      <div className="about-section about-section-1">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat erat sed tortor feugiat, sit amet faucibus mauris pulvinar. Suspendisse potenti. Donec nec eros faucibus, bibendum nunc vel, varius nulla. Donec sodales ex nec leo tincidunt, vel dignissim magna malesuada. Nullam accumsan quam eget odio pellentesque, vel dignissim magna malesuada.</p>
      </div>
      <div className="about-section about-section-2">
        <h2>Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat erat sed tortor feugiat, sit amet faucibus mauris pulvinar. Suspendisse potenti. Donec nec eros faucibus, bibendum nunc vel, varius nulla. Donec sodales ex nec leo tincidunt, vel dignissim magna malesuada. Nullam accumsan quam eget odio pellentesque, vel dignissim magna malesuada.</p>
      </div>
    </div>
    </div>
  )
}

export default About