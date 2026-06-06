import React, { useState } from 'react';
import makhanImg from '../assets/hero_actual.jpg';
import snapImg from '../assets/burger_actual2.jpg';
import cheeseRushImg from '../assets/burger_actual3.jpg';
import judwaImg from '../assets/double_crunch_new.jpg';
import menuFullImg from '../assets/menu_full.png';

const MenuHighlights = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      id: 1,
      name: "Makhan Shakhan Burger",
      description:
        "Crispy patty loaded with rich, buttery makhani sauce, fresh crunch, and creamy mayo—smooth, indulgent, and satisfying.",
      price: "₹159",
      image: makhanImg,
    },
    {
      id: 2,
      name: "Snap and Sizzle",
      description:
        "Golden crispy veggie patty layered with fresh greens, crunchy cabbage, and pickled cucumber, finished with a bold Dijon mustard and creamy mayo blend.",
      price: "₹139",
      image: snapImg,
    },
    {
      id: 3,
      name: "Cheese Rush Tikki",
      description:
        "Crispy aloo tikki layered with rich melted cheese, fresh veggies, and creamy sauces—comfort food with a cheesy twist.",
      price: "₹79",
      image: cheeseRushImg,
    },
    {
      id: 4,
      name: "Judwa Dhamaka Burger",
      description:
        "Two crispy aloo tikkis layered with double melted cheese, fresh veggies, and creamy sauces—made for big cravings and bigger appetites.",
      price: "₹99",
      image: judwaImg,
    },
  ];

  return (
    <section className="menu-section">
      <div className="container">
        <h2 className="section-title">Must-Try Bites</h2>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-card-img" />
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <span className="price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="menu" className="menu-poster">
          <h2 className="section-title">Menu</h2>
          <div className="menu-poster-wrapper" onClick={() => setIsMenuOpen(true)}>
            <img
              src={menuFullImg}
              alt="BUNBAY full menu — burgers, fries, drinks, combos, meals, and party packs"
              className="menu-poster-img"
            />
            <div className="menu-zoom-hint">
              <span>🔍 Tap to Zoom Menu</span>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="menu-lightbox" onClick={() => setIsMenuOpen(false)}>
            <div className="menu-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close-btn" onClick={() => setIsMenuOpen(false)}>&times;</button>
              <img
                src={menuFullImg}
                alt="BUNBAY full menu zoomed"
                className="menu-lightbox-img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuHighlights;
