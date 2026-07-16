import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuData';
import monsoonFlyerImg from '../assets/monsoon_combo_blast.jpg';

const Promotions = () => {
  const [isFlyerZoomed, setIsFlyerZoomed] = useState(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);
  const { cart, addToCart, updateQuantity } = useCart();

  // Find the two combos in menuItems
  const doubleDelight = menuItems.find(item => item.id === 25);
  const cheeseFireBox = menuItems.find(item => item.id === 18);

  const promoCombos = [doubleDelight, cheeseFireBox].filter(Boolean);

  return (
    <section className="promotions-section" id="offers">
      <div className="container">
        <h2 className="section-title">Monsoon Combo Blast 🌧️🍔</h2>
        <p className="section-subtitle">Double the savings, double the taste! Limited quantity of 2 per order at offer price.</p>

        <div className="promotions-layout-vertical">
          {/* Top Row: Interactive Flyer Image (Centered) */}
          <div className="flyer-row">
            <div 
              className="flyer-card-wrapper" 
              onClick={() => setIsFlyerZoomed(true)}
              title="Click to Zoom Flyer"
            >
              <img 
                src={monsoonFlyerImg} 
                alt="BUNBAY Monsoon Combo Blast Flyer" 
                className="flyer-img" 
              />
              <div className="flyer-zoom-overlay">
                <span>🔍 Tap to Zoom Flyer</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Featured Promo Combo Cards (Side-by-side on desktop) */}
          <div className="promo-cards-row">
            {promoCombos.map((item) => {
              const cartItem = cart.find(c => c.id === item.id);
              return (
                <div key={item.id} className="promo-combo-card">
                  <div 
                    className="promo-combo-img-wrapper"
                    onClick={() => setActiveLightboxImg(item)}
                    title="Click to Zoom Image"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="promo-combo-img" 
                    />
                    <div className="promo-combo-zoom-overlay">
                      <span>🔍 Tap to Zoom</span>
                    </div>
                    <span className="badge-promo-offer">Monsoon Offer</span>
                  </div>
                  <div className="promo-combo-info">
                    <div className="promo-combo-header">
                      <h3>{item.name}</h3>
                      <span className="veg-indicator">🟢 Veg</span>
                    </div>
                    <p className="promo-combo-desc">{item.description}</p>
                    
                    {/* Theme Matching Highlight Note */}
                    <div className="promo-highlight-note">
                      🔥 Special Deal: Upto 2 Qty @ ₹{item.offerPrice} each!
                    </div>
                    
                    <div className="promo-combo-pricing">
                      <div className="price-block">
                        <span className="offer-price">₹{item.offerPrice}</span>
                        <span className="regular-price-slashed">₹{item.price}</span>
                      </div>
                      <span className="promo-limit-note">Upto 2 qty</span>
                    </div>

                    <div className="promo-combo-action">
                      {cartItem ? (
                        <div className="quantity-controller inline-controller promo-controller">
                          <button 
                            onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                            className="qty-btn"
                            aria-label="Decrease quantity"
                          >
                            &minus;
                          </button>
                          <span className="qty-val">{cartItem.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                            className="qty-btn"
                            aria-label="Increase quantity"
                          >
                            &#43;
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => addToCart(item)} 
                          className="btn-add-to-cart promo-add-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 5.04 7.997-.4 1.12-5.6H3.05zm3.178 7 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Zm4.018 0 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Z"/>
                          </svg>
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flyer Zoom Lightbox Modal */}
        {isFlyerZoomed && (
          <div className="menu-lightbox" onClick={() => setIsFlyerZoomed(false)}>
            <div className="menu-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close-btn" onClick={() => setIsFlyerZoomed(false)}>&times;</button>
              <img
                src={monsoonFlyerImg}
                alt="BUNBAY Monsoon Combo Blast flyer zoomed"
                className="menu-lightbox-img"
              />
            </div>
          </div>
        )}

        {/* Combo Card Image Lightbox Modal */}
        {activeLightboxImg && (
          <div className="menu-lightbox" onClick={() => setActiveLightboxImg(null)}>
            <div className="menu-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close-btn" onClick={() => setActiveLightboxImg(null)}>&times;</button>
              <img
                src={activeLightboxImg.image}
                alt={activeLightboxImg.name}
                className="menu-lightbox-img menu-lightbox-card-img"
              />
              <div className="lightbox-caption">
                <h3>{activeLightboxImg.name}</h3>
                <p className="price promo-price">
                  <span className="current-price">₹{activeLightboxImg.offerPrice}</span>
                  <span className="original-price-slashed">₹{activeLightboxImg.price}</span>
                </p>
                <p className="description">{activeLightboxImg.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Promotions;
