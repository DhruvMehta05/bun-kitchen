import React from 'react';
import heroImg from '../assets/burger_actual1.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>The Best <span className="highlight">Buns</span><br/>In Town</h1>
          <p>Craving something juicy? Our premium handcrafted burgers are made with fresh ingredients and a whole lot of love. Explore our mouth-watering menu and discover your new favorite.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#menu" className="btn btn-primary">Explore Menu</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-badge">
            100%<br/>Fresh
          </div>
          <img src={heroImg} alt="Premium Classic Burger" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
