import React from 'react';
import aboutheader from '../Images/aboutheader.png';
import './About.css';


function About() {
  return (
    <div>
       <img className="header" src={aboutheader} alt="about"/>
       <a href="http://www.google.com">google</a>
    </div>
  );
}

export default About;
