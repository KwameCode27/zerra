import React from 'react';

const facilities = [
  {
    id: 1,
    title: 'Indoor Swimming Pool',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
    image: 'https://images.unsplash.com/photo-1700957814555-0a05851e1d21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
  },
  {
    id: 2,
    title: 'Gym Training Ground',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8'
  },
  {
    id: 3,
    title: 'Caffe & Restaurant',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
  }
];

const Facilities: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="relative rounded-lg overflow-hidden mb-10">
          <img src="https://plus.unsplash.com/premium_photo-1661875599289-69a40b436fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8" alt="Facilities Hero" className="w-full h-48 object-cover brightness-75 rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">Facilities</h1>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Our Facilities</h2>
        <div className="space-y-8">
          {facilities.map((f, idx) => (
            <div key={f.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-6">
              <img src={f.image} alt={f.title} className="w-48 h-28 object-cover rounded" />
              <div className="flex-1 border-l pl-6">
                <div className="text-sm text-gray-400">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button className="w-10 h-10 bg-black text-white rounded">1</button>
          <button className="w-10 h-10 border rounded">2</button>
          <button className="w-10 h-10 border rounded">3</button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
