import React from 'react';

export default function Question({ question, questionNumber, totalQuestions, onAnswer }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slide-in">
      <div className="mb-4 text-gray-500 text-sm">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h2>
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="p-4 text-left rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full border border-gray-300 mr-3"></div>
              <span className="text-gray-700">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}