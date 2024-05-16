import React from 'react'
import './Hero.css'
import profile from '../../assets/profile-img.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="profile" className="profile" />
      <h1>
        <span>I'm Aakash,</span> Frontend developer based in INDIA
      </h1>
      <p>
        I am a Frontend developer from Tamil Nadu, India. "Fresh Frontend
        Developer with a knack for clean code and eye-catching designs. Ready to
        impress with my portfolio showcasing creativity and dedication."
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero
