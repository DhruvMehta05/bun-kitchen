import React from 'react';
import heroImg from '../assets/hero.png';
import burgerImg from '../assets/burger.png';
import friesImg from '../assets/fries.png';

const MenuHighlights = () => {
  const menuItems = [
    {
      id: 1,
      name: "The Classic Cheeseburger",
      description: "Our signature beef patty with double American cheese, fresh lettuce, tomato, and house sauce.",
      price: "$12.99",
      image: heroImg
    },
    {
      id: 2,
      name: "Spicy Crispy Chicken",
      description: "Crispy fried chicken breast, spicy mayo, jalapeños, and crunchy slaw on a toasted bun.",
      price: "$14.50",
      image: burgerImg
    },
    {
      id: 3,
      name: "Loaded Bacon Fries",
      description: "Golden crispy fries smothered in melted cheddar cheese, topped with crispy bacon bits and scallions.",
      price: "$8.99",
      image: friesImg
    }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Popular Picks</h2>
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
      </div>
    </section>
  );
};

export default MenuHighlights;
