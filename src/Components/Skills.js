import React from 'react';
import './Skills.css';
import htmllogo from '../Images/html5-plain.svg';
import csslogo from '../Images/css3-plain.svg';
import jslogo from '../Images/javascript-plain.svg';
import reactlogo from '../Images/react-original.svg';
import bootstraplogo from '../Images/bootstrap-plain.svg';
import photologo from '../Images/photoshop-plain.svg';
import illustratorlogo from '../Images/illustrator-plain.svg';
import nodelogo from '../Images/nodejs-plain.svg';
import skillsheader from '../Images/skillsheader.png';



function Skills() {
  return (
    <body>
    <img className="header" src={skillsheader} alt="skills"/>
    <div className="cards">
      <div className="card">
          <img src={htmllogo} alt="html"/>
          <p>HTML5</p>
      </div>
      <div className="card">
          <img src={csslogo} alt="css"/>
          <p>CSS3</p>
      </div>
      <div className="card">
      <img src={jslogo} alt="javascript"/>
          <p>Javascript</p>
      </div>
      <div className="card">
          <img src={reactlogo} alt="react"/>  
          <p>React</p>
      </div>
      <div className="card">
          <img src={bootstraplogo} alt="bootstrap"/>
          <p>Bootstrap</p>
      </div>
      <div className="card">
          <img src={photologo} alt="photoshop"/>
          <p>Adobe Photoshop</p>
      </div>
      <div className="card">
          <img src={illustratorlogo} alt="illustrator"/>
          <p>Adobe Illustrator</p>
      </div>
      <div className="card">
          <img src={nodelogo} alt="nodejs"/>
          <p>NodeJs</p>
      </div>
    </div>
    </body>
  );
}

export default Skills;
