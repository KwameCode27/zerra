import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">Zerra</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Facilities</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Offers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Wedding</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Rooms</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Facilities</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Offers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Wedding</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <div className="flex flex-col space-y-2 pt-3">
                <button className="text-gray-700 font-medium text-left">Sign In</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;