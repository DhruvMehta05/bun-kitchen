import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>The Best <span className="highlight">Burgers</span><br/>In Town</h1>
          <p>Craving something juicy? Our premium handcrafted burgers are made with fresh ingredients and a whole lot of love. Explore our mouth-watering menu and discover your new favorite.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#menu" className="btn btn-primary">Explore Menu</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-badge">
            100%<br/>Fresh
          </div>
          <div className="mascot-animator" aria-label="BunBay Mascot eating a burger animation"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
