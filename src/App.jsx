import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import MenuHighlights from './components/MenuHighlights';
import Footer from './components/Footer';
import OrderNotification from './components/OrderNotification';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNoteVisible, setIsNoteVisible] = useState(true);

  return (
    <CartProvider>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Promotions />
        <MenuHighlights />
      </main>
      <Footer />
      {!isCartOpen && isNoteVisible && (
        <OrderNotification onClose={() => setIsNoteVisible(false)} />
      )}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
}

export default App;
