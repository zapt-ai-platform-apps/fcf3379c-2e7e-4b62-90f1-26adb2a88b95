import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import { questions } from './data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import LoadingSpinner from './components/LoadingSpinner';
import { generateRecommendations } from './utils/recommendations';

export default function App() {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = () => {
    setCurrentStep('questions');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    } else {
      setIsLoading(true);
      setCurrentStep('loading');
      setTimeout(() => {
        setRecommendations(generateRecommendations(answers));
        setIsLoading(false);
        setCurrentStep('results');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Career Path Finder
          </h1>
          <p className="text-gray-600 mb-6">
            Discover your ideal career through our personalized assessment
          </p>
        </div>

        {currentStep === 'welcome' && <WelcomeScreen onStart={handleStartQuiz} questionsLength={questions.length} />}

        {currentStep === 'questions' && (
          <Question
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {currentStep === 'loading' && <LoadingSpinner />}

        {currentStep === 'results' && (
          <Result 
            recommendations={recommendations} 
            onRestart={() => {
              setCurrentStep('welcome');
              setAnswers([]);
            }}
          />
        )}

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>
            Made on <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ZAPT</a>
          </p>
        </footer>
      </div>
    </div>
  );
}