import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Coffee, Dumbbell, Users, Bed, Bath, Square, Star } from 'lucide-react';

const Rooms: React.FC = () => {
  const roomTypes = [
    {
      id: 1,
      name: "Executive Suite",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$299",
      period: "night",
      beds: 1,
      baths: 1,
      area: "450 sq ft",
      guests: 2,
      rating: 4.8,
      amenities: ["Free WiFi", "Room Service", "City View"]
    },
    {
      id: 2,
      name: "Junior Suite",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$199",
      period: "night",
      beds: 1,
      baths: 1,
      area: "350 sq ft",
      guests: 2,
      rating: 4.6,
      amenities: ["Free WiFi", "Breakfast", "Balcony"]
    },
    {
      id: 3,
      name: "Grand Deluxe",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$399",
      period: "night",
      beds: 2,
      baths: 2,
      area: "650 sq ft",
      guests: 4,
      rating: 4.9,
      amenities: ["Free WiFi", "Spa Access", "Ocean View"]
    }
  ];

  const featuredRooms = [
    {
      id: 4,
      name: "Executive Deluxe",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$349",
      period: "night",
      beds: 1,
      baths: 1,
      area: "500 sq ft",
      guests: 2,
      rating: 4.7,
      amenities: ["Free WiFi", "Mini Bar", "Work Desk"]
    },
    {
      id: 5,
      name: "Premium Suite",
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$449",
      period: "night",
      beds: 2,
      baths: 2,
      area: "750 sq ft",
      guests: 4,
      rating: 4.8,
      amenities: ["Free WiFi", "Kitchen", "Living Area"]
    },
    {
      id: 6,
      name: "Premium Deluxe",
      image: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$549",
      period: "night",
      beds: 2,
      baths: 2,
      area: "850 sq ft",
      guests: 4,
      rating: 4.9,
      amenities: ["Free WiFi", "Jacuzzi", "Terrace"]
    }
  ];

  const amenities = [
    { icon: <Wifi className="h-6 w-6" />, name: "Free WiFi" },
    { icon: <Car className="h-6 w-6" />, name: "Parking" },
    { icon: <Coffee className="h-6 w-6" />, name: "Restaurant" },
    { icon: <Dumbbell className="h-6 w-6" />, name: "Fitness Center" }
  ];

  // navigation uses Links to room details now; booking modal removed

  return (
    <div className="min-h-screen bg-white">
      {/* booking modal removed; navigation now uses Links */}
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200')"
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Rooms</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Rest and relax in our most comfortable rooms
            </p>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page 
              when looking at its layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {roomTypes.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{room.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{room.beds} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{room.baths} bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{room.area}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{room.guests} guests</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{room.price}</span>
                      <span className="text-gray-600">/{room.period}</span>
                    </div>
                    <Link to="/rooms/premium-deluxe" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium inline-block text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Room */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden relative mb-16">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200')"
              }}
            ></div>
            <div className="relative z-10 p-12 text-white">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">Premium Grand Deluxe Pool</h2>
                <p className="text-xl mb-6 opacity-90">
                  Experience luxury at its finest with our premium suite featuring a private pool and stunning views.
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>2 beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>2 baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2" />
                    <span>1200 sq ft</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>6 guests</span>
                  </div>
                </div>
                <Link to="/rooms/premium-deluxe" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium inline-block">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{room.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{room.beds} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{room.baths} bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{room.area}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{room.guests} guests</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{room.price}</span>
                      <span className="text-gray-600">/{room.period}</span>
                    </div>
                    <Link to="/rooms/premium-deluxe" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium inline-block text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel Amenities</h2>
            <p className="text-xl text-gray-600">
              Enjoy world-class facilities and services during your stay
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg text-blue-600">
                  {amenity.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;