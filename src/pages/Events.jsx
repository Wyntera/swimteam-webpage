import React from "react";

export default function Events() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Upcoming Meets</h1>
      <ul className="space-y-4">
        <li className="p-4 bg-white shadow rounded">
          <strong>March 12, 2025:</strong> Regional Qualifiers – City Aquatic Center
        </li>
        <li className="p-4 bg-white shadow rounded">
          <strong>April 5, 2025:</strong> State Championship – Capital Swim Complex
        </li>
      </ul>
    </div>
  );
}
