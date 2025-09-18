import React, { useState, useEffect } from 'react';
import { Camera, Users, Gamepad2, Share2, UserCheck, Play, Pause, RotateCcw, Heart, Star, MessageCircle, Menu, X, Target, Zap, Brain, Waves, TreePine, Music, Award, TrendingUp, ChevronRight, Sparkles, Activity } from 'lucide-react';

const ARWellnessApp = () => {
  const [activeFeature, setActiveFeature] = useState('breathing');
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathCount, setBreathCount] = useState(0);
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // New game states
  const [focusGame, setFocusGame] = useState({ score: 0, level: 1, timeLeft: 30, isActive: false });
  const [memoryCards, setMemoryCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [stressLevel, setStressLevel] = useState(5);
  const [moodJournal, setMoodJournal] = useState([]);
  const [currentMood, setCurrentMood] = useState(5);
  const [progressStats, setProgressStats] = useState({
    totalSessions: 47,
    streak: 12,
    minutesMeditated: 340,
    stressReduction: 73
  });

  // ML-based recommendations
  const [mlRecommendations, setMlRecommendations] = useState([
    { activity: 'Breathing Exercise', confidence: 92, reason: 'High stress indicators detected' },
    { activity: 'Memory Game', confidence: 87, reason: 'Focus training recommended' },
    { activity: 'Sound Therapy', confidence: 78, reason: 'Based on your evening routine' }
  ]);

  const affirmations = [
    "You are capable of amazing things",
    "Today brings new opportunities for growth",
    "You deserve peace and happiness in your life",
    "Your potential is limitless and beautiful",
    "You are stronger than any challenge you face",
    "Every breath brings you closer to inner peace"
  ];

  const features = [
    {
      id: 'breathing',
      title: 'AR Breathing Orb',
      icon: <Activity className="w-5 h-5" />,
      description: 'AI-guided breathing with biometric feedback',
      category: 'Mindfulness'
    },
    {
      id: 'mindfulness',
      title: 'Mindful Spaces',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Immersive AR environments for meditation',
      category: 'Environments'
    },
    {
      id: 'mirror',
      title: 'Positive Affirmations',
      icon: <Heart className="w-5 h-5" />,
      description: 'Personalized affirmations with emotion detection',
      category: 'Wellness'
    },
    {
      id: 'games',
      title: 'Zen Garden',
      icon: <Gamepad2 className="w-5 h-5" />,
      description: 'Interactive stress relief through play',
      category: 'Games'
    },
    {
      id: 'focus-training',
      title: 'Focus Training',
      icon: <Target className="w-5 h-5" />,
      description: 'Adaptive concentration exercises',
      category: 'Training'
    },
    {
      id: 'memory-match',
      title: 'Memory Enhancement',
      icon: <Brain className="w-5 h-5" />,
      description: 'Cognitive training with nature themes',
      category: 'Training'
    },
    {
      id: 'mood-tracker',
      title: 'Mood Analytics',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'AI-powered emotional wellness tracking',
      category: 'Analytics'
    },
    {
      id: 'sound-therapy',
      title: 'Adaptive Soundscapes',
      icon: <Music className="w-5 h-5" />,
      description: 'ML-curated audio for optimal relaxation',
      category: 'Therapy'
    },
    {
      id: 'progress',
      title: 'Progress Dashboard',
      icon: <Award className="w-5 h-5" />,
      description: 'Comprehensive wellness analytics',
      category: 'Analytics'
    },
    {
      id: 'community',
      title: 'Wellness Community',
      icon: <Share2 className="w-5 h-5" />,
      description: 'Connect with like-minded individuals',
      category: 'Social'
    },
    {
      id: 'consultancy',
      title: 'Expert Consultation',
      icon: <UserCheck className="w-5 h-5" />,
      description: 'Professional mental health support',
      category: 'Support'
    }
  ];

  // ML-based functions
  const analyzeUserBehavior = () => {
    const timeOfDay = new Date().getHours();
    const recentActivity = features.find(f => f.id === activeFeature);
    
    // Simulate ML recommendations based on time and activity
    if (timeOfDay < 12) {
      return { recommendation: 'breathing', reason: 'Morning energy boost recommended' };
    } else if (timeOfDay > 18) {
      return { recommendation: 'sound-therapy', reason: 'Evening relaxation optimal' };
    }
    return { recommendation: 'mindfulness', reason: 'Midday stress relief suggested' };
  };

  const predictOptimalSession = () => {
    // Simulate ML prediction for session duration
    const avgMood = moodJournal.length > 0 ? 
      moodJournal.reduce((sum, entry) => sum + entry.mood, 0) / moodJournal.length : 5;
    
    if (avgMood < 4) return '15-20 minutes recommended for mood boost';
    if (avgMood > 7) return '5-10 minutes for maintenance';
    return '10-15 minutes optimal for your current state';
  };

  // Game functions
  const initializeMemoryGame = () => {
    const symbols = ['🌸', '🍃', '💧', '☀️', '🌙', '⭐', '🦋', '🌺'];
    const cards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol, flipped: false }));
    setMemoryCards(cards);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const flipCard = (cardId) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (matchedCards.includes(cardId)) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const card1 = memoryCards.find(c => c.id === newFlipped[0]);
      const card2 = memoryCards.find(c => c.id === newFlipped[1]);
      
      if (card1.symbol === card2.symbol) {
        setMatchedCards(prev => [...prev, ...newFlipped]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const startFocusGame = () => {
    setFocusGame({ score: 0, level: 1, timeLeft: 30, isActive: true });
    const timer = setInterval(() => {
      setFocusGame(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(timer);
          return { ...prev, timeLeft: 0, isActive: false };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  const hitTarget = () => {
    setFocusGame(prev => ({
      ...prev,
      score: prev.score + 10,
      level: Math.floor(prev.score / 100) + 1
    }));
  };

  const logMood = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: currentMood,
      stress: stressLevel,
      time: new Date().toLocaleTimeString()
    };
    setMoodJournal(prev => [newEntry, ...prev.slice(0, 6)]);
  };

  const startBreathingExercise = () => {
    setIsBreathing(true);
    setBreathCount(prev => prev + 1);
    setTimeout(() => setIsBreathing(false), 4000);
  };

  // Initialize memory game on component mount
  useEffect(() => {
    initializeMemoryGame();
  }, []);

  useEffect(() => {
    if (activeFeature === 'mirror') {
      const interval = setInterval(() => {
        setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeFeature]);

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case 'breathing':
        const mlSuggestion = predictOptimalSession();
        return (
          <div className="space-y-8">
            {/* ML Recommendation Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-[#585182]" />
                <h4 className="font-semibold text-gray-800">AI Recommendation</h4>
              </div>
              <p className="text-gray-700 mb-2">{mlSuggestion}</p>
              <p className="text-sm text-gray-600">Based on your recent activity and time patterns</p>
            </div>
            
            <div className="text-center space-y-8">
              <div className="relative mx-auto w-56 h-56 flex items-center justify-center">
                <div className={`w-40 h-40 rounded-full transition-all duration-4000 ${
                  isBreathing ? 'scale-125 opacity-80' : 'scale-100 opacity-100'
                } bg-gradient-to-br from-[#585182] via-purple-400 to-pink-300 shadow-2xl`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className={`w-16 h-16 text-white transition-all duration-1000 drop-shadow-lg ${
                    isBreathing ? 'scale-110' : 'scale-100'
                  }`} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">Follow the gentle rhythm of your breathing orb</p>
                  <div className="inline-flex items-center gap-2 bg-[#585182]/10 px-4 py-2 rounded-full">
                    <Activity className="w-4 h-4 text-[#585182]" />
                    <span className="text-2xl font-bold text-[#585182]">{breathCount} breaths</span>
                  </div>
                </div>
                
                <button
                  onClick={startBreathingExercise}
                  className="bg-[#585182] text-white px-8 py-4 rounded-xl hover:bg-[#474070] transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
                  disabled={isBreathing}
                >
                  {isBreathing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  <span className="font-semibold text-lg">
                    {isBreathing ? 'Breathing in harmony...' : 'Begin Breathing Session'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'mindfulness':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Immersive AR Environments</h3>
              <p className="text-gray-600">Transform your space with AI-curated calming visuals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Serene Ocean', color: 'from-blue-400 to-cyan-300', animation: 'animate-pulse' },
                { name: 'Mystic Forest', color: 'from-green-400 to-emerald-300', animation: 'animate-bounce' },
                { name: 'Starlit Desert', color: 'from-purple-400 to-violet-300', animation: 'animate-ping' },
                { name: 'Golden Meadow', color: 'from-yellow-400 to-orange-300', animation: 'animate-pulse' }
              ].map((env, index) => (
                <button
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${env.color} text-white hover:scale-105 transition-all duration-500 shadow-xl`}
                >
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-white/30 rounded-full mx-auto mb-4 ${env.animation} backdrop-blur-sm`}></div>
                    <h4 className="text-xl font-bold mb-2">{env.name}</h4>
                    <p className="text-sm opacity-90">Immerse yourself in tranquility</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'mirror':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Personal Affirmation Mirror</h3>
              <p className="text-gray-600">AI-powered positive reinforcement tailored to your needs</p>
            </div>
            
            <div className="relative">
              <div className="relative border-4 border-[#585182] rounded-2xl p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 min-h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                <div className="relative z-10 text-center max-w-md">
                  <div className="mb-6">
                    <Sparkles className="w-8 h-8 text-[#585182] mx-auto mb-3 animate-spin" />
                    <h4 className="text-xl font-bold text-[#585182] mb-4">Today's Personal Message</h4>
                  </div>
                  <p className="text-2xl text-gray-800 font-medium italic leading-relaxed">
                    "{affirmations[currentAffirmation]}"
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-2 mt-6">
                {affirmations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAffirmation(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentAffirmation ? 'bg-[#585182] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      // Additional cases for other features would continue here...
      // For brevity, I'll show the structure for the remaining cases

      case 'games':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Zen Garden Experience</h3>
              <p className="text-gray-600">Create beautiful patterns and find inner peace through mindful interaction</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#585182] to-purple-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8" />
                <h4 className="text-3xl font-bold">Digital Zen Garden</h4>
              </div>
              <div className="text-4xl font-bold mb-4">{gameScore} points</div>
              <p className="opacity-90">Click the stones to create ripples of tranquility</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGameScore(prev => prev + 10)}
                  className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#585182] hover:to-purple-600 hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center border-2 border-gray-200 hover:border-[#585182] transform hover:scale-105 shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-current opacity-40 animate-pulse"></div>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setGameScore(0)}
              className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 font-semibold"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Garden
            </button>
          </div>
        );

      // Continue with other cases...
      default:
        return (
          <div className="text-center py-16">
            <div className="mb-6">
              <Sparkles className="w-16 h-16 text-[#585182] mx-auto mb-4 animate-spin" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Welcome to AR Wellness</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Select a feature from the sidebar to begin your personalized wellness journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {mlRecommendations.map((rec, index) => (
                <div key={index} className="bg-gradient-to-br from-[#585182]/10 to-purple-100 rounded-xl p-6 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <Brain className="w-6 h-6 text-[#585182]" />
                    <span className="text-sm font-bold text-[#585182]">{rec.confidence}% match</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{rec.activity}</h4>
                  <p className="text-sm text-gray-600">{rec.reason}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#585182] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#585182] to-purple-600 bg-clip-text text-transparent">
                  AR Wellness
                </h1>
                <p className="text-sm text-gray-600 font-medium">Transform Your Space, Transform Your Mind</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-purple-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className={`lg:col-span-4 xl:col-span-3 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#585182]" />
                Wellness Features
              </h2>
              
              <div className="space-y-2">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      setActiveFeature(feature.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border group hover:scale-105 ${
                      activeFeature === feature.id
                        ? 'bg-gradient-to-r from-[#585182] to-purple-600 text-white border-[#585182] shadow-lg'
                        : 'bg-white/50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:border-purple-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          activeFeature === feature.id ? 'bg-white/20' : 'bg-purple-100'
                        }`}>
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{feature.title}</p>
                          <p className={`text-xs ${
                            activeFeature === feature.id ? 'text-purple-100' : 'text-gray-500'
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeFeature === feature.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-purple-100 p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-[#585182] to-purple-600 rounded-xl text-white">
                  {features.find(f => f.id === activeFeature)?.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {features.find(f => f.id === activeFeature)?.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {features.find(f => f.id === activeFeature)?.description}
                  </p>
                </div>
              </div>
              
              <div className="min-h-96">
                {renderFeatureContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-lg border-t border-purple-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#585182] to-purple-600 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#585182] to-purple-600 bg-clip-text text-transparent">
                AR Wellness Platform
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">Enhancing Mental Health Through Advanced Technology</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4" /> AI-Powered Insights
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" /> Community Support
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Innovative Solutions
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ARWellnessApp;