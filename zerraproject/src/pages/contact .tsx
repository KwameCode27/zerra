
const Contact: React.FC = () => (
  <section className="min-h-screen bg-gray-50 py-16">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you! Fill out the form below or reach us directly.</p>
      </div>
      <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center text-gray-600">
        <p>Email: <a href="mailto:info@zerrahotel.com" className="text-blue-600 underline">info@zerrahotel.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 234 567 890</a></p>
        <p>Address: 123 Zerra Street, City Center, Country</p>
      </div>
    </div>
  </section>
);

export default Contact;