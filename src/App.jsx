import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
      </main>
      <Footer />
    </>
  );
}

export default App;
