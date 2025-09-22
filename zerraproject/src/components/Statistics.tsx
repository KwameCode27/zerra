import React from 'react';
import { TrendingUp, Users, Award, MapPin } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "100+",
      label: "Comfortable room",
      description: ""
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "5M+",
      label: "Happy Customers",
      description: ""
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "23+",
      label: "Certificate of Merit",
      description: ""
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "5.0",
      label: "a five-star hotel",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hotels with the best service and quality always
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
              {stat.description && <div className="text-gray-600">{stat.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;