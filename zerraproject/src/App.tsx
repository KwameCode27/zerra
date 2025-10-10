// React import not needed with new JSX transform and direct usage
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Facilities from './components/Facilities';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Offers from './pages/Offers';
import RoomBookings from './pages/RoomBookings';
import About from './pages/About';
import Contact from './pages/Contact';
import RoomDetails from './pages/RoomDetails';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <Statistics />
      <Facilities />
      <Testimonials />
      <Blog />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/rooms" element={<RoomBookings />} />
  <Route path="/rooms/premium-deluxe" element={<RoomDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;