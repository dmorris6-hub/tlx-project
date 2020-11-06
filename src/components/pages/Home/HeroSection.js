import React from 'react';
import '../../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        
      <img src='/images/logo-grunge-orbital.png' alt='TLX' className="home-logo"/>
      <h1>TwistedLogix</h1>
      <div className='layer'/>
    </div>
  );
}

export default HeroSection;