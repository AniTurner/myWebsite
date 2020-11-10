import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

export default function Navbar() {
  return (
      <div className="navbar-container">
        <Link className="logo" to="/" >
          <img src="icons/mylogo.png" alt="Developer Logo" />
        </Link>
        <nav className="en">
          <Link to="/" className="link">
            <img className="icon-home" src="icons/homeIcon.png" alt="home logo" />
          </Link>
          <Link to="/aboutme" className="link">
            <img className="icon-profile" src="icons/aboutMeIcon.png" alt="home logo"></img>
          </Link>
          <Link rel="skills" to="/skills" className="link">
            <img className="icon-gear" src="icons/skillsIcon.png" alt="home logo"></img>
          </Link>
          <Link rel="gallery" to="/mywork" className="link">
            <img className="icon-eye" src="icons/myWorkIcon.png" alt="home logo"></img>
          </Link>
          <Link rel="contact"  to="/contactme" className="link">
            <img className="icon-mail" src="icons/contactIcon.png" alt="home logo"></img>
          </Link>
        </nav>
        <div>
          <a href="https://github.com/AniTurner" rel="noopener noreferrer" target="_blank">
            <img className="github" src="icons/githubIcon.png" alt="home logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/ani-turner/" rel="noopener noreferrer" target="_blank">
            <img className="linkedin" src="icons/linkedinIcon.png" alt="home logo"></img>
          </a>
          <a href="https://twitter.com/turnerani1" rel="noopener noreferrer" target="_blank">
            <img className="twitter" src="icons/twitterIcon.png" alt="home logo"></img>
          </a>
        </div>
      </div>
  );
}