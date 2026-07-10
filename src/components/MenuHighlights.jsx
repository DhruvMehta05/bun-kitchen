import React, { useState, useMemo } from 'react';
import { menuItems } from '../data/menuData';
import menuFullImg from '../assets/menu_full.jpg';
import { useCart } from '../context/CartContext';

const MenuHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Category list
  const categories = [
    { key: 'all', name: 'All Bites' },
    { key: 'burgers', name: 'Burgers 🍔' },
    { key: 'sides', name: 'Sides & Fries 🍟' },
    { key: 'combos', name: 'Combos & Meals 🎁' },
    { key: 'beverages', name: 'Beverages 🥤' }
  ];

  // Filtering logic
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      // Filter by category
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Filter by search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesName || matchesDescription || matchesTags;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const { cart, addToCart, updateQuantity } = useCart();

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2 className="section-title">Craving Starts Here</h2>
        
        {/* Search & Category Filter Section */}
        <div className="menu-controls">
          <div className="search-box-wrapper">
            <input 
              type="text" 
              placeholder="Search burgers, sides, drinks or tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`category-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div 
                  className="menu-card-img-container" 
                  onClick={() => setActiveLightboxImg(item)}
                  title="Click to Zoom Image"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={`menu-card-img ${item.category === 'beverages' ? 'beverage-img' : ''} ${item.id === 6 ? 'judwa-img' : ''}`} 
                  />
                  <div className="menu-card-zoom-overlay">
                    <span>🔍 Tap to Zoom</span>
                  </div>
                  
                  {/* Tags Overlay */}
                  <div className="card-badge-container">
                    <span className="veg-badge">🟢 Veg</span>
                    {item.tags.map((tag) => {
                      if (tag === 'Veg') return null; // skip veg tag since we show badge
                      let badgeClass = 'tag-badge';
                      if (tag === 'Best Seller') badgeClass += ' tag-best-seller';
                      if (tag === 'Spicy') badgeClass += ' tag-spicy';
                      if (tag === 'New') badgeClass += ' tag-new';
                      return (
                        <span key={tag} className={badgeClass}>
                          {tag === 'Spicy' ? '🌶️ Spicy' : tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="menu-card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="price">₹{item.price}</span>
                    {(() => {
                      const cartItem = cart.find(i => i.id === item.id);
                      if (cartItem) {
                        return (
                          <div className="quantity-controller inline-controller">
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
                        );
                      }
                      return (
                        <button 
                          onClick={() => addToCart(item)} 
                          className="btn-add-to-cart"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '6px' }}>
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 5.04 7.997-.4 1.12-5.6H3.05zm3.178 7 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Zm4.018 0 .5 3.5a.5.5 0 0 1-.998.06l-.5-3.5a.5.5 0 0 1 .998-.06Z"/>
                          </svg>
                          Add to Cart
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items-found">
            <span className="no-items-icon">🍔🔍</span>
            <h3>No items matched your search</h3>
            <p>Try searching for something else or explore a different category!</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="btn btn-primary btn-reset-filters"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Full Menu Poster Zoom Section */}
        <div className="menu-poster">
          <h2 className="section-title">Full Menu Poster</h2>
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

        {/* Poster Lightbox Modal */}
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

        {/* Individual Card Image Lightbox Modal */}
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
                <p className="price">₹{activeLightboxImg.price}</p>
                <p className="description">{activeLightboxImg.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuHighlights;
