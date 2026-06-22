import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Footer from './components/Footer';
import OrderNotification from './components/OrderNotification';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
      </main>
      <Footer />
      <OrderNotification />
    </>
  );
}

export default App;
