import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  title,
  location,
  beds,
  baths,
  area,
  featured = false
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
  <button className="absolute top-4 right-4 p-2 bg-black rounded-full shadow-md hover:bg-gray-900 transition-colors text-white">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{price}</h3>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>
        
  <Link to="/rooms/premium-deluxe" className="w-full mt-4 inline-block text-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors font-medium">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;