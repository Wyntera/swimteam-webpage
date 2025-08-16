import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <form className="space-y-4 bg-white shadow p-6 rounded">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32"
        ></textarea>
        <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

