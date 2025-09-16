import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Brain, Heart, Plus, Bell, User, Home, ArrowRight, Play, Clock, Star, Bot, Sparkles, Zap, Moon, Sun, Cloud } from 'lucide-react';


const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Mental Health App</h1>
    </div>
  )
}



const MentalHealthHomeScreen = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const moodEmojis = [
    { emoji: '😊', label: 'Great', value: 'great', color: '#4ade80' },
    { emoji: '🙂', label: 'Good', value: 'good', color: '#22d3ee' },
    { emoji: '😐', label: 'Okay', value: 'okay', color: '#facc15' },
    { emoji: '😟', label: 'Low', value: 'low', color: '#fb923c' },
    { emoji: '😢', label: 'Sad', value: 'sad', color: '#f87171' }
  ];

  const quickAccessCards = [
    { 
      title: 'AR Breathing', 
      icon: Brain, 
      gradient: 'from-cyan-400 via-blue-500 to-purple-600', 
      description: 'Guided breathing exercises',
      backgroundPattern: '🫁💨✨🌸',
      shadowColor: 'shadow-cyan-500/25'
    },
    { 
      title: 'Mindfulness', 
      icon: Heart, 
      gradient: 'from-emerald-400 via-green-500 to-teal-600', 
      description: 'Meditation & calm spaces',
      backgroundPattern: '🧘‍♀️🌿🍃🌺',
      shadowColor: 'shadow-emerald-500/25'
    },
    { 
      title: 'Consultants', 
      icon: MessageCircle, 
      gradient: 'from-orange-400 via-pink-500 to-rose-600', 
      description: 'Professional support',
      backgroundPattern: '👨‍⚕️👩‍⚕️💬📋',
      shadowColor: 'shadow-pink-500/25'
    },
    { 
      title: 'Community', 
      icon: Users, 
      gradient: 'from-violet-400 via-purple-500 to-indigo-600', 
      description: 'Connect with peers',
      backgroundPattern: '👥💕🤝🌟',
      shadowColor: 'shadow-violet-500/25'
    }
  ];

  const videoTutorials = [
    {
      id: 1,
      title: '5-Minute Morning Meditation',
      duration: '5:23',
      thumbnail: '🧘‍♀️',
      category: 'Mindfulness',
      views: '12.3k',
      rating: 4.8,
      gradientBg: 'from-green-100 to-teal-100'
    },
    {
      id: 2,
      title: 'Breathing Techniques for Anxiety',
      duration: '8:45',
      thumbnail: '🫁',
      category: 'Breathing',
      views: '8.7k',
      rating: 4.9,
      gradientBg: 'from-blue-100 to-cyan-100'
    },
    {
      id: 3,
      title: 'Building Healthy Study Habits',
      duration: '12:15',
      thumbnail: '📚',
      category: 'Wellness',
      views: '15.2k',
      rating: 4.7,
      gradientBg: 'from-purple-100 to-pink-100'
    }
  ];

  const todayActivities = [
    { time: '10:00 AM', title: 'Mindfulness Session', type: 'meditation', status: 'upcoming', icon: '🧘‍♀️' },
    { time: '2:00 PM', title: 'Dr. Sarah Johnson', type: 'appointment', status: 'confirmed', icon: '👩‍⚕️' },
    { time: '6:00 PM', title: 'Community Check-in', type: 'community', status: 'optional', icon: '👥' }
  ];

  const navigationTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ar', label: 'AR Features', icon: Brain },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'more', label: 'More', icon: Sparkles }
  ];

  // Animated background elements
  const FloatingElement = ({ children, className, delay = 0 }) => (
    <div 
      className={`absolute ${className} animate-pulse`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '4s'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Trendy Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent,transparent)]" />
        
        {/* Floating Background Elements */}
        <FloatingElement className="top-10 left-10 text-6xl opacity-10" delay={0}>🌟</FloatingElement>
        <FloatingElement className="top-32 right-16 text-4xl opacity-15" delay={1}>✨</FloatingElement>
        <FloatingElement className="top-64 left-1/4 text-5xl opacity-10" delay={2}>🌸</FloatingElement>
        <FloatingElement className="bottom-32 right-20 text-6xl opacity-15" delay={0.5}>💫</FloatingElement>
        <FloatingElement className="bottom-20 left-12 text-4xl opacity-10" delay={1.5}>🦋</FloatingElement>
        <FloatingElement className="top-1/2 right-8 text-5xl opacity-10" delay={2.5}>🌙</FloatingElement>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-8 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl shadow-xl border-b border-white/20">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">{getGreeting()}, Alex! ✨</h1>
              <p className="text-white/80 text-sm">How are you feeling today?</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg">
                <Bell className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                <Bot className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6 space-y-6 pb-24">
          {/* Daily Mood Check-in */}
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Daily Mood Check-in
            </h2>
            <div className="flex justify-between items-center">
              {moodEmojis.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                    selectedMood === mood.value 
                      ? 'bg-white/20 backdrop-blur-md shadow-lg scale-110 border border-white/30' 
                      : 'hover:bg-white/10 hover:backdrop-blur-md'
                  }`}
                >
                  <span className="text-2xl mb-1">{mood.emoji}</span>
                  <span className="text-xs text-white/80">{mood.label}</span>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="mt-4 p-3 bg-green-500/20 backdrop-blur-md rounded-lg border border-green-400/30">
                <p className="text-green-100 text-sm">✨ Great! Your mood has been recorded. Keep track of your daily progress!</p>
              </div>
            )}
          </div>

          {/* Quick Access Cards */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Quick Access
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickAccessCards.map((card, index) => (
                <button
                  key={index}
                  className={`group relative overflow-hidden bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-2xl ${card.shadowColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20`}
                >
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute -top-4 -left-4 text-6xl transform rotate-12 text-white/40">
                      {card.backgroundPattern.charAt(0)}
                    </div>
                    <div className="absolute top-8 -right-2 text-4xl transform -rotate-12 text-white/30">
                      {card.backgroundPattern.charAt(1)}
                    </div>
                    <div className="absolute -bottom-2 left-8 text-5xl transform rotate-45 text-white/35">
                      {card.backgroundPattern.charAt(2)}
                    </div>
                    <div className="absolute bottom-4 right-2 text-4xl transform -rotate-45 text-white/40">
                      {card.backgroundPattern.charAt(3)}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <card.icon className="w-8 h-8 text-white mb-3 drop-shadow-lg" />
                    <h3 className="text-white font-semibold text-lg mb-1 drop-shadow">{card.title}</h3>
                    <p className="text-white/90 text-sm">{card.description}</p>
                  </div>
                  
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowRight className="absolute top-4 right-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Video Tutorials Section */}
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Play className="w-5 h-5" />
                Video Tutorials
              </h2>
              <button className="text-cyan-300 text-sm font-medium hover:text-cyan-200 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {videoTutorials.map((video) => (
                <div key={video.id} className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group border border-white/10">
                  <div className="relative flex-shrink-0">
                    <div className={`w-16 h-12 bg-gradient-to-br ${video.gradientBg} rounded-lg flex items-center justify-center text-2xl shadow-lg`}>
                      {video.thumbnail}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 text-gray-700 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white truncate group-hover:text-cyan-300 transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white/60" />
                        <span className="text-xs text-white/70">{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-white/70">{video.rating}</span>
                      </div>
                      <span className="text-xs text-white/60">{video.views} views</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 bg-cyan-500/30 text-cyan-200 text-xs rounded-full mt-1 border border-cyan-400/30">
                      {video.category}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/60 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                Browse More Tutorials
              </button>
            </div>
          </div>

          {/* Today's Activities */}
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sun className="w-5 h-5" />
                Today's Schedule
              </h2>
              <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="space-y-3">
              {todayActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <div className="flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.status === 'confirmed' ? 'bg-green-400' : 
                      activity.status === 'upcoming' ? 'bg-blue-400' : 'bg-gray-400'
                    } shadow-lg`} />
                  </div>
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white">{activity.title}</h4>
                      <span className="text-sm text-white/70">{activity.time}</span>
                    </div>
                    <p className="text-sm text-white/60 capitalize">{activity.type}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Chatbot Floating Button */}
        <div className="fixed bottom-24 right-6 z-50">
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 border border-white/20">
            <Bot className="w-6 h-6" />
          </button>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white shadow-lg" />
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="flex justify-around items-center py-2 px-4">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-cyan-300 bg-white/20 backdrop-blur-md shadow-lg border border-white/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default MentalHealthHomeScreen;
export default Homepage;
