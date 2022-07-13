import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className = 'hero-top'>
        <img src= '/public/img-8.PNG' alt='UBA-Logo'></img>
      </div>
      <h1>Insert Welcome Title Here.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
      <div className='hero-gallery'>
      </div>
      <div className= 'hero-bottom'>
        <p className= 'hero-bottom-txt'>Want to input new data? Click the button</p>
        <Button
          className='form-btn'
          buttonStyle='btn--outline'
        >
          Fill the Form
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;