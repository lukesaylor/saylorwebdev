import React from 'react';
import portfolioheader from '../Images/portfolioheader.png';
import './Portfolio.css';


function Portfolio() {
  return (
    <div >
        <img className="header" src={portfolioheader} alt="portfolio"/>
    </div>
  );
}

export default Portfolio;
