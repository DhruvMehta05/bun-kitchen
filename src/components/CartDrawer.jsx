import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount, clearCart } = useCart();
  const [instructions, setInstructions] = useState('');
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  // Clear instructions when the cart is emptied
  useEffect(() => {
    if (cart.length === 0) {
      setInstructions('');
    }
  }, [cart.length]);

  if (!isOpen) return null;

  // Generate the formatted WhatsApp message
  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `Hi BUNBAY! \uD83C\uDF54 I would like to place an order:\n\n`;
    message += `\uD83D\uDED2 *Order Details:*\n`;
    
    cart.forEach((item) => {
      let itemTotal;
      let priceDetails = '';
      if (item.offerPrice && item.limitQty) {
        const promoQty = Math.min(item.quantity, item.limitQty);
        const regularQty = Math.max(0, item.quantity - item.limitQty);
        itemTotal = (promoQty * item.offerPrice) + (regularQty * item.price);
        if (regularQty > 0) {
          priceDetails = ` (${promoQty}x @ \u20B9${item.offerPrice} + ${regularQty}x @ \u20B9${item.price})`;
        } else {
          priceDetails = ` (\u20B9${item.offerPrice} each)`;
        }
      } else {
        itemTotal = item.price * item.quantity;
        priceDetails = ` (\u20B9${item.price} each)`;
      }
      message += `\u2022 *${item.quantity}x* ${item.name}${priceDetails} = *\u20B9${itemTotal}*\n`;
    });

    message += `\n\uD83D\uDCB0 *Total Amount:* *\u20B9${cartTotal}*`;

    if (instructions.trim() !== '') {
      message += `\n\n\uD83D\uDCAC *Special Instructions:*\n${instructions.trim()}`;
    }

    message += `\n\nConfirming my order. Please let me know the status and next steps! \uD83C\uDF54`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919653215863&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstructionsChange = (e) => {
    const val = e.target.value;
    // Strip dangerous HTML/script characters to prevent code injection
    const sanitized = val.replace(/[<>`\\{}[\]]/g, '');
    if (sanitized.length <= 200) {
      setInstructions(sanitized);
    }
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({cartCount})</h2>
          <div className="cart-header-actions">
            {cart.length > 0 && (
              <button 
                className="cart-clear-all-btn"
                onClick={() => setShowConfirmClear(true)}
              >
                Clear All
              </button>
            )}
            <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
              &times;
            </button>
          </div>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <span className="empty-cart-icon">🛒</span>
              <h3>Your cart is empty</h3>
              <p>Add some delicious bites from our menu to get started!</p>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  onClose();
                  window.location.hash = 'menu';
                  const menuSection = document.getElementById('menu');
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => {
                  const isPromo = item.offerPrice && item.limitQty;
                  const promoQty = isPromo ? Math.min(item.quantity, item.limitQty) : 0;
                  const regularQty = isPromo ? Math.max(0, item.quantity - item.limitQty) : 0;
                  const itemTotal = isPromo 
                    ? (promoQty * item.offerPrice) + (regularQty * item.price)
                    : item.price * item.quantity;

                  return (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <div className="cart-item-price-block">
                          {isPromo ? (
                            <>
                              <p className="cart-item-price promo-applied">
                                <span className="current-price">₹{item.offerPrice}</span>
                                <span className="original-price">₹{item.price}</span>
                              </p>
                              {item.quantity > item.limitQty && (
                                <p className="cart-item-breakdown">{promoQty}x @ ₹{item.offerPrice} + {regularQty}x @ ₹{item.price}</p>
                              )}
                            </>
                          ) : (
                            <p className="cart-item-price">₹{item.price} each</p>
                          )}
                        </div>
                        
                        <div className="cart-item-actions">
                          <div className="quantity-controller">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="qty-btn"
                              aria-label="Decrease quantity"
                            >
                              &minus;
                            </button>
                            <span className="qty-val">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="qty-btn"
                              aria-label="Increase quantity"
                            >
                              &#43;
                            </button>
                          </div>
                          
                          <button 
                            className="cart-item-delete"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-total-price">
                        ₹{itemTotal}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart-instructions">
                <div className="cart-instructions-header">
                  <label htmlFor="cart-instructions-input">Special Instructions</label>
                  <span className="char-count">{instructions.length}/200</span>
                </div>
                <textarea
                  id="cart-instructions-input"
                  placeholder="E.g., Make it extra spicy, no onions, delivery details..."
                  value={instructions}
                  onChange={handleInstructionsChange}
                  rows={2}
                  maxLength={200}
                />
              </div>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Items Total:</span>
              <span>₹{cartTotal}</span>
            </div>
            <p className="cart-tax-note">Taxes and delivery charges calculated on confirmation.</p>
            <button className="btn-checkout-whatsapp" onClick={handleCheckout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Send Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>

    {showConfirmClear && (
      <div className="clear-confirm-overlay" onClick={() => setShowConfirmClear(false)}>
        <div className="clear-confirm-modal" onClick={(e) => e.stopPropagation()}>
          <h3>Empty your cart?</h3>
          <p>This will remove all items from your cart. You cannot undo this action.</p>
          <div className="clear-confirm-buttons">
            <button 
              className="btn-confirm-cancel" 
              onClick={() => setShowConfirmClear(false)}
            >
              Cancel
            </button>
            <button 
              className="btn-confirm-clear" 
              onClick={() => {
                clearCart();
                setShowConfirmClear(false);
              }}
            >
              Yes, Clear All
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default CartDrawer;
