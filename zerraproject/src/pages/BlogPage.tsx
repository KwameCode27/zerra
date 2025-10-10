import React from 'react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      date: '20 May 2025',
      title: 'Webinar event Mental training for young people to develop',
      image: 'https://images.unsplash.com/photo-1503264116251-35a269479413'
    },
    {
      id: 2,
      date: '25 May 2023',
      title: 'New facilities : Large golf course at the Zerra hotel',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657'
    },
    {
      id: 3,
      date: '12 May 2023',
      title: 'Coming soon! a posh supermarket near the hotel',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
    },
    {
      id: 4,
      date: '15 Apr 2023',
      title: 'Webinar event Mental training for young people to develop',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="relative rounded-lg overflow-hidden mb-10">
          <img src="https://plus.unsplash.com/premium_photo-1683417272601-dbbfed0ed718?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Hero" className="w-full h-48 object-cover brightness-75 rounded" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">Our Blog</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Stay up to date with all the news about us</h2>
            <p className="text-gray-600 mb-6">Keep up with news about us regarding the facilities, events and promos that we provide, all here.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((p) => (
                <article key={p.id} className="bg-white rounded-lg overflow-hidden shadow">
                  <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-2">{p.date}</div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <button className="mt-2 bg-black text-white px-4 py-2 rounded">Read More</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-4">Recent Posts</h4>
              {posts.slice(0,3).map(p => (
                <div key={p.id} className="flex items-start gap-3 mb-4">
                  <img src={p.image} alt={p.title} className="w-20 h-14 object-cover rounded" />
                  <div>
                    <div className="text-sm text-gray-500">{p.date}</div>
                    <div className="text-sm">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
