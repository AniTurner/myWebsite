import React from 'react';
import ReactRain from 'react-rain-animation';
import '../styles.css';
import 'react-rain-animation/lib/style.css';
//import Hexagons from './Hexagons';


export default function Home() {
  return (
    <div className="main-container">
    <ReactRain
      numDrops="300"
    />
      <span className="top-tags"> &lt;body&gt;</span>
      <span className="top-h1-tags">&lt;h1&gt;</span>
      <div className="text-zone">
        <h1 aria-label="Hi," className="h1-text">Hi,</h1>
        <h1 aria-label="I am Ani," className="h1-text" id="second-text">I am Ani,</h1>
        <h1 aria-label="software engineer." className="h1-text" id="third-text">web developer.</h1>
        <span className="bottom-h1-tags">&lt;/h1&gt;</span>
        <h2>Sofware Engineer / Front End Developer</h2>
        <a rel="contact" href="contact" className="contact-me-button">Contact Me!</a>
      </div>
      {/* <Hexagons /> */}
      <span className="bottom-tags">&lt;/body&gt;</span>
      <span className="html-tags">&lt;/html&gt;</span>
    </div>
  );
}
