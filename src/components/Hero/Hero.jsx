import React from 'react';
import './Hero.css';
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero__text'>
        <h1>We provide high quality education to the world</h1>
        <p>
            Our curriculum is designed to offer the lattest information in line with the real world 
            This enables our graduates to easily find a job and and adapt on their job for they are job ready 
            upon graduation.
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero
