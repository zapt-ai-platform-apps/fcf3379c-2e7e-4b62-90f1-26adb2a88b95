import React from 'react';

export default function Result({ recommendations, onRestart }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Career Matches</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {recommendations.map((career, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{career.title}</h3>
            <p className="text-gray-600 mb-4">{career.description}</p>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Why this matches you:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {career.reasons.map((reason, i) => (
                  <li key={i} className="mb-1">{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onRestart}
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Take Assessment Again
      </button>
    </div>
  );
}