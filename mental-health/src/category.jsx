import React, { useState, useEffect } from 'react';
import { AlertTriangle, CloudRain, Flame, MoonIcon, GraduationCap, UserX, Check, ArrowRight, ArrowLeft, User, Shield } from 'lucide-react';

// Categories data with icons and questions
const categories = [
  {
    id: 'anxiety',
    name: 'Anxiety',
    icon: AlertTriangle,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
    questions: [
      {
        question: "How often do you experience worry or nervousness?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you have trouble controlling your worrying thoughts?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How often do you experience physical symptoms like rapid heartbeat or sweating?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you avoid situations that make you anxious?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'depression',
    name: 'Depression',
    icon: CloudRain,
    color: 'from-gray-600 to-blue-600',
    bgColor: 'bg-gray-100',
    questions: [
      {
        question: "How often do you feel sad or hopeless?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Have you lost interest in activities you used to enjoy?",
        options: ["Not at all", "Slightly", "Moderately", "Considerably", "Completely"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How is your energy level throughout the day?",
        options: ["Very high", "High", "Normal", "Low", "Very low"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you have trouble concentrating on daily tasks?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'burnout',
    name: 'Burnout',
    icon: Flame,
    color: 'from-red-600 to-orange-600',
    bgColor: 'bg-red-100',
    questions: [
      {
        question: "How exhausted do you feel at the end of the day?",
        options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you feel emotionally drained from your responsibilities?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How cynical or negative have you become about your work/studies?",
        options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you feel like you're just going through the motions?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'insomnia',
    name: 'Sleep Issues',
    icon: MoonIcon,
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-100',
    questions: [
      {
        question: "How difficult is it for you to fall asleep?",
        options: ["Very easy", "Easy", "Moderate", "Difficult", "Very difficult"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How often do you wake up during the night?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How rested do you feel when you wake up?",
        options: ["Very rested", "Rested", "Neutral", "Tired", "Very tired"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How much does poor sleep affect your daily functioning?",
        options: ["Not at all", "Slightly", "Moderately", "Considerably", "Severely"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'academic-stress',
    name: 'Academic Stress',
    icon: GraduationCap,
    color: 'from-green-600 to-teal-600',
    bgColor: 'bg-green-100',
    questions: [
      {
        question: "How overwhelmed do you feel by your academic workload?",
        options: ["Not at all", "Slightly", "Moderately", "Very", "Extremely"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How often do you worry about your academic performance?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you have trouble managing your time effectively?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How much pressure do you feel to succeed academically?",
        options: ["No pressure", "Little", "Moderate", "High", "Extreme"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'social-isolation',
    name: 'Social Isolation',
    icon: UserX,
    color: 'from-purple-600 to-pink-600',
    bgColor: 'bg-purple-100',
    questions: [
      {
        question: "How often do you feel lonely?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How satisfied are you with your social connections?",
        options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "Do you avoid social situations or gatherings?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        scores: [0, 1, 2, 3, 4]
      },
      {
        question: "How difficult is it for you to reach out when you need support?",
        options: ["Very easy", "Easy", "Moderate", "Difficult", "Very difficult"],
        scores: [0, 1, 2, 3, 4]
      }
    ]
  }
];

const positiveMessages = [
  "You've taken an important step towards understanding your mental health. Every journey begins with awareness.",
  "Your willingness to reflect on your well-being shows strength and self-awareness.",
  "Remember, seeking help is a sign of courage, not weakness. You're not alone in this journey.",
  "Taking care of your mental health is just as important as taking care of your physical health.",
  "Every small step towards understanding yourself better is a victory worth celebrating."
];

const MentalHealthApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [allQuestions, setAllQuestions] = useState([]);
  const [results, setResults] = useState({});
  const [userName, setUserName] = useState('');

  // Generate all questions when categories are selected
  useEffect(() => {
    if (selectedCategories.length > 0) {
      const questions = [];
      selectedCategories.forEach(categoryId => {
        const category = categories.find(c => c.id === categoryId);
        category.questions.forEach((q, index) => {
          questions.push({
            ...q,
            categoryId,
            categoryName: category.name,
            questionId: `${categoryId}-${index}`
          });
        });
      });
      setAllQuestions(questions);
    }
  }, [selectedCategories]);

  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAnswer = (score) => {
    const currentQuestion = allQuestions[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.questionId]: score
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const categoryScores = {};
    
    selectedCategories.forEach(categoryId => {
      const categoryAnswers = Object.entries(answers).filter(
        ([questionId]) => questionId.startsWith(categoryId)
      );
      
      const totalScore = categoryAnswers.reduce((sum, [, score]) => sum + score, 0);
      const maxPossibleScore = 16; // 4 questions × 4 max score
      const percentage = (totalScore / maxPossibleScore) * 100;
      
      let level = 'Low';
      if (percentage > 75) level = 'Severe';
      else if (percentage > 50) level = 'High';
      else if (percentage > 25) level = 'Moderate';
      
      categoryScores[categoryId] = {
        score: totalScore,
        percentage: Math.round(percentage),
        level
      };
    });
    
    setResults(categoryScores);
    setCurrentScreen('results');
  };

  const resetApp = () => {
    setCurrentScreen('home');
    setSelectedCategories([]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setAllQuestions([]);
    setResults({});
    setUserName('');
  };

  const HomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 mr-3" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Mental Health Assessment</h1>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards understanding your mental well-being. Select the areas you'd like to explore.
          </p>
        </div>

        {/* 3x2 Grid Layout - No Scrolling Needed */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 max-w-5xl mx-auto">
            {categories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategories.includes(category.id);
              
              return (
                <div
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                >
                  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl p-6 md:p-8 border-2 transition-all min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center ${
                    isSelected ? 'border-indigo-500 ring-4 ring-indigo-200' : 'border-gray-200'
                  }`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 md:mb-6`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 leading-tight">
                      {category.name}
                    </h3>
                    {isSelected && (
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedCategories.length > 0 && (
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg mb-6 max-w-md mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  Selected: {selectedCategories.length} categories
                </p>
                <p className="text-sm text-gray-600">
                  You'll answer {selectedCategories.length * 4} questions total
                </p>
              </div>
              <button
                onClick={() => setCurrentScreen('assessment')}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const AssessmentScreen = () => {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestion?.questionId];
    const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;

    if (!currentQuestion) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestionIndex + 1} of {allQuestions.length}
                </span>
                <span className="text-sm text-indigo-600 font-medium">
                  {currentQuestion.categoryName}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.scores[index])}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      currentAnswer === currentQuestion.scores[index]
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestionIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={currentAnswer === undefined}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  currentAnswer === undefined
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg'
                }`}
              >
                {currentQuestionIndex === allQuestions.length - 1 ? 'Finish' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ResultsScreen = () => {
    const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
    const [reportSent, setReportSent] = useState(false);
    const [sendingReport, setSendingReport] = useState(false);
    
    const sendReportToConsultant = async () => {
      setSendingReport(true);
      
      // Simulate API call to send report to consultant
      setTimeout(() => {
        setReportSent(true);
        setSendingReport(false);
      }, 2000);
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-green-600 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Assessment Complete</h1>
            </div>
            {userName && (
              <p className="text-lg text-gray-600 mb-4">
                Assessment completed successfully!
              </p>
            )}
            <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-green-800 text-lg font-medium">
                {randomMessage}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.entries(results).map(([categoryId]) => {
              const category = categories.find(c => c.id === categoryId);
              const Icon = category.icon;
              
              return (
                <div key={categoryId} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Your responses for {category.name} have been recorded and will be reviewed by our mental health professionals.
                    </p>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Next Steps</h3>
            <p className="text-gray-600 mb-4">
              Your assessment has been completed successfully. Your responses are securely stored and will be reviewed by qualified mental health professionals who may reach out to provide personalized support and treatment recommendations.
            </p>
            <p className="text-sm text-gray-500">
              Remember: This assessment is not a diagnosis. Please consult with a qualified mental health professional for proper evaluation and treatment.
            </p>
          </div>

          {/* Send Report to Consultant Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share with Consultant</h3>
            <p className="text-gray-600 mb-6">
              Would you like to send your detailed assessment report directly to a mental health consultant for immediate review and personalized guidance?
            </p>
            
            {reportSent ? (
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">Report sent successfully!</p>
                    <p className="text-green-700 text-sm">
                      A consultant will review your assessment and contact you within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={sendReportToConsultant}
                disabled={sendingReport}
                className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center ${
                  sendingReport 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700'
                }`}
              >
                {sendingReport ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Report...
                  </>
                ) : (
                  <>
                    <User className="w-5 h-5 mr-2" />
                    Send Report to Consultant
                  </>
                )}
              </button>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={resetApp}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Take Another Assessment
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render current screen
  if (currentScreen === 'home') {
    return <HomeScreen />;
  } else if (currentScreen === 'assessment') {
    return <AssessmentScreen />;
  } else if (currentScreen === 'results') {
    return <ResultsScreen />;
  }

  return null;
};

export default MentalHealthApp;