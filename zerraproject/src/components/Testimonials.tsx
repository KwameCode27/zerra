import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Zerra made finding our dream home incredibly easy. The team was professional and helped us through every step of the process.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Outstanding service and quality facilities. The best choice for finding investment properties with great potential.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "As a first-time buyer, I was nervous about the process. Zerra's team guided me expertly and I found the perfect apartment.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-500 mb-2">WHAT THEY SAID</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
            "A comfortable place to stay, minimalist and clean design makes it more comfortable. Complete facilities are also of high quality."
          </blockquote>
          
          <div className="flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Angelia Surminah"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-lg">Angelia Surminah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;