import React from 'react';

export default function WelcomeScreen({ onStart, questionsLength }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Career Assessment</h2>
      <p className="text-gray-600 mb-6">
        This comprehensive assessment includes {questionsLength} carefully crafted questions
        that evaluate multiple dimensions of your professional preferences and working style.
        Allow about 15-20 minutes to complete.
      </p>
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">What to expect:</h3>
        <ul className="list-disc list-inside text-blue-700 space-y-1">
          <li>Multiple-choice format throughout</li>
          <li>No time limits per question</li>
          <li>Progress indicator keeps you oriented</li>
          <li>Instant results at completion</li>
        </ul>
      </div>
      <button
        onClick={onStart}
        className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Begin Assessment
      </button>
    </div>
  );
}