import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">🏊 Swim Team</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/events" className="hover:text-blue-300">Events</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-2 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
