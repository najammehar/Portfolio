// App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, About, Skills, Projects, Contact, Hero } from './Components';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];

  return (
    <Router>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={heroRef}>
        <Hero contactRef={contactRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Router>
  );
};

export default App;