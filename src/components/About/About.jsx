import React from 'react';
import BaseInfo from './BaseInfo';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import AboutMe from './AboutMe';
import './About.scss';

const About = () => (
  <div className="about">
      <BaseInfo />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <AboutMe />
  </div>
);

export { About };
