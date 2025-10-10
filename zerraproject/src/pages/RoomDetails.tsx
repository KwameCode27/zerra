import React from 'react';

const RoomDetails: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Hero */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1505691723518-36a8b1c6b1b8"
            alt="Premium Deluxe"
            className="w-full h-64 object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-semibold">Premium Deluxe</h1>
              <p className="mt-2">60m² • 1 Bed • 1 Bathroom • Balcony</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="1" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" alt="2" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="3" className="w-full h-40 object-cover rounded" />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 mb-6">
              Surround yourself with simple elegance in this 60.5 m² premium deluxe room. Premium finishes and modern comfort blend seamlessly to create a relaxing retreat. This room features a comfortable king-sized bed, en-suite bathroom, balcony with city views and complimentary amenities.
            </p>

            <h3 className="text-xl font-semibold mb-3">Premium Deluxe Facilities</h3>
            <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded shadow mb-6">
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">Telephone</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">Bathub</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">Shower</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">Wi-Fi</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">LCD Television</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="font-semibold">Coffee Maker</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Other Rooms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded shadow overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560448070-c7e4b9d3d9a6" alt="Executive Suite" className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-semibold">Executive Suite</h4>
                  <p className="text-sm text-gray-500">52m² • 2 Bed • 1 Bathroom • Balcony</p>
                </div>
              </div>
              <div className="bg-white rounded shadow overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" alt="Junior Suite" className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-semibold">Junior Suite</h4>
                  <p className="text-sm text-gray-500">40m² • 1 Bed • 1 Bathroom • Balcony</p>
                </div>
              </div>
              <div className="bg-white rounded shadow overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" alt="Grand Deluxe" className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-semibold">Grand Deluxe</h4>
                  <p className="text-sm text-gray-500">80m² • 2 Bed • 2 Bathroom • Balcony</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <aside className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Booking</h4>
              <div className="text-yellow-600 font-bold">$1200 /Night</div>
            </div>

            <label className="block text-sm text-gray-600">Check In</label>
            <input type="date" className="w-full border p-2 rounded mb-3" />

            <label className="block text-sm text-gray-600">Check Out</label>
            <input type="date" className="w-full border p-2 rounded mb-3" />

            <label className="block text-sm text-gray-600">Guests</label>
            <input type="number" min={1} defaultValue={1} className="w-full border p-2 rounded mb-4" />

            <button className="w-full bg-yellow-500 text-white py-2 rounded">Booking</button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
