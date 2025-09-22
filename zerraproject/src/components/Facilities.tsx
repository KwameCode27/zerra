import React from 'react';
import { Waves, Dumbbell, Coffee } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      id: 1,
      number: "01",
      title: "Indoor Swimming Pool",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page",
      icon: <Waves className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      number: "02", 
      title: "Gym Training Ground",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page",
      icon: <Dumbbell className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      number: "03",
      title: "Caffe & Restaurant", 
      description: "It is a long established fact that a reader will be distracted by the readable content of a page",
      icon: <Coffee className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enjoy complete and best quality facilities
            </h2>
          </div>
          <button className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
            See more
          </button>
        </div>
        
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div key={facility.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl font-bold text-blue-100">
                    {facility.number}
                  </div>
                  <div className="text-blue-600">
                    {facility.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">
                  {facility.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;