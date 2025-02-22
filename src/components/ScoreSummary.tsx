import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ScoreSummaryProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
}

export default function ScoreSummary({ currentQuestionIndex, totalQuestions, score }: ScoreSummaryProps) {
  const percentage = currentQuestionIndex > 0 
    ? Math.round((score / currentQuestionIndex) * 100) 
    : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">Score Summary</h3>
        </div>
        <span className="text-2xl font-bold text-indigo-600">{percentage}%</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Correct Answers</span>
          <span className="font-medium">{score}/{currentQuestionIndex}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Questions Remaining</span>
          <span className="font-medium">{totalQuestions - currentQuestionIndex}</span>
        </div>
      </div>
    </div>
  );
}
