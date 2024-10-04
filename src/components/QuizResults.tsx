import React from 'react';
import { QuizResultsProps } from '../types';
import { Award, RefreshCw } from 'lucide-react';

const QuizResults: React.FC<QuizResultsProps> = ({ score, questions, onRestart }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center mb-6">
        <Award className="w-10 h-10 text-yellow-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Quiz Results</h2>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-blue-600 mb-4">Your Score: {score} / 10</p>
        <p className="text-lg text-gray-600 mb-6">Great job! Here's how you can improve:</p>
      </div>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="font-semibold mb-2">{index + 1}. {question.text}</p>
            <p className="text-green-600 mb-2">Correct Answer: {question.correctAnswer}</p>
            <p className="text-gray-700"><strong>Advice:</strong> {question.advice}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onRestart}
        className="w-full mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Start New Quiz
      </button>
    </div>
  );
};

export default QuizResults;