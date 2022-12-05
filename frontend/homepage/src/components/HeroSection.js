import React from 'react';
import '../App.css';
import { BigB } from './BigB';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className = 'hero-top'>
      
      <img className = 'herologo-1' src= '../images/vit logo.jpg' alt='VIT Logo'></img>
        <img className = 'herologo-2' src= '../images/img-8.PNG' alt='UBA-Logo'></img>
        <img className = 'herologo-3' src= '../images/img-1.jpg' alt='UBA'></img>
      </div>
      <h1>Insert Welcome Title Here.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='hero-btns'>
        <BigB
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </BigB>
      </div>
      <div className='hero-gallery'>
      </div>
      <div className= 'hero-bottom'>
        <p className= 'hero-bottom-txt'>Want to input new data? Click the button</p>
        <div className='form-btn'>
        <BigB 
          className='btns'
          buttonStyle='btn--outline'
        >
          Fill the Form
        </BigB>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;