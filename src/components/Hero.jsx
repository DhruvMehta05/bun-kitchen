import React, { useState, useEffect } from 'react';
import mascotHold from '../assets/mascot_hold.png';
import mascotBite from '../assets/mascot_bite.png';
import mascotChew from '../assets/mascot_chew.png';
import mascotGulp from '../assets/mascot_gulp.png';
import mascotLick from '../assets/mascot_lick.png';
import mascotBurp from '../assets/mascot_burp.png';

const frames = [
  { src: mascotHold, duration: 1800, alt: "BunBay Mascot holding a burger" },
  { src: mascotBite, duration: 400, alt: "BunBay Mascot taking a bite of the burger" },
  { src: mascotChew, duration: 1400, alt: "BunBay Mascot chewing the burger" },
  { src: mascotGulp, duration: 500, alt: "BunBay Mascot gulping it down" },
  { src: mascotLick, duration: 1200, alt: "BunBay Mascot savoring the taste" },
  { src: mascotBurp, duration: 1800, alt: "BunBay Mascot burping happily after eating" }
];

const Hero = () => {
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);

  useEffect(() => {
    const nextFrame = () => {
      setCurrentFrameIdx((prev) => (prev + 1) % frames.length);
    };

    const timer = setTimeout(nextFrame, frames[currentFrameIdx].duration);
    return () => clearTimeout(timer);
  }, [currentFrameIdx]);

  const currentFrame = frames[currentFrameIdx];

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
          <div className="mascot-frame-wrapper">
            <img 
              src={currentFrame.src} 
              alt={currentFrame.alt} 
              className="mascot-frame-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
