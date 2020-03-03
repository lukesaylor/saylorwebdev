import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home.js';

import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Homeicon from './Images/homeicon.png'

 const particleoptions = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
};
 
 
function App() {
  return (
    <div>
      
     
    <body>
    
      <Router>
        <Navigation/> 
        <NavLink to="/"><img className="Homeicon" src={Homeicon} alt="home icon"/></NavLink>
        <Route path="/" exact strict>
            <Home/>
        </Route>
        <Route path="/About">
            <About/>
        </Route>
        <Route path="/Portfolio">
            <Portfolio/>
        </Route>
        <Route path="/Skills">
            <Skills />
        </Route>
        <Route path="/Contact">
            <Contact />
        </Route>
      </Router>
    </body>
     
      <Particles params={particleoptions} className="particles"/>
    </div>
  );
}

export default App;
