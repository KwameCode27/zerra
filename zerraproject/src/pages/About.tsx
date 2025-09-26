
const About: React.FC = () => (
  <section className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Zerra Hotel</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience luxury, comfort, and world-class hospitality in the heart of the city.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Hotel Lobby"
          className="rounded-2xl shadow-lg w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Zerra Hotel was founded with a vision to redefine hospitality. Our team is dedicated to providing guests with an unforgettable stay, blending modern amenities with timeless elegance.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Prime location in the city center</li>
            <li>Luxurious rooms & suites</li>
            <li>Exceptional dining experiences</li>
            <li>State-of-the-art facilities</li>
            <li>Personalized guest services</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-gray-600">
          Have questions? Reach out at <a href="mailto:info@zerrahotel.com" className="text-blue-600 underline">info@zerrahotel.com</a>
        </p>
      </div>
    </div>
  </section>
);

export default About;