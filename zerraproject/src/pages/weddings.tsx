import React from 'react';

const Weddings: React.FC = () => {
	return (
		<section className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto py-12 px-4">
				<div className="relative rounded-lg overflow-hidden mb-10">
					<img src="https://images.unsplash.com/photo-1686853020948-3dd33cf0d3e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8" alt="Wedding Hero" className="w-full h-48 object-cover brightness-75 rounded" />
					<div className="absolute inset-0 flex items-center justify-center">
						<h1 className="text-white text-3xl md:text-4xl font-semibold">Wedding</h1>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-8 items-center mb-8">
					<div>
						<div className="space-y-4">
							<p className="text-lg font-semibold">We are team of passionate and experienced</p>
							<p className="text-gray-600">Our team of wedding planners is passionate about creating unforgettable wedding experiences. We understand that every wedding is unique, and we work closely with our clients to ensure their vision becomes a reality.</p>
							<button className="mt-4 bg-black text-white px-4 py-2 rounded">Booking</button>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-2">
						<img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="w1" className="w-full h-40 object-cover rounded" />
						<img src="https://plus.unsplash.com/premium_photo-1664530452361-9f86e38784b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="w2" className="w-full h-40 object-cover rounded" />
					</div>
				</div>

				<div className="mb-10">
					<h2 className="text-2xl font-semibold mb-4">The unforgettable atmosphere is far from harmonious</h2>
					<div className="md:grid md:grid-cols-2 gap-6 items-center">
						<p className="text-gray-600">Exclusive access to Glasgow's most iconic Neoclassical landmark, playing host to events of all varieties.</p>
						<img src="https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="couple" className="w-full h-48 object-cover rounded" />
					</div>
				</div>

				<h3 className="text-xl font-semibold mb-4">We’ve got a plan that’s perfect for you</h3>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-white rounded-lg overflow-hidden shadow">
						<img src="https://images.unsplash.com/photo-1658691314943-4fce148440dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="local" className="w-full h-40 object-cover" />
						<div className="p-4">Local event</div>
					</div>
					<div className="bg-white rounded-lg overflow-hidden shadow">
						<img src="https://images.unsplash.com/photo-1600547224355-10c6482872ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" alt="standard" className="w-full h-40 object-cover" />
						<div className="p-4">Standard event</div>
					</div>
					<div className="bg-white rounded-lg overflow-hidden shadow">
						<img src="https://plus.unsplash.com/premium_photo-1664530452504-ee3adc4df98c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="international" className="w-full h-40 object-cover" />
						<div className="p-4">International event</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Weddings;
