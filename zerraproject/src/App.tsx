import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Facilities from './components/Facilities';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProperties />
      <Statistics />
      <Facilities />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;