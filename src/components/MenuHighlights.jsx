import React, { useState, useMemo } from 'react';
import { menuItems } from '../data/menuData';
import menuFullImg from '../assets/menu_full.jpg';

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

  // Helper to generate WhatsApp order links
  const getWhatsAppLink = (itemName, price) => {
    const message = `Hi BUNBAY! I would like to order the *${itemName}* (₹${price}). Please confirm my order.`;
    return `https://wa.me/919653215863?text=${encodeURIComponent(message)}`;
  };

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
                    <a 
                      href={getWhatsAppLink(item.name, item.price)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-order-whatsapp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                      Order
                    </a>
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
