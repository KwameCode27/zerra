import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Helping You Find The Most
            <span className="text-blue-600 block">Comfortable Place</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option>Room type</option>
                <option>Executive Suite</option>
                <option>Junior Suite</option>
                <option>Grand Deluxe</option>
                <option>Premium Suite</option>
              </select>
            </div>
            
            <div className="relative">
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                defaultValue="2023-05-18"
              />
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">Checkin</label>
            </div>
            
            <div className="relative">
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                defaultValue="2023-05-19"
              />
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">Checkout</label>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;