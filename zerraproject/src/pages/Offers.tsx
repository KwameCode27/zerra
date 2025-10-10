import React, { useState } from "react";

type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const OFFERS: Offer[] = [
  {
    id: "afternoon-tea",
    title: "Afternoon Tea",
    description: "Enjoy the afternoon with relaxing and enjoying our variety of pastries served fresh from 2pm to 5pm.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  },
  {
    id: "birthday",
    title: "Birthday",
    description: "Celebrate your birthday with a bespoke cake and decorations. Add extra services at checkout.",
    image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb",
  },
  {
    id: "floating-breakfast",
    title: "Floating Breakfast",
    description: "A private floating breakfast served in-room or poolside — romantic and memorable.",
    image: "https://images.unsplash.com/photo-1541542684-6e9d2f3a9f25",
  },
  {
    id: "honeymoon",
    title: "Honeymoon",
    description: "Make your special day with our honeymoon package including spa and private dinner.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

const Offers: React.FC = () => {
  const [openOffer, setOpenOffer] = useState<Offer | null>(null);
  const [orderData, setOrderData] = useState({ name: "", email: "", notes: "" });

  const openOrder = (offer: Offer) => {
    setOpenOffer(offer);
    setOrderData({ name: "", email: "", notes: "" });
  };

  const closeOrder = () => setOpenOffer(null);

  const submitOrder = () => {
    // Placeholder: integrate with API/Firebase later
    // For now just close modal and log
    // eslint-disable-next-line no-console
    console.log("Order submitted", { offer: openOffer?.id, ...orderData });
    closeOrder();
    alert("Order submitted — we'll contact you via email.");
  };

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-semibold">Featured Offers</h1>
        <p className="text-gray-600 mt-2">Treat yourself or surprise someone special — order any of our offers below.</p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {OFFERS.map((o, idx) => (
          <div key={o.id} className={`flex gap-6 items-center ${idx % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <img src={o.image} alt={o.title} className="w-1/2 h-48 object-cover rounded shadow" />
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold">{o.title}</h2>
              <p className="text-gray-600 mt-3">{o.description}</p>
              <button
                onClick={() => openOrder(o)}
                className="mt-4 inline-block px-4 py-2 bg-black text-white rounded hover:opacity-90"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Order: {openOffer.title}</h3>
              <button onClick={closeOrder} className="text-gray-500">Close</button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={orderData.name}
                onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={orderData.email}
                onChange={(e) => setOrderData({ ...orderData, email: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Special Requests / Notes"
                value={orderData.notes}
                onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
                className="border p-2 rounded h-24"
              />

              <div className="flex justify-end gap-2 mt-2">
                <button onClick={closeOrder} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={submitOrder} className="px-4 py-2 bg-yellow-500 text-white rounded">Submit Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offers;
