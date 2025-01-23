import React from 'react';

export default function Question({ question, questionNumber, totalQuestions, onAnswer }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slide-in">
      <div className="flex items-center justify-between mb-6">
        <div className="text-gray-500 text-sm">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="w-24 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h2>
      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="p-4 text-left rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-blue-600 opacity-0 transition-opacity" />
              </div>
              <span className="text-gray-700">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}