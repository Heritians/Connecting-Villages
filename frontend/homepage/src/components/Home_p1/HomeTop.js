import React from 'react';
import '../../App.css';
import { Button } from './Navbar/Login/Button';
import './HomeTop.css';

function HomeTop() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className = 'hero-top'>
      
      <img className = 'herologo-1' src= './images/vit logo.jpg' alt='VIT Logo'></img>
        <img className = 'herologo-2' src= './images/img-8.PNG' alt='UBA-Logo'></img>
        <img className = 'herologo-3' src= './images/img-1.jpg' alt='UBA'></img>
      </div>
      <h1>Data Collection and Analysis</h1>
      <p>The website that digitalizes the ‘Unnat Bharat Abhiyan Baseline Household Survey Form’. We also intend to analyze the data entered in the form from the villages and present it graphically for easy comprehension. With this data, it will be easier for the concerned authorities to identify which areas need immediate help</p>
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
        <div className='form-btn'>
        <Button 
          className='btns'
          buttonStyle='btn--outline'
        >
          Fill the Form
        </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;