import React from 'react';

export default function WelcomeScreen({ onStart, questionsLength }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome!</h2>
      <p className="text-gray-600 mb-6">
        This assessment will help identify careers that match your skills, interests, and personality. 
        You'll answer {questionsLength} questions about your preferences and work style.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Start Assessment
      </button>
    </div>
  );
}