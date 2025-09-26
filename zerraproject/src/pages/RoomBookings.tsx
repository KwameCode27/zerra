import React, { useState } from "react";

type Step = 1 | 2 | 3;

const BookingRoom: React.FC = () => {
  const [step, setStep] = useState<Step>(1);

  // Form state
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [bookingInfo, setBookingInfo] = useState({
    checkIn: "",
    checkOut: "",
    totalRoom: 1,
    totalGuest: 1,
    code: "",
  });

  const handleNext = () => {
    if (step < 3) setStep((prev) => (prev + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  return (
    <section className="p-10 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        {/* Step Indicator */}
        <div className="flex justify-center gap-8 mb-6">
          <div className={`step ${step >= 1 ? "font-bold text-black" : "text-gray-400"}`}>Personal data</div>
          <div className={`step ${step >= 2 ? "font-bold text-black" : "text-gray-400"}`}>Booking info</div>
          <div className={`step ${step === 3 ? "font-bold text-black" : "text-gray-400"}`}>Summary</div>
        </div>

        {/* Room Info */}
        <div className="flex gap-6 border-b pb-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Premium Deluxe"
            className="w-40 h-28 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-semibold">Premium Deluxe</h2>
            <p className="text-sm text-gray-500">60m² • 1 Bed • 1 Bathroom • Balcony</p>
            <p className="text-red-500 font-bold mt-2">$1200 / night</p>
          </div>
        </div>

        {/* Step 1: Personal Data */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={personalData.firstName}
              onChange={(e) => setPersonalData({ ...personalData, firstName: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={personalData.lastName}
              onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={personalData.email}
              onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={personalData.phone}
              onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })}
              className="border p-2 rounded"
            />
          </div>
        )}

        {/* Step 2: Booking Info */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <input
              type="date"
              value={bookingInfo.checkIn}
              onChange={(e) => setBookingInfo({ ...bookingInfo, checkIn: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={bookingInfo.checkOut}
              onChange={(e) => setBookingInfo({ ...bookingInfo, checkOut: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="number"
              min={1}
              placeholder="Total Rooms"
              value={bookingInfo.totalRoom}
              onChange={(e) => setBookingInfo({ ...bookingInfo, totalRoom: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <input
              type="number"
              min={1}
              placeholder="Total Guests"
              value={bookingInfo.totalGuest}
              onChange={(e) => setBookingInfo({ ...bookingInfo, totalGuest: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Code / Voucher"
              value={bookingInfo.code}
              onChange={(e) => setBookingInfo({ ...bookingInfo, code: e.target.value })}
              className="border p-2 rounded"
            />
          </div>
        )}

        {/* Step 3: Summary */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <p><strong>Name:</strong> {personalData.firstName} {personalData.lastName}</p>
            <p><strong>Email:</strong> {personalData.email}</p>
            <p><strong>Check In:</strong> {bookingInfo.checkIn}</p>
            <p><strong>Check Out:</strong> {bookingInfo.checkOut}</p>
            <p><strong>Total Guests:</strong> {bookingInfo.totalGuest}</p>
            <p><strong>Total Price:</strong> $1200</p>
            <select className="border p-2 rounded">
              <option>Payment Method</option>
              <option>Credit Card</option>
              <option>Master Card</option>
              <option>PayPal</option>
            </select>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 ml-auto"
            >
              Next
            </button>
          ) : (
            <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-auto">
              Booking Now
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingRoom;
