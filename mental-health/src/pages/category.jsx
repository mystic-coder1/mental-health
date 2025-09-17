import React, { useState } from 'react';
// import WelcomeScreen from './WelcomeScreen';
// import CategorySelection from './CategorySelection';
// import QuestionScreen from './QuestionScreen';
// import ResultsScreen from './ResultsScreen';
// import { Brain, Heart, Moon, Flame, Cloud, BookOpen } from 'heroicons-react';

const App = () => {
  const [currentStep, setCurrentStep] = useState('welcome');

  const categories = [
    {
      id: 'anxiety',
      name: 'Anxiety & Stress',
      icon: Brain,
      description: 'Managing worry, fear, nervousness, and stress in daily life',
      detailedDescription: 'Explore techniques for managing persistent worry, racing thoughts, and stress responses',
      // Swapped: use main bg color for category card
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700 border-purple-200'
    },
    {
      id: 'social_isolation',
      name: 'Social Connection',
      icon: Heart,
      description: 'Building meaningful relationships and reducing feelings of loneliness',
      detailedDescription: 'Strengthen social bonds and overcome feelings of disconnection from others',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-pink-700 border-pink-200'
    },
    {
      id: 'insomnia',
      name: 'Sleep & Rest',
      icon: Moon,
      description: 'Improving sleep quality and establishing healthy rest patterns',
      detailedDescription: 'Develop better sleep habits and address difficulties with falling or staying asleep',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'burnout',
      name: 'Energy & Motivation',
      icon: Flame,
      description: 'Restoring energy levels and finding motivation in daily activities',
      detailedDescription: 'Combat exhaustion and rediscover passion for work, studies, and personal goals',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-orange-700 border-orange-200'
    },
    {
      id: 'depression',
      name: 'Mood & Wellness',
      icon: Cloud,
      description: 'Enhancing overall mood and emotional well-being',
      detailedDescription: 'Address feelings of sadness and work toward improved emotional balance',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-gray-700 border-gray-200'
    },
    {
      id: 'academic_stress',
      name: 'Academic Success',
      icon: BookOpen,
      description: 'Managing study pressure and achieving academic balance',
      detailedDescription: 'Develop effective study strategies and manage academic workload stress',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50 text-blue-700 border-blue-200'
    }
  ];

  return (
    // Swapped: use previous category card color for main background
    <div className="min-h-screen bg-white py-8 px-4">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="container mx-auto max-w-7xl">
        {currentStep === 'welcome' && <WelcomeScreen />}
        {currentStep === 'categories' && <CategorySelection />}
        {currentStep === 'questions' && <QuestionScreen />}
        {currentStep === 'results' && <ResultsScreen />}
      </div>
    </div>
  );
}

export default App;
