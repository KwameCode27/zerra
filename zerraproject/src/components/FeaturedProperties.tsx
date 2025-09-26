import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$850,000",
      title: "Modern Downtown Apartment",
      location: "Downtown, New York",
      beds: 3,
      baths: 2,
      area: "1,200 sq ft",
      featured: true
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$1,250,000",
      title: "Luxury Family Villa",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      area: "2,800 sq ft",
      featured: true
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$650,000",
      title: "Cozy Suburban Home",
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      area: "1,800 sq ft"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$720,000",
      title: "Waterfront Condo",
      location: "Miami Beach, FL",
      beds: 2,
      baths: 2,
      area: "1,100 sq ft"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$980,000",
      title: "Contemporary Loft",
      location: "San Francisco, CA",
      beds: 3,
      baths: 2,
      area: "1,500 sq ft"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$1,100,000",
      title: "Mountain View Estate",
      location: "Denver, CO",
      beds: 4,
      baths: 3,
      area: "2,200 sq ft"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enjoy an unforgettable stay with the best charm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content of a page
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-black border-2 border-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;