import React from 'react';
import classicImg from '../assets/hero_actual.jpg';
import spicyImg from '../assets/burger_actual2.jpg';
import friesImg from '../assets/burger_actual3.jpg';
import doubleImg from '../assets/double_crunch_new.jpg';
import comboImg from '../assets/burger_actual1.jpg';
import nachoImg from '../assets/nacho_burger.jpg';

const MenuHighlights = () => {
  const menuItems = [
    {
      id: 1,
      name: "The Classic Cheeseburger",
      description: "Our signature beef patty with double American cheese, fresh lettuce, tomato, and house sauce.",
      price: "$12.99",
      image: classicImg
    },
    {
      id: 2,
      name: "Spicy Crispy Chicken",
      description: "Crispy fried chicken breast, spicy mayo, jalapeños, and crunchy slaw on a toasted bun.",
      price: "$14.50",
      image: spicyImg
    },
    {
      id: 3,
      name: "Loaded Bacon Fries",
      description: "Golden crispy fries smothered in melted cheddar cheese, topped with crispy bacon bits and scallions.",
      price: "$8.99",
      image: friesImg
    },
    {
      id: 4,
      name: "Double Crunch Burger",
      description: "Two crispy patties stacked with extra cheese, pickles, and our special crunch sauce.",
      price: "$16.99",
      image: doubleImg
    },
    {
      id: 5,
      name: "The Family Combo",
      description: "A giant burger paired with a generous portion of our signature fries and dipping sauce.",
      price: "$24.99",
      image: comboImg
    },
    {
      id: 6,
      name: "Fiesta Nacho Burger",
      description: "Crispy patty topped with crunchy nachos, jalapeños, and zesty cheese sauce.",
      price: "$15.99",
      image: nachoImg
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
