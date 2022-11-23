import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>INTEL ROBOTICS</h1>
      <p>De bedste robotter på markedet!</p>
    </div>
  );
}

export default HeroSection;
