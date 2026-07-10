import React from 'react';

const OrderNotification = ({ onClose }) => {
  return (
    <div className="order-notification-bar" id="large-order-notification">
      <div className="container notification-container">
        <div className="notification-content">
          <span className="notification-icon">📢</span>
          <p>
            <strong>Note on Large Orders:</strong> For orders of <strong>20 or more burgers</strong>, please place your order <strong>1 day prior</strong> so we can prepare and deliver them fresh for your celebration!
          </p>
        </div>
        <button 
          className="notification-close-btn" 
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default OrderNotification;
