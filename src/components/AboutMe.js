import React from 'react';
import '../styles.css';

export default function AboutMe() {
  return (
    <div className="aboutme-container"> 
      <span className="top-tags"> &lt;body&gt;</span>
      <span className="top-h1-tags">&lt;h1&gt;</span>
      <div className="text-zone">
        <h1 aria-label="About Me" className="aboutme-text">About Me</h1>
        <span className="bottom-h1-tags">&lt;/h1&gt;</span>
        <h2 className="aboutme-h2">I am a detail oriented, responsible, determined full stack web developer with a passion for solving tech and world problems through innovation. I bring strong interdisciplinary skills and a desire to create meaningful products that have an impact on people’s lives. </h2>
      </div>
      <img className="aboutme-pic" src="icons/me.jpeg" alt="Developer" />
      <span className="bottom-tags">&lt;/body&gt;</span>
      <span className="html-tags">&lt;/html&gt;</span>
    </div>
  );
}