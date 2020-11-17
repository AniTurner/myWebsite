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
          <div className='home-group'>
            <img className="icon-home" src="icons/homeIcon.png" alt="home logo" />
            <img className="image-top" src="greenIcons/homeIconGreen.png" alt="home logo" />
          </div>
          </Link>
          <Link to="/aboutme" className="link">
          <div className='profile-group'>
            <img className="icon-profile" src="icons/aboutMeIcon.png" alt="home logo"></img>
            <img className="image-top" src="greenIcons/aboutMeIconGreen.png" alt="home logo"></img>
          </div>
          </Link>
          <Link rel="skills" to="/skills" className="link">
          <div className='skills-group'>
            <img className="icon-gear" src="icons/skillsIcon.png" alt="home logo"></img>
            <img className="image-top" src="greenIcons/skillsIconGreen.png" alt="home logo"></img>
          </div>
          </Link>
          <Link rel="gallery" to="/mywork" className="link">
          <div className='myWork-group'>
            <img className="icon-eye" src="icons/myWorkIcon.png" alt="home logo"></img>
            <img className="image-top" src="greenIcons/myWorkIconGreen.png" alt="home logo"></img>
          </div>
          </Link>
          <Link rel="contact"  to="/contactme" className="link">
            <div className='contact-group'>
            <img className="icon-mail" src="icons/contactIcon.png" alt="home logo"></img>
            <img className="image-top" src="greenIcons/contactIconGreen.png" alt="home logo"></img>
            </div>
          </Link>
        </nav>
        <div>
          <a className='github-group' href="https://github.com/AniTurner" rel="noopener noreferrer" target="_blank">
            <img className="github" src="icons/githubIcon.png" alt="home logo"></img>
            <img className="g-image-top" src="greenIcons/githubIconColor.png" alt="home logo"></img>
          </a>
          <a className='linked-group' href="https://www.linkedin.com/in/ani-turner/" rel="noopener noreferrer" target="_blank">
            <img className="linkedin" src="icons/linkedinIcon.png" alt="home logo"></img>
            <img className="l-image-top" src="greenIcons/linkedinIconColor.png" alt="home logo"></img>
          </a>
          <a className='twitter-group' href="https://twitter.com/turnerani1" rel="noopener noreferrer" target="_blank">
            <img className="twitter" src="icons/twitterIcon.png" alt="home logo"></img>
            <img className="t-image-top" src="greenIcons/twitterIconColor.png" alt="home logo"></img>
          </a>
        </div>
      </div>
  );
}