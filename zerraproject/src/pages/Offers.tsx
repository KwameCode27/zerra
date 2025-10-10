import React, { useState } from "react";

type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const OFFERS: Offer[] = [
  {
    id: "Breakfast",
    title: "Breakfast",
    description: "Enjoy the Breakfast with relaxing and enjoying our variety of pastries served fresh from 2pm to 5pm.",
    image: "https://plus.unsplash.com/premium_photo-1733259677103-fbb5d70ef830?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DQ",
  },
  {
    id: "birthday cake ",
    title: "Birthday cake ",
    description: "Celebrate your birthday with a bespoke cake and decorations. Add extra services at checkout.",
    image: "https://images.unsplash.com/photo-1709195902163-7eee13e78970?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "floating-lunch",
    title: "Floating lunch",
    description: "A private floating lunch served in-room or poolside — romantic and memorable. Order now ",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww",
  },
  {
    id: "Evening Meal",
    title: "Evening Meal",
    description: "Make your evening special with some hot evening meal.",
    image: "https://plus.unsplash.com/premium_photo-1672242676671-c71243a7c6d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
