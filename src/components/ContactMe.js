import React from 'react';
import '../styles.css';

export default function ContactMe() {
      return (
      <div className="contact-container">
      <div className="skills-container">
      <span className="top-tags"> &lt;body&gt;</span>
      <span className="top-h1-tags">&lt;h1&gt;</span>
      <div className="text-zone">
        <h1 aria-label="About Me" className="skills-text">Contact me</h1>
        <span className="bottom-h1-tags">&lt;/h1&gt;</span>
        <p className="lastP">I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
      </div>
      <span className="bottom-tags">&lt;/body&gt;</span>
      <span className="html-tags">&lt;/html&gt;</span>
    </div>

      </div>
    );
}