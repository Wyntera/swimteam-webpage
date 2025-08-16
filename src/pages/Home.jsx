import React from "react";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-100 text-center py-16">
        <h1 className="text-4xl font-bold text-blue-900">
          Welcome to Our Swim Team
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Excellence in the pool, unity on the deck.
        </p>
        <button className="mt-6 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700">
          View Upcoming Meets
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold">🏆 Achievements</h2>
          <p className="mt-2 text-gray-600">
            Multiple state champions and record holders.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold">📅 Practice Schedule</h2>
          <p className="mt-2 text-gray-600">
            Monday–Friday, 6:00 AM – 8:00 AM.
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold">🤝 Join Us</h2>
          <p className="mt-2 text-gray-600">
            New swimmers welcome! Contact us for details.
          </p>
        </div>
      </section>
    </div>
  );
}
