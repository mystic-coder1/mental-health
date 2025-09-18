import React, { useState } from 'react';
import { Brain, Heart, Moon, Flame, Cloud, BookOpen, ArrowRight, Sparkles, Users, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const App = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const categories = [
    {
      id: 'anxiety',
      name: 'Anxiety & Stress',
      icon: Brain,
      description: 'Managing worry, fear, nervousness, and stress in daily life',
      detailedDescription: 'Explore techniques for managing persistent worry, racing thoughts, and stress responses',
      color: 'bg-gradient-to-br from-slate-50 to-gray-100 text-slate-700 border-slate-200 hover:border-slate-300',
      stats: '2.3k helped',
      questions: [
        {
          id: 1,
          question: "How often do you experience overwhelming worry or anxiety about everyday situations?",
          type: "scale",
          options: [
            { value: 1, label: "Rarely or never" },
            { value: 2, label: "Sometimes" },
            { value: 3, label: "Often" },
            { value: 4, label: "Almost always" }
          ]
        },
        {
          id: 2,
          question: "Which physical symptoms do you most commonly experience when anxious?",
          type: "multiple",
          options: [
            { value: "racing_heart", label: "Racing heart or palpitations" },
            { value: "sweating", label: "Sweating or trembling" },
            { value: "breathing", label: "Difficulty breathing or shortness of breath" },
            { value: "muscle_tension", label: "Muscle tension or headaches" },
            { value: "stomach", label: "Stomach issues or nausea" },
            { value: "none", label: "I don't experience physical symptoms" }
          ]
        },
        {
          id: 3,
          question: "What situations or triggers most commonly cause your anxiety?",
          type: "multiple",
          options: [
            { value: "social", label: "Social situations or meeting new people" },
            { value: "work", label: "Work deadlines or performance pressure" },
            { value: "future", label: "Uncertainty about the future" },
            { value: "health", label: "Health concerns for myself or loved ones" },
            { value: "money", label: "Financial worries" },
            { value: "daily", label: "Everyday tasks and responsibilities" }
          ]
        },
        {
          id: 4,
          question: "How do you currently cope when you feel anxious or stressed?",
          type: "multiple",
          options: [
            { value: "breathing", label: "Deep breathing or meditation" },
            { value: "exercise", label: "Physical exercise or movement" },
            { value: "friends", label: "Talking to friends or family" },
            { value: "distraction", label: "Distraction (TV, social media, games)" },
            { value: "avoidance", label: "Avoiding the situation entirely" },
            { value: "professional", label: "Professional help or therapy" },
            { value: "none", label: "I don't have effective coping strategies" }
          ]
        }
      ]
    },
    {
      id: 'social_isolation',
      name: 'Social Connection',
      icon: Heart,
      description: 'Building meaningful relationships and reducing feelings of loneliness',
      detailedDescription: 'Strengthen social bonds and overcome feelings of disconnection from others',
      color: 'bg-gradient-to-br from-rose-50 to-pink-100 text-rose-700 border-rose-200 hover:border-rose-300',
      stats: '1.8k helped',
      questions: [
        {
          id: 1,
          question: "How would you describe your current social connections?",
          type: "single",
          options: [
            { value: "strong", label: "I have strong, meaningful relationships" },
            { value: "few_close", label: "I have a few close friends but want more connections" },
            { value: "surface", label: "I have acquaintances but few deep relationships" },
            { value: "isolated", label: "I feel quite isolated and lonely most of the time" }
          ]
        },
        {
          id: 2,
          question: "What barriers prevent you from forming or maintaining social connections?",
          type: "multiple",
          options: [
            { value: "anxiety", label: "Social anxiety or fear of judgment" },
            { value: "time", label: "Lack of time due to work or responsibilities" },
            { value: "opportunities", label: "Limited opportunities to meet like-minded people" },
            { value: "trust", label: "Difficulty trusting or opening up to others" },
            { value: "energy", label: "Low energy or motivation for social activities" },
            { value: "skills", label: "Uncertainty about how to start or maintain friendships" }
          ]
        },
        {
          id: 3,
          question: "In which settings do you feel most comfortable meeting new people?",
          type: "multiple",
          options: [
            { value: "work", label: "Work or professional environments" },
            { value: "hobbies", label: "Hobby groups or classes" },
            { value: "online", label: "Online communities or dating apps" },
            { value: "events", label: "Social events or parties" },
            { value: "volunteering", label: "Volunteering or community service" },
            { value: "small", label: "Small, intimate gatherings" },
            { value: "none", label: "I struggle in all social settings" }
          ]
        },
        {
          id: 4,
          question: "What would make you feel most fulfilled in your social relationships?",
          type: "single",
          options: [
            { value: "deep", label: "Having deeper, more meaningful conversations" },
            { value: "activities", label: "Sharing activities and experiences with others" },
            { value: "support", label: "Having reliable emotional support when needed" },
            { value: "fun", label: "More opportunities for fun and laughter" },
            { value: "understanding", label: "Being truly understood and accepted" }
          ]
        }
      ]
    },
    {
      id: 'insomnia',
      name: 'Sleep & Rest',
      icon: Moon,
      description: 'Improving sleep quality and establishing healthy rest patterns',
      detailedDescription: 'Develop better sleep habits and address difficulties with falling or staying asleep',
      color: 'bg-gradient-to-br from-indigo-50 to-purple-100 text-indigo-700 border-indigo-200 hover:border-indigo-300',
      stats: '3.1k helped',
      questions: [
        {
          id: 1,
          question: "What is your biggest challenge with sleep?",
          type: "single",
          options: [
            { value: "falling_asleep", label: "Difficulty falling asleep (taking more than 30 minutes)" },
            { value: "staying_asleep", label: "Waking up frequently during the night" },
            { value: "early_waking", label: "Waking up too early and can't go back to sleep" },
            { value: "quality", label: "Poor sleep quality - feeling tired even after sleeping" },
            { value: "schedule", label: "Irregular sleep schedule or timing issues" }
          ]
        },
        {
          id: 2,
          question: "How many hours of sleep do you typically get on weeknights?",
          type: "single",
          options: [
            { value: "less_5", label: "Less than 5 hours" },
            { value: "5_6", label: "5-6 hours" },
            { value: "6_7", label: "6-7 hours" },
            { value: "7_8", label: "7-8 hours" },
            { value: "more_8", label: "More than 8 hours" }
          ]
        },
        {
          id: 3,
          question: "What factors most commonly interfere with your sleep?",
          type: "multiple",
          options: [
            { value: "racing_thoughts", label: "Racing thoughts or worry" },
            { value: "screens", label: "Screen time before bed (phone, TV, computer)" },
            { value: "caffeine", label: "Caffeine or late meals" },
            { value: "noise", label: "Noise or environmental factors" },
            { value: "stress", label: "Work stress or life pressures" },
            { value: "physical", label: "Physical discomfort or pain" },
            { value: "schedule", label: "Irregular work or life schedule" }
          ]
        },
        {
          id: 4,
          question: "What does your typical bedtime routine look like?",
          type: "single",
          options: [
            { value: "consistent", label: "I have a consistent, relaxing bedtime routine" },
            { value: "basic", label: "Basic routine but could be more consistent" },
            { value: "screens", label: "Usually involves screens or stimulating activities" },
            { value: "rushed", label: "Rushed - I go straight to bed when exhausted" },
            { value: "none", label: "No real routine - bedtime varies greatly" }
          ]
        }
      ]
    },
    {
      id: 'burnout',
      name: 'Energy & Motivation',
      icon: Flame,
      description: 'Restoring energy levels and finding motivation in daily activities',
      detailedDescription: 'Combat exhaustion and rediscover passion for work, studies, and personal goals',
      color: 'bg-gradient-to-br from-orange-50 to-amber-100 text-orange-700 border-orange-200 hover:border-orange-300',
      stats: '1.5k helped',
      questions: [
        {
          id: 1,
          question: "How would you describe your current energy levels?",
          type: "scale",
          options: [
            { value: 1, label: "Completely drained - struggling with basic tasks" },
            { value: 2, label: "Low energy - getting by but not thriving" },
            { value: 3, label: "Moderate energy - some good days, some bad" },
            { value: 4, label: "Generally energetic with occasional low periods" }
          ]
        },
        {
          id: 2,
          question: "Which areas of your life feel most draining right now?",
          type: "multiple",
          options: [
            { value: "work", label: "Work or career responsibilities" },
            { value: "relationships", label: "Relationships or family obligations" },
            { value: "health", label: "Health or physical concerns" },
            { value: "finances", label: "Financial stress or money management" },
            { value: "goals", label: "Personal goals or self-improvement efforts" },
            { value: "social", label: "Social expectations or commitments" },
            { value: "everything", label: "Everything feels overwhelming right now" }
          ]
        },
        {
          id: 3,
          question: "What activities or experiences typically give you the most energy?",
          type: "multiple",
          options: [
            { value: "nature", label: "Being in nature or outdoors" },
            { value: "creative", label: "Creative activities (art, music, writing)" },
            { value: "exercise", label: "Physical exercise or movement" },
            { value: "social", label: "Quality time with loved ones" },
            { value: "learning", label: "Learning something new or challenging" },
            { value: "helping", label: "Helping others or making a difference" },
            { value: "solitude", label: "Quiet time alone to recharge" },
            { value: "unsure", label: "I'm not sure what energizes me anymore" }
          ]
        },
        {
          id: 4,
          question: "How often do you engage in activities that truly energize you?",
          type: "single",
          options: [
            { value: "daily", label: "Daily - I prioritize energizing activities" },
            { value: "weekly", label: "A few times per week" },
            { value: "monthly", label: "Occasionally, maybe once a month" },
            { value: "rarely", label: "Rarely - I'm usually too busy or tired" },
            { value: "never", label: "Almost never - I've lost touch with what I enjoy" }
          ]
        }
      ]
    },
    {
      id: 'depression',
      name: 'Mood & Wellness',
      icon: Cloud,
      description: 'Enhancing overall mood and emotional well-being',
      detailedDescription: 'Address feelings of sadness and work toward improved emotional balance',
      color: 'bg-gradient-to-br from-gray-50 to-slate-100 text-gray-700 border-gray-200 hover:border-gray-300',
      stats: '2.7k helped',
      questions: [
        {
          id: 1,
          question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
          type: "scale",
          options: [
            { value: 1, label: "Not at all" },
            { value: 2, label: "Several days" },
            { value: 3, label: "More than half the days" },
            { value: 4, label: "Nearly every day" }
          ]
        },
        {
          id: 2,
          question: "Which symptoms have you experienced recently?",
          type: "multiple",
          options: [
            { value: "interest", label: "Loss of interest in activities you used to enjoy" },
            { value: "sleep", label: "Changes in sleep patterns (too much or too little)" },
            { value: "appetite", label: "Changes in appetite or weight" },
            { value: "concentration", label: "Difficulty concentrating or making decisions" },
            { value: "fatigue", label: "Feeling tired or having little energy" },
            { value: "worthless", label: "Feelings of worthlessness or inappropriate guilt" },
            { value: "restless", label: "Feeling restless or slowed down" }
          ]
        },
        {
          id: 3,
          question: "What tends to improve your mood, even slightly?",
          type: "multiple",
          options: [
            { value: "sunlight", label: "Getting sunlight or spending time outdoors" },
            { value: "exercise", label: "Light physical activity or movement" },
            { value: "connection", label: "Connecting with supportive people" },
            { value: "routine", label: "Having structure or routine in my day" },
            { value: "creative", label: "Creative expression or hobbies" },
            { value: "helping", label: "Helping others or acts of kindness" },
            { value: "meditation", label: "Mindfulness or meditation practices" },
            { value: "nothing", label: "Nothing seems to help much right now" }
          ]
        },
        {
          id: 4,
          question: "How is your mood affecting your daily life and relationships?",
          type: "single",
          options: [
            { value: "minimal", label: "Minimal impact - I'm managing most responsibilities" },
            { value: "some", label: "Some impact - certain areas are more challenging" },
            { value: "significant", label: "Significant impact - struggling with work or relationships" },
            { value: "severe", label: "Severe impact - difficult to function in most areas" }
          ]
        }
      ]
    },
    {
      id: 'academic_stress',
      name: 'Academic Success',
      icon: BookOpen,
      description: 'Managing study pressure and achieving academic balance',
      detailedDescription: 'Develop effective study strategies and manage academic workload stress',
      color: 'bg-gradient-to-br from-blue-50 to-cyan-100 text-blue-700 border-blue-200 hover:border-blue-300',
      stats: '1.9k helped',
      questions: [
        {
          id: 1,
          question: "What is your biggest academic challenge right now?",
          type: "single",
          options: [
            { value: "procrastination", label: "Procrastination and time management" },
            { value: "motivation", label: "Lack of motivation or interest in studies" },
            { value: "workload", label: "Overwhelming workload or too many commitments" },
            { value: "understanding", label: "Difficulty understanding course material" },
            { value: "performance", label: "Test anxiety or performance pressure" },
            { value: "balance", label: "Balancing academics with other life demands" }
          ]
        },
        {
          id: 2,
          question: "How do you typically approach studying and assignments?",
          type: "single",
          options: [
            { value: "planned", label: "I plan ahead and work consistently" },
            { value: "mixed", label: "I plan sometimes but often fall behind" },
            { value: "lastminute", label: "I usually wait until the last minute" },
            { value: "overwhelmed", label: "I feel overwhelmed and don't know where to start" },
            { value: "perfectionist", label: "I spend too much time trying to make everything perfect" }
          ]
        },
        {
          id: 3,
          question: "What environments and conditions help you study most effectively?",
          type: "multiple",
          options: [
            { value: "quiet", label: "Quiet, distraction-free spaces" },
            { value: "music", label: "Background music or white noise" },
            { value: "library", label: "Libraries or study halls" },
            { value: "home", label: "My own room or home environment" },
            { value: "groups", label: "Study groups or with classmates" },
            { value: "breaks", label: "Regular breaks and movement" },
            { value: "morning", label: "Morning hours when I'm fresh" },
            { value: "unsure", label: "I'm not sure what works best for me" }
          ]
        },
        {
          id: 4,
          question: "How does academic stress affect other areas of your life?",
          type: "multiple",
          options: [
            { value: "sleep", label: "Disrupts my sleep patterns" },
            { value: "relationships", label: "Strains relationships with family/friends" },
            { value: "health", label: "Affects my physical health or eating habits" },
            { value: "mood", label: "Causes anxiety, depression, or mood swings" },
            { value: "activities", label: "Prevents me from enjoying hobbies or social activities" },
            { value: "confidence", label: "Undermines my confidence and self-esteem" },
            { value: "minimal", label: "Has minimal impact on other life areas" }
          ]
        }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, value, isMultiple = false) => {
    setAnswers(prev => {
      if (isMultiple) {
        const currentAnswers = prev[questionId] || [];
        if (currentAnswers.includes(value)) {
          return {
            ...prev,
            [questionId]: currentAnswers.filter(v => v !== value)
          };
        } else {
          return {
            ...prev,
            [questionId]: [...currentAnswers, value]
          };
        }
      } else {
        return {
          ...prev,
          [questionId]: value
        };
      }
    });
  };

  const getCurrentQuestion = () => {
    return selectedCategory?.questions[currentQuestionIndex];
  };

  const isCurrentQuestionAnswered = () => {
    const currentQuestion = getCurrentQuestion();
    const answer = answers[currentQuestion?.id];
    
    if (currentQuestion?.type === 'multiple') {
      return answer && answer.length > 0;
    }
    return answer !== undefined && answer !== '';
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
      setCurrentStep('results');
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep('welcome');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}></div>
          <div className="relative p-4 sm:p-6 rounded-full" style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Your Journey to
          <span className="block bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(135deg, #585182, #6366f1)`}}>
            Better Mental Health
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Take a personalized assessment and discover evidence-based strategies tailored specifically for your mental wellness journey.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" style={{color: '#585182'}} />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">12k+</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">People helped</p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Average rating</p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">95%</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Success rate</p>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep('categories')}
          className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}
        >
          <span className="mr-2">Start Your Assessment</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Features Preview */}
      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
          What You'll Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="p-3 sm:p-4 rounded-xl inline-block mb-4" style={{backgroundColor: '#f3f4f6', border: '2px solid #e5e7eb'}}>
              <Brain className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#585182'}} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Personalized Assessment</h3>
            <p className="text-sm sm:text-base text-gray-600">Scientifically-backed evaluation tailored to your unique situation</p>
          </div>
          
          <div className="text-center">
            <div className="p-3 sm:p-4 rounded-xl inline-block mb-4" style={{backgroundColor: '#f3f4f6', border: '2px solid #e5e7eb'}}>
              <Heart className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#585182'}} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Custom Strategies</h3>
            <p className="text-sm sm:text-base text-gray-600">Evidence-based techniques designed specifically for your needs</p>
          </div>
          
          <div className="text-center">
            <div className="p-3 sm:p-4 rounded-xl inline-block mb-4" style={{backgroundColor: '#f3f4f6', border: '2px solid #e5e7eb'}}>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" style={{color: '#585182'}} />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
            <p className="text-sm sm:text-base text-gray-600">Continuous guidance and resources for your wellness journey</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Category Selection Component
  const CategorySelection = () => (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8 sm:mb-12">
        <button
          onClick={() => setCurrentStep('welcome')}
          className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          What would you like to
          <span className="block bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(135deg, #585182, #6366f1)`}}>
            focus on today?
          </span>
        </h1>
        
        <p className="text-base sm:text-lg text-gray-600 mb-2 max-w-2xl mx-auto px-4">
          Choose the area that best describes what you're experiencing right now.
        </p>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-4">
          Don't worry if multiple areas resonate with you - you can explore others later.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentStep('questions');
                setCurrentQuestionIndex(0);
                setAnswers({});
              }}
              className={`group relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 text-left ${category.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-white bg-opacity-70 rounded-lg group-hover:bg-opacity-100 transition-all">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 group-hover:text-opacity-90">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-70">
                  {category.stats}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">
          Not sure which category fits best?
        </p>
        <button
          onClick={() => setCurrentStep('welcome')}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Take a moment to read through each option above
        </button>
      </div>
    </div>
  );

  // Questions Component
  const QuestionsScreen = () => {
    const currentQuestion = getCurrentQuestion();
    const progress = ((currentQuestionIndex + 1) / selectedCategory.questions.length) * 100;
    
    if (!currentQuestion) return null;

    return (
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={() => {
              if (currentQuestionIndex === 0) {
                setCurrentStep('categories');
                setSelectedCategory(null);
                setAnswers({});
              } else {
                prevQuestion();
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {currentQuestionIndex === 0 ? 'Back to Categories' : 'Previous Question'}
          </button>

          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>{selectedCategory.name}</span>
              <span>{currentQuestionIndex + 1} of {selectedCategory.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(135deg, #585182, #6366f1)`
                }}
              />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Question Content */}
        <div className="space-y-3 mb-8">
          {currentQuestion.type === 'scale' && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-purple-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    backgroundColor: answers[currentQuestion.id] === option.value ? '#f8f9ff' : 'white',
                    borderColor: answers[currentQuestion.id] === option.value ? '#585182' : undefined
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{option.label}</span>
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[currentQuestion.id] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'single' && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-purple-500 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    backgroundColor: answers[currentQuestion.id] === option.value ? '#f8f9ff' : 'white',
                    borderColor: answers[currentQuestion.id] === option.value ? '#585182' : undefined
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{option.label}</span>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion.id] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'multiple' && (
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id]?.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentQuestion.id, option.value, true)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      isSelected
                        ? 'border-purple-500 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{
                      backgroundColor: isSelected ? '#f8f9ff' : 'white',
                      borderColor: isSelected ? '#585182' : undefined
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{option.label}</span>
                      <div className={`w-4 h-4 rounded border-2 ${
                        isSelected
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {isSelected && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              currentQuestionIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={!isCurrentQuestionAnswered()}
            className={`px-6 py-3 rounded-xl font-medium text-white transition-all ${
              isCurrentQuestionAnswered()
                ? 'hover:scale-105 shadow-lg hover:shadow-xl'
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={{
              background: isCurrentQuestionAnswered() 
                ? `linear-gradient(135deg, #585182, #6366f1)` 
                : '#d1d5db'
            }}
          >
            {currentQuestionIndex === selectedCategory.questions.length - 1 ? 'Get Results' : 'Next'}
          </button>
        </div>
      </div>
    );
  };

  // Results Component
  const ResultsScreen = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}></div>
          <div className="relative p-6 rounded-full" style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Personalized
          <span className="block bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(135deg, #585182, #6366f1)`}}>
            Mental Health Plan
          </span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Based on your responses about {selectedCategory?.name.toLowerCase()}, here are evidence-based strategies tailored for you.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Assessment Summary</h2>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-xl">
            <div className="p-2 rounded-lg mr-4" style={{backgroundColor: '#585182'}}>
              {React.createElement(selectedCategory?.icon, { className: 'w-6 h-6 text-white' })}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Focus Area</h3>
              <p className="text-gray-600">{selectedCategory?.name}</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-gray-50 rounded-xl">
            <div className="p-2 bg-green-500 rounded-lg mr-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Questions Completed</h3>
              <p className="text-gray-600">{selectedCategory?.questions.length} comprehensive questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Actions</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Practice 5-minute daily mindfulness</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Establish a consistent daily routine</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Connect with one supportive person today</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Long-term Strategies</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Develop coping skills for triggers</span>
            </li>
            <li className="flex items-start">
              <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Build a strong support network</span>
            </li>
            <li className="flex items-start">
              <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Consider professional guidance</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Your Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-full p-4 inline-block mb-3">
              <span className="text-2xl font-bold" style={{color: '#585182'}}>1</span>
            </div>
            <h4 className="font-semibold mb-2">Start Today</h4>
            <p className="text-sm text-gray-600">Begin with the immediate actions listed above</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-4 inline-block mb-3">
              <span className="text-2xl font-bold" style={{color: '#585182'}}>2</span>
            </div>
            <h4 className="font-semibold mb-2">Track Progress</h4>
            <p className="text-sm text-gray-600">Monitor your mood and symptoms daily</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-4 inline-block mb-3">
              <span className="text-2xl font-bold" style={{color: '#585182'}}>3</span>
            </div>
            <h4 className="font-semibold mb-2">Seek Support</h4>
            <p className="text-sm text-gray-600">Reach out to professionals when needed</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/"
          onClick={resetAssessment}
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl mr-4"
          style={{background: `linear-gradient(135deg, #585182, #6366f1)`}}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Home
        </Link>
        
        <button
          className="inline-flex items-center px-8 py-4 text-lg font-medium border-2 rounded-xl transition-all duration-200 hover:shadow-lg"
          style={{borderColor: '#585182', color: '#585182'}}
        >
          Download Results
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  // Main render logic
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {currentStep === 'welcome' && <WelcomeScreen />}
        {currentStep === 'categories' && <CategorySelection />}
        {currentStep === 'questions' && <QuestionsScreen />}
        {currentStep === 'results' && <ResultsScreen />}
      </div>
      
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
      `}</style>
    </div>
  );
};

export default App;