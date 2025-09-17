import React, { useState, useEffect } from 'react';
import { Camera, Users, Gamepad2, Share2, UserCheck, Play, Pause, RotateCcw, Heart, Star, MessageCircle, Settings, Menu, X, Target, Zap, Brain, Waves, TreePine, Music, Award, Timer, TrendingUp } from 'lucide-react';

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

  const affirmations = [
    "You are capable of amazing things",
    "Today brings new opportunities",
    "You deserve peace and happiness",
    "Your potential is limitless",
    "You are stronger than you know"
  ];

  const features = [
    {
      id: 'breathing',
      title: 'AR Breathing Orb',
      icon: <Camera className="w-6 h-6" />,
      description: 'A glowing orb that guides deep breathing exercises'
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness AR Spaces',
      icon: <Star className="w-6 h-6" />,
      description: 'Transforming environments into calming visuals'
    },
    {
      id: 'mirror',
      title: 'AR Positive Mirror',
      icon: <Heart className="w-6 h-6" />,
      description: 'Affirmations and calming effects in real-time'
    },
    {
      id: 'games',
      title: 'Gamified Stress Relief',
      icon: <Gamepad2 className="w-6 h-6" />,
      description: 'Interactive games to promote relaxation and focus'
    },
    {
      id: 'focus-training',
      title: 'Focus Training Games',
      icon: <Target className="w-6 h-6" />,
      description: 'Brain training exercises to improve concentration'
    },
    {
      id: 'memory-match',
      title: 'Memory & Mindfulness',
      icon: <Brain className="w-6 h-6" />,
      description: 'Memory games with calming themes'
    },
    {
      id: 'mood-tracker',
      title: 'Mood Tracker',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Track your emotional wellness journey'
    },
    {
      id: 'sound-therapy',
      title: 'Sound Therapy',
      icon: <Music className="w-6 h-6" />,
      description: 'Interactive soundscapes for relaxation'
    },
    {
      id: 'progress',
      title: 'Progress Dashboard',
      icon: <Award className="w-6 h-6" />,
      description: 'Track your wellness achievements'
    },
    {
      id: 'community',
      title: 'Community Sharing',
      icon: <Share2 className="w-6 h-6" />,
      description: 'Share AR experiences with peers and connect over shared moments of calm'
    },
    {
      id: 'consultancy',
      title: 'Direct Consultancy',
      icon: <UserCheck className="w-6 h-6" />,
      description: 'Access to college-provided consultants for personalized support'
    }
  ];

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
      stress: stressLevel
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
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeFeature]);

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case 'breathing':
        return (
          <div className="text-center space-y-6">
            <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
              <div className={`w-32 h-32 rounded-full border-4 border-[#85182a] transition-all duration-4000 ${isBreathing ? 'scale-150 opacity-70' : 'scale-100 opacity-100'} bg-gradient-to-r from-[#85182a] to-pink-300`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className={`w-12 h-12 text-white transition-all duration-1000 ${isBreathing ? 'scale-110' : 'scale-100'}`} />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Breathe in rhythm with the glowing orb</p>
              <p className="text-2xl font-semibold text-[#85182a]">Breaths: {breathCount}</p>
              <button
                onClick={startBreathingExercise}
                className="bg-[#85182a] text-white px-6 py-3 rounded-lg hover:bg-[#6d1422] transition-colors flex items-center gap-2 mx-auto"
                disabled={isBreathing}
              >
                {isBreathing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isBreathing ? 'Breathing...' : 'Start Breathing'}
              </button>
            </div>
          </div>
        );

      case 'mindfulness':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-blue-300 rounded-full mb-2 animate-pulse"></div>
                <p className="text-sm text-blue-700 text-center">Ocean Waves</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-300 rounded-full mb-2 animate-bounce"></div>
                <p className="text-sm text-green-700 text-center">Forest Grove</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-purple-300 rounded-full mb-2 animate-ping"></div>
                <p className="text-sm text-purple-700 text-center">Starry Night</p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-orange-300 rounded-full mb-2 animate-spin"></div>
                <p className="text-sm text-orange-700 text-center">Sunset Beach</p>
              </div>
            </div>
            <p className="text-center text-gray-600">Select an environment to transform your space into a calming visual experience</p>
          </div>
        );

      case 'mirror':
        return (
          <div className="text-center space-y-6">
            <div className="relative border-4 border-[#85182a] rounded-lg p-8 bg-gradient-to-r from-pink-50 to-rose-50 min-h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#85182a] mb-4">Today's Affirmation</h3>
                <p className="text-xl text-gray-700 font-medium italic">"{affirmations[currentAffirmation]}"</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              {affirmations.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentAffirmation ? 'bg-[#85182a]' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#85182a] to-pink-400 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Zen Garden</h3>
              <p className="mb-4">Create patterns in the sand to achieve inner peace</p>
              <div className="text-3xl font-bold">Score: {gameScore}</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => setGameScore(prev => prev + 10)}
                  className="aspect-square bg-gray-100 hover:bg-[#85182a] hover:text-white transition-colors rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-[#85182a]"
                >
                  <div className="w-6 h-6 rounded-full bg-current opacity-30"></div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setGameScore(0)}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Game
            </button>
          </div>
        );

      case 'focus-training':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Focus Challenge</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm opacity-90">Score</p>
                  <p className="text-2xl font-bold">{focusGame.score}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Level</p>
                  <p className="text-2xl font-bold">{focusGame.level}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Time</p>
                  <p className="text-2xl font-bold">{focusGame.timeLeft}s</p>
                </div>
              </div>
              {!focusGame.isActive ? (
                <button
                  onClick={startFocusGame}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Challenge
                </button>
              ) : (
                <p className="text-lg">Click the targets as fast as you can!</p>
              )}
            </div>
            
            {focusGame.isActive && (
              <div className="grid grid-cols-4 gap-3 h-64">
                {Array.from({ length: 16 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={hitTarget}
                    className="aspect-square bg-gray-100 hover:bg-[#85182a] rounded-lg transition-all duration-200 flex items-center justify-center group"
                    style={{
                      transform: Math.random() > 0.7 ? 'scale(1.1)' : 'scale(1)',
                      backgroundColor: Math.random() > 0.8 ? '#85182a' : undefined
                    }}
                  >
                    <Target className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case 'memory-match':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mindful Memory Match</h3>
              <p className="text-gray-600 mb-4">Match the nature symbols to find inner peace</p>
              <div className="flex justify-center space-x-6 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Matches</p>
                  <p className="text-2xl font-bold text-[#85182a]">{matchedCards.length / 2}/8</p>
                </div>
                <button
                  onClick={initializeMemoryGame}
                  className="bg-[#85182a] text-white px-4 py-2 rounded-lg hover:bg-[#6d1422] transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  New Game
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {memoryCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => flipCard(card.id)}
                  className={`aspect-square rounded-lg text-3xl transition-all duration-300 ${
                    flippedCards.includes(card.id) || matchedCards.includes(card.id)
                      ? 'bg-white border-2 border-[#85182a] transform scale-105'
                      : 'bg-gradient-to-br from-[#85182a] to-pink-400 hover:scale-105'
                  }`}
                >
                  {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? card.symbol : '?'}
                </button>
              ))}
            </div>
            
            {matchedCards.length === 16 && (
              <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-xl font-bold text-green-800 mb-2">Congratulations! 🎉</h4>
                <p className="text-green-700">You've achieved perfect mindful focus!</p>
              </div>
            )}
          </div>
        );

      case 'mood-tracker':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How are you feeling today?</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mood Level (1-10)</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">😢</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={currentMood}
                      onChange={(e) => setCurrentMood(parseInt(e.target.value))}
                      className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl">😊</span>
                  </div>
                  <p className="text-center mt-2 font-semibold text-[#85182a]">Current Mood: {currentMood}/10</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stress Level (1-10)</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">😌</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={stressLevel}
                      onChange={(e) => setStressLevel(parseInt(e.target.value))}
                      className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl">😰</span>
                  </div>
                  <p className="text-center mt-2 font-semibold text-[#85182a]">Stress Level: {stressLevel}/10</p>
                </div>

                <button
                  onClick={logMood}
                  className="w-full bg-[#85182a] text-white py-3 rounded-lg hover:bg-[#6d1422] transition-colors"
                >
                  Log Today's Mood
                </button>
              </div>
            </div>

            {moodJournal.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800">Recent Mood History</h4>
                {moodJournal.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{entry.date}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">Mood: {entry.mood}/10</span>
                      <span className="text-sm text-gray-600">Stress: {entry.stress}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'sound-therapy':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sound Therapy</h3>
              <p className="text-gray-600">Immerse yourself in calming soundscapes</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Ocean Waves', icon: <Waves className="w-8 h-8" />, color: 'from-blue-400 to-blue-600' },
                { name: 'Forest Rain', icon: <TreePine className="w-8 h-8" />, color: 'from-green-400 to-green-600' },
                { name: 'Thunder Storm', icon: <Zap className="w-8 h-8" />, color: 'from-purple-400 to-purple-600' },
                { name: 'Meditation Bell', icon: <Music className="w-8 h-8" />, color: 'from-yellow-400 to-orange-500' }
              ].map((sound, index) => (
                <button
                  key={index}
                  className={`aspect-square bg-gradient-to-br ${sound.color} rounded-lg p-6 text-white hover:scale-105 transition-transform flex flex-col items-center justify-center space-y-2`}
                >
                  {sound.icon}
                  <span className="font-medium">{sound.name}</span>
                  <div className="w-full bg-white bg-opacity-30 h-1 rounded-full">
                    <div className="bg-white h-1 rounded-full w-1/3 transition-all duration-1000"></div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Sound Mixer</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Ocean', 'Rain', 'Birds', 'Wind'].map((sound, index) => (
                  <div key={index} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">{sound}</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue={Math.random() * 50}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Wellness Journey</h3>
              <p className="text-gray-600">Track your progress and celebrate achievements</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">{progressStats.totalSessions}</div>
                <div className="text-sm opacity-90">Total Sessions</div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">{progressStats.streak}</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">{progressStats.minutesMeditated}</div>
                <div className="text-sm opacity-90">Minutes Meditated</div>
              </div>
              <div className="bg-gradient-to-br from-[#85182a] to-pink-500 rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold">{progressStats.stressReduction}%</div>
                <div className="text-sm opacity-90">Stress Reduced</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'First Steps', desc: 'Completed your first session', earned: true, icon: '🌱' },
                  { title: 'Week Warrior', desc: '7-day meditation streak', earned: true, icon: '⚡' },
                  { title: 'Zen Master', desc: '100 total sessions completed', earned: false, icon: '🧘' },
                  { title: 'Community Helper', desc: 'Shared 10 moments of calm', earned: true, icon: '🤝' },
                  { title: 'Focus Champion', desc: 'Perfect score in focus training', earned: false, icon: '🎯' },
                  { title: 'Memory Guru', desc: 'Completed memory game in under 60 seconds', earned: false, icon: '🧠' }
                ].map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${
                    achievement.earned 
                      ? 'border-[#85182a] bg-pink-50' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h5 className="font-semibold text-gray-800">{achievement.title}</h5>
                        <p className="text-sm text-gray-600">{achievement.desc}</p>
                      </div>
                      {achievement.earned && <Award className="w-6 h-6 text-[#85182a]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { user: 'Sarah M.', moment: 'Peaceful morning meditation in the garden', time: '2 hours ago', likes: 12 },
                { user: 'Alex K.', moment: 'Evening breathing session helped me focus', time: '5 hours ago', likes: 8 },
                { user: 'Maria L.', moment: 'AR forest space made my room feel magical', time: '1 day ago', likes: 15 }
              ].map((post, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#85182a] rounded-full flex items-center justify-center text-white font-bold">
                        {post.user.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{post.user}</p>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{post.moment}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-[#85182a] transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-[#85182a] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-[#85182a] transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#85182a] text-white py-3 rounded-lg hover:bg-[#6d1422] transition-colors">
              Share Your Moment
            </button>
          </div>
        );

      case 'consultancy':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Available Consultants</h3>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Jennifer Walsh', specialty: 'Stress Management', status: 'Available', rating: 4.9 },
                  { name: 'Prof. Michael Chen', specialty: 'Mindfulness & Meditation', status: 'Busy', rating: 4.8 },
                  { name: 'Dr. Lisa Rodriguez', specialty: 'Anxiety & Depression', status: 'Available', rating: 4.9 }
                ].map((consultant, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#85182a] rounded-full flex items-center justify-center text-white font-bold">
                        {consultant.name.split(' ').map(n => n.charAt(0)).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{consultant.name}</p>
                        <p className="text-sm text-gray-600">{consultant.specialty}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{consultant.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${consultant.status === 'Available' ? 'text-green-600' : 'text-orange-600'}`}>
                        {consultant.status}
                      </div>
                      <button 
                        className={`mt-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                          consultant.status === 'Available' 
                            ? 'bg-[#85182a] text-white hover:bg-[#6d1422]' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={consultant.status !== 'Available'}
                      >
                        {consultant.status === 'Available' ? 'Book Session' : 'Join Waitlist'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a feature to get started</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#85182a] rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AR Wellness</h1>
                <p className="text-sm text-gray-600">Transform Your Space, Transform Your Mind</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className={`lg:col-span-1 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Features</h2>
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-4 rounded-lg transition-colors border ${
                  activeFeature === feature.id
                    ? 'bg-[#85182a] text-white border-[#85182a]'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className={`text-sm ${activeFeature === feature.id ? 'text-pink-100' : 'text-gray-500'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                {features.find(f => f.id === activeFeature)?.icon}
                <h2 className="text-2xl font-bold text-gray-800">
                  {features.find(f => f.id === activeFeature)?.title}
                </h2>
              </div>
              {renderFeatureContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">AR Wellness Platform - Enhancing Mental Health Through Technology</p>
            <p className="text-sm">Personalized support • Community connection • Innovative solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ARWellnessApp;