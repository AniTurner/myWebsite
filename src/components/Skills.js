import React from 'react';
import '../styles.css';

export default function Skills() {
  return (
    <div className="skills-container">
      <span className="top-tags"> &lt;body&gt;</span>
      <span className="top-h1-tags">&lt;h1&gt;</span>
      <div className="text-zone">
        <h1 aria-label="About Me" className="skills-text">Skills <span className="skills-text">&</span> Experience</h1>
        <span className="bottom-h1-tags">&lt;/h1&gt;</span>
        <h2 className="aboutme-h2">The main area of my expertise is front end development (client side of the web). </h2>
        <h2 className="aboutme-h2">HTML, CSS, JS (TypeScript), building small and medium web apps with React, custom plugins, features, animations, and coding interactive layouts. </h2>
        <h2 className="aboutme-h2">I have also full-stack developer experience with Node, Relational Databases, Express, Fastify, and other </h2>
        <p className="lastP">Visit my 
          <a className="aT" href="https://www.linkedin.com/in/ani-turner/">LinkedIn</a>
          profile for more details or just
          <a className="aT" href="http://localhost:3000/contactme">contact</a>
          me.
        </p>
      </div>
      <span className="bottom-tags">&lt;/body&gt;</span>
      <span className="html-tags">&lt;/html&gt;</span>
    </div>
  );
}