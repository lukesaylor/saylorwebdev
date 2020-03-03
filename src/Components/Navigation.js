import React from 'react';
import './Navigation.css';
import about from '../Images/about.png';
import skills from '../Images/skills.png';
import contact from '../Images/contact.png';
import portfolio from '../Images/portfolio.png';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navbar">
        <NavLink to="/about"><img className="hvr-float" src={about} alt="about"/></NavLink>
        <NavLink to="/portfolio"><img className="hvr-float" src={portfolio} alt="portfolio"/></NavLink>
        <NavLink to="/skills"><img className="hvr-float" src={skills} alt="skills"/></NavLink>
        <NavLink to="/contact"><img className="hvr-float" src={contact} alt="contact"/></NavLink>
    </div>
  );
}

export default Navigation;

