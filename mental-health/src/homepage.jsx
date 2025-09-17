import React, { useState, useEffect } from 'react';
import { Heart, Activity, Users, User, MoreHorizontal, Camera, MessageCircle, Phone, Calendar, TrendingUp, Wind } from 'lucide-react';

const WellnessApp = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState(null);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😴', label: 'Tired' },
    { emoji: '😤', label: 'Stressed' },
    { emoji: '🤗', label: 'Grateful' }
  ];

  const quickAccessCards = [
    { title: 'AR Breathing', icon: Wind, color: 'bg-blue-500', description: 'Guided breathing exercises' },
    { title: 'Mindfulness', icon: Heart, color: 'bg-pink-500', description: 'Meditation & relaxation' },
    { title: 'Consultants', icon: User, color: 'bg-green-500', description: 'Talk to experts' },
    { title: 'Community', icon: Users, color: 'bg-purple-500', description: 'Connect with others' }
  ];

  const weeklyData = [
    { day: 'Mon', mood: 8, activities: 3 },
    { day: 'Tue', mood: 6, activities: 2 },
    { day: 'Wed', mood: 9, activities: 4 },
    { day: 'Thu', mood: 7, activities: 3 },
    { day: 'Fri', mood: 8, activities: 5 },
    { day: 'Sat', mood: 9, activities: 4 },
    { day: 'Sun', mood: 8, activities: 3 }
  ];

  const todayActivities = [
    { time: '09:00', title: 'Morning Meditation', type: 'mindfulness' },
    { time: '14:00', title: 'Therapy Session', type: 'consultation' },
    { time: '18:00', title: 'Group Support Meeting', type: 'community' },
    { time: '20:00', title: 'Evening Reflection', type: 'mindfulness' }
  ];

  const navigationTabs = [
    { id: 'Home', icon: Heart, label: 'Home' },
    { id: 'AR Features', icon: Camera, label: 'AR Features' },
    { id: 'Community', icon: Users, label: 'Community' },
    { id: 'Profile', icon: User, label: 'Profile' },
    { id: 'More', icon: MoreHorizontal, label: 'More' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{getGreeting()}!</h1>
              <p className="text-purple-200 mt-1">How are you feeling today?</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6 pb-24">
          {/* Daily Mood Check-in */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Mood Check-in</h2>
            <div className="grid grid-cols-3 gap-3">
              {moods.map((mood, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`p-3 rounded-xl text-center transition-all duration-200 ${
                    selectedMood === mood.label
                      ? 'bg-purple-100 border-2 border-purple-500 scale-105'
                      : 'bg-gray-50 hover:bg-purple-50 border-2 border-transparent'
                  }`}
                >
                  <div className="text-2xl mb-1">{mood.emoji}</div>
                  <div className="text-xs text-gray-600 font-medium">{mood.label}</div>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  Great! You're feeling <span className="font-semibold">{selectedMood}</span> today. 
                  We've personalized your recommendations accordingly.
                </p>
              </div>
            )}
          </div>

          {/* Quick Access Cards */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickAccessCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
                >
                  <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-3`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-500">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
              Weekly Progress
            </h2>
            <div className="flex justify-between items-end h-32">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-8 bg-gray-100 rounded-t relative overflow-hidden">
                    <div
                      className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t transition-all duration-500"
                      style={{ height: `${(day.mood / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>Mood Scale: 1-10</span>
              <span>Avg: 7.9</span>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Today's Schedule
            </h2>
            <div className="space-y-3">
              {todayActivities.map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{activity.title}</div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    {activity.type === 'mindfulness' && <Heart className="w-4 h-4 text-purple-600" />}
                    {activity.type === 'consultation' && <User className="w-4 h-4 text-purple-600" />}
                    {activity.type === 'community' && <Users className="w-4 h-4 text-purple-600" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Support Button */}
        <div className="fixed right-6 bottom-24">
          <button className="w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200">
            <Phone className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white shadow-2xl border-t border-gray-200">
          <div className="flex justify-around py-2">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-purple-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <tab.icon className={`w-6 h-6 mb-1 ${activeTab === tab.id ? 'text-purple-600' : ''}`} />
                <span className="text-xs font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="w-1 h-1 bg-purple-600 rounded-full mt-1"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessApp;