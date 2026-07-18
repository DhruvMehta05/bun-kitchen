import React, { useState, useEffect } from 'react';
import mascotAnim1 from '../assets/mascot_anim_1.png';
import mascotAnim2 from '../assets/mascot_anim_2.png';
import mascotAnim3 from '../assets/mascot_anim_3.png';

const frames = [
  { src: mascotAnim1, duration: 1800, alt: "BunBay Mascot holding a cheeseburger" },
  { src: mascotAnim2, duration: 600, alt: "BunBay Mascot biting the cheeseburger" },
  { src: mascotAnim3, duration: 1800, alt: "BunBay Mascot chewing and enjoying the cheeseburger" }
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
          <div className="hero-buttons">
            <a href="#offers" className="btn btn-primary btn-pulse">Monsoon Offers 🌧️</a>
            <a href="#menu" className="btn btn-outline">Explore Menu</a>
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
