import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Users, Send, Search, Filter, Heart, MessageSquare, Star, User, Settings, Bell, Plus, Phone, Video, MoreHorizontal, Smile, Paperclip, ArrowLeft, UserCheck, Shield, Coffee, Lightbulb, BookOpen, TrendingUp, Home, Zap, Award, Globe, Menu, X } from 'lucide-react';

const CommunityPlatform = () => {
  const [currentPage, setCurrentPage] = useState('community');
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileChatView, setMobileChatView] = useState('list');
  const [showCategoryFeed, setShowCategoryFeed] = useState(false);
  const messagesEndRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All', icon: Globe, color: '#585182', count: 156 },
    { id: 'general', name: 'General Talk', icon: MessageCircle, color: '#4F46E5', count: 42 },
    { id: 'advice', name: 'Get Advice', icon: Lightbulb, color: '#F59E0B', count: 28 },
    { id: 'resources', name: 'Resources', icon: BookOpen, color: '#10B981', count: 31 },
    { id: 'success', name: 'Wins & Success', icon: Award, color: '#EF4444', count: 15 },
    { id: 'networking', name: 'Connect', icon: Users, color: '#8B5CF6', count: 23 },
    { id: 'inspiration', name: 'Daily Boost', icon: Zap, color: '#F97316', count: 18 }
  ];

  const posts = [
    // General Talk Posts
    {
      id: 1,
      author: 'Sarah Martinez',
      role: 'Product Designer',
      avatar: '🎨',
      time: '3 min ago',
      category: 'general',
      title: 'What are you working on this week?',
      content: 'Just curious about what everyone is focusing on! I\'m redesigning our mobile app interface. Always exciting to tackle new challenges. Share your current projects!',
      likes: 23,
      comments: 15,
      isLiked: false,
      tags: ['work', 'projects', 'discussion']
    },
    {
      id: 2,
      author: 'Alex Johnson',
      role: 'Marketing Manager',
      avatar: '📊',
      time: '15 min ago',
      category: 'general',
      title: 'Friday motivation check-in',
      content: 'How is everyone feeling about wrapping up the week? I love Fridays because it\'s a great time to reflect on accomplishments and plan for next week.',
      likes: 45,
      comments: 22,
      isLiked: true,
      tags: ['motivation', 'friday', 'reflection']
    },

    // Advice Posts
    {
      id: 3,
      author: 'Maya Patel',
      role: 'Junior Developer',
      avatar: '💻',
      time: '30 min ago',
      category: 'advice',
      title: 'Struggling with imposter syndrome as a junior developer',
      content: 'I just started my first development role and feel completely overwhelmed. Everyone seems so much more experienced. How do you deal with feeling like you don\'t belong? Any tips for building confidence?',
      likes: 67,
      comments: 28,
      isLiked: false,
      tags: ['career', 'confidence', 'development']
    },
    {
      id: 4,
      author: 'Dr. Emily Chen',
      role: 'Career Advisor',
      avatar: '👩‍🏫',
      time: '45 min ago',
      category: 'advice',
      title: 'How to handle difficult conversations at work',
      content: 'Difficult conversations are inevitable in any workplace. Here are my top 3 tips: 1) Prepare your key points beforehand 2) Focus on the behavior, not the person 3) Listen actively and ask clarifying questions. What strategies have worked for you?',
      likes: 89,
      comments: 31,
      isLiked: true,
      isAdvisor: true,
      tags: ['communication', 'workplace', 'tips']
    },

    // Resources Posts
    {
      id: 5,
      author: 'Tech Learning Hub',
      role: 'Educational Platform',
      avatar: '📚',
      time: '1 hour ago',
      category: 'resources',
      title: 'Free coding bootcamp resources - Updated list 2024',
      content: 'Here\'s a curated list of free resources for learning web development: FreeCodeCamp, The Odin Project, Codecademy (free tier), YouTube channels like Traversy Media and Academind. All links in comments!',
      likes: 156,
      comments: 43,
      isLiked: false,
      tags: ['learning', 'coding', 'free', 'resources']
    },
    {
      id: 6,
      author: 'Lisa Wang',
      role: 'UX Designer',
      avatar: '🎨',
      time: '2 hours ago',
      category: 'resources',
      title: 'Design tools every beginner should know',
      content: 'Starting in design? Here are the essential tools: Figma (UI/UX), Canva (quick graphics), Unsplash (free photos), Coolors (color palettes), and Google Fonts. Most have generous free plans!',
      likes: 78,
      comments: 19,
      isLiked: true,
      tags: ['design', 'tools', 'beginner', 'free']
    },

    // Success Stories
    {
      id: 7,
      author: 'Marcus Thompson',
      role: 'Senior Developer',
      avatar: '👨‍💻',
      time: '3 hours ago',
      category: 'success',
      title: 'From self-taught to Senior Developer - My journey',
      content: 'Two years ago, I was teaching myself to code from my kitchen table. Today, I got promoted to Senior Developer! To anyone starting their journey: it\'s possible. Stay consistent, build projects, and never stop learning. Happy to mentor anyone!',
      likes: 234,
      comments: 67,
      isLiked: false,
      tags: ['promotion', 'coding', 'self-taught', 'mentor']
    },
    {
      id: 8,
      author: 'Jennifer Rodriguez',
      role: 'Product Manager',
      avatar: '🚀',
      time: '4 hours ago',
      category: 'success',
      title: 'Landed my dream job at a startup!',
      content: 'After 6 months of interviews and applications, I finally got the offer! The key was persistence and continuously improving based on feedback. For anyone job hunting - don\'t give up, your opportunity is coming!',
      likes: 89,
      comments: 25,
      isLiked: true,
      tags: ['job-search', 'startup', 'persistence', 'dream-job']
    },

    // Networking Posts
    {
      id: 9,
      author: 'Coffee Chat Network',
      role: 'Community Group',
      avatar: '☕',
      time: '5 hours ago',
      category: 'networking',
      title: 'Virtual Coffee Chat - Every Wednesday 3PM EST',
      content: 'Join our weekly virtual coffee chat! This week\'s topic: "Remote work tips and tricks". All professionals welcome. Great way to meet people in similar fields and share experiences. Link in comments!',
      likes: 42,
      comments: 18,
      isLiked: false,
      tags: ['networking', 'coffee-chat', 'remote', 'community']
    },
    {
      id: 10,
      author: 'David Kim',
      role: 'Sales Manager',
      avatar: '🤝',
      time: '6 hours ago',
      category: 'networking',
      title: 'Looking for accountability partners',
      content: 'Working on personal development goals and would love to connect with others doing the same. Thinking weekly check-ins via video call. Areas: fitness, reading, skill development. Who\'s interested?',
      likes: 31,
      comments: 14,
      isLiked: false,
      tags: ['accountability', 'goals', 'personal-growth']
    },

    // Daily Boost/Inspiration
    {
      id: 11,
      author: 'Dr. Sarah Wilson',
      role: 'Motivational Speaker',
      avatar: '🌟',
      time: '7 hours ago',
      category: 'inspiration',
      title: 'Monday Motivation: Your potential is unlimited!',
      content: 'Remember that every expert was once a beginner. Your journey is unique, and comparing yourself to others only steals your joy. Focus on your growth, celebrate small wins, and trust the process. What\'s one thing you\'re grateful for today?',
      likes: 167,
      comments: 45,
      isLiked: true,
      isAdvisor: true,
      tags: ['motivation', 'growth', 'mindset', 'gratitude']
    },
    {
      id: 12,
      author: 'Mindful Moments',
      role: 'Wellness Coach',
      avatar: '🧘‍♀️',
      time: '8 hours ago',
      category: 'inspiration',
      title: 'Quick mindfulness exercise for busy professionals',
      content: '5-4-3-2-1 Grounding Technique: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. Perfect for stressful moments at work. Try it now!',
      likes: 203,
      comments: 38,
      isLiked: false,
      tags: ['mindfulness', 'stress-relief', 'wellness', 'exercise']
    }
  ];

  const chats = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      role: 'Career Advisor',
      avatar: '👩‍🏫',
      lastMessage: 'I\'d love to schedule a follow-up session this week. What works for you?',
      time: '2 min ago',
      unread: 3,
      isOnline: true,
      type: 'advisor',
      status: 'Available for consultation'
    },
    {
      id: 2,
      name: 'Design Squad',
      role: '12 members',
      avatar: '🎨',
      lastMessage: 'Alex: Check out this new Figma plugin!',
      time: '15 min ago',
      unread: 0,
      isOnline: false,
      type: 'group',
      status: 'Active discussion'
    },
    {
      id: 3,
      name: 'Marcus Thompson',
      role: 'Software Developer',
      avatar: '👨‍💻',
      lastMessage: 'Thanks for the code review tips! Really helpful.',
      time: '1 hour ago',
      unread: 1,
      isOnline: true,
      type: 'peer',
      status: 'Online'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Emily Chen',
      content: 'Hi Sarah! I saw your post about imposter syndrome. This is incredibly common, especially for designers starting out.',
      time: '10:15 AM',
      isSelf: false,
      avatar: '👩‍🏫'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you so much for reaching out! I really appreciate it.',
      time: '10:18 AM',
      isSelf: true,
      avatar: '😊'
    },
    {
      id: 3,
      sender: 'Dr. Emily Chen',
      content: 'That feeling is so valid. Here\'s what I want you to remember: you were hired for a reason. Your unique perspective and fresh eyes are valuable assets.',
      time: '10:20 AM',
      isSelf: false,
      avatar: '👩‍🏫'
    }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || 
      post.category === selectedCategory.toLowerCase().replace(' talk', '').replace('get ', '').replace('wins & ', '').replace('daily ', '');
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName !== 'All') {
      setShowCategoryFeed(true);
    } else {
      setShowCategoryFeed(false);
    }
  };

  const handleBackToAllCategories = () => {
    setSelectedCategory('All');
    setShowCategoryFeed(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMobileChatView('chat');
  };

  const handleBackToList = () => {
    setMobileChatView('list');
    setSelectedChat(null);
  };

  const MobileCategoryFilter = () => (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-4">
      <div className="flex overflow-x-auto gap-3 pb-2 -mb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                isSelected 
                  ? 'shadow-md transform scale-105' 
                  : 'hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={isSelected ? {backgroundColor: `${category.color}15`, borderLeft: `3px solid ${category.color}`} : {}}
            >
              <div className="p-1 rounded-md" style={{backgroundColor: `${category.color}20`}}>
                <Icon size={14} style={{color: category.color}} />
              </div>
              <span className="font-medium text-sm">{category.name}</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  const MobileSidebar = () => (
    <div className="p-4 space-y-6">
      <div className="space-y-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          return (
            <button
              key={category.id}
              onClick={() => {
                handleCategorySelect(category.name);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                selectedCategory === category.name 
                  ? 'shadow-md transform scale-105' 
                  : 'hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={selectedCategory === category.name ? {backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}`} : {}}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg" style={{backgroundColor: `${category.color}20`}}>
                  <Icon size={18} style={{color: category.color}} />
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg" style={{color: '#585182'}}>Live Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-xl bg-blue-50">
            <div className="flex items-center space-x-2">
              <Users size={18} className="text-blue-600" />
              <span className="text-gray-700 font-medium">Active Members</span>
            </div>
            <span className="font-bold text-lg text-blue-600">2,847</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl bg-purple-50">
            <div className="flex items-center space-x-2">
              <MessageCircle size={18} className="text-purple-600" />
              <span className="text-gray-700 font-medium">Discussions</span>
            </div>
            <span className="font-bold text-lg text-purple-600">1,293</span>
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopSidebar = () => (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center space-x-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span style={{color: '#585182'}}>Categories</span>
        </h3>
        <div className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  isSelected 
                    ? 'shadow-md transform scale-105 bg-[#585182]/10' 
                    : 'hover:bg-[#585182]/5 hover:shadow-sm'
                }`}
                style={isSelected ? {borderLeft: `4px solid #585182`} : {}}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: `${category.color}20`}}>
                    <Icon size={18} style={{color: category.color}} />
                  </div>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-white/50 p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center space-x-2">
          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
          <span style={{color: '#585182'}}>Live Stats</span>
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 rounded-xl bg-blue-50">
            <div className="flex items-center space-x-2">
              <Users size={18} className="text-blue-600" />
              <span className="text-gray-700 font-medium">Active Members</span>
            </div>
            <span className="font-bold text-xl text-blue-600">2,847</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl bg-purple-50">
            <div className="flex items-center space-x-2">
              <MessageCircle size={18} className="text-purple-600" />
              <span className="text-gray-700 font-medium">Discussions</span>
            </div>
            <span className="font-bold text-xl text-purple-600">1,293</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-xl bg-green-50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Advisors Online</span>
            </div>
            <span className="font-bold text-xl text-green-600">18</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg border border-purple-100 p-6">
        <h3 className="font-bold text-lg mb-4 text-purple-800">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full p-3 rounded-lg bg-white/70 hover:bg-[#585182]/10 transition-colors flex items-center space-x-2 text-[#585182] font-medium">
            <Plus size={16} />
            <span>Start Discussion</span>
          </button>
          <button className="w-full p-3 rounded-lg bg-white/70 hover:bg-[#585182]/10 transition-colors flex items-center space-x-2 text-[#585182] font-medium">
            <Search size={16} />
            <span>Find Advisor</span>
          </button>
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl hover:bg-[#585182]/10 lg:hidden transition-colors text-[#585182]"
              >
                <Menu size={20} />
              </button>
              <div className="relative">
                <div 
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl shadow-lg transform hover:scale-105 transition-transform"
                  style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
                >
                  🌟
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Community Hub
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Connect, Learn, Grow Together</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-3">
              <button 
                onClick={() => setCurrentPage('chat')}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 hover:shadow-md transition-all duration-200 bg-white/50"
                style={{borderColor: '#585182', color: '#585182'}}
              >
                <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline font-medium text-sm">Messages</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
              </button>
              <button className="p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-100 relative transition-colors">
                <Bell size={16} className="sm:w-5 sm:h-5" style={{color: '#585182'}} />
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  5
                </span>
              </button>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-xl shadow-md hover:shadow-lg transition-shadow" style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)', color: 'white'}}>
                😊
              </div>
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}>
          <div 
            className="w-80 max-w-[85vw] h-full bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-bold text-lg" style={{color: '#585182'}}>Categories</h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <MobileSidebar />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div className="hidden lg:block lg:w-80 xl:w-96 space-y-6">
            <DesktopSidebar />
          </div>

          <div className="flex-1 space-y-4 sm:space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 p-3 sm:p-6">
              {/* Back Button and Category Header */}
              {showCategoryFeed && selectedCategory !== 'All' && (
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <button
                    onClick={handleBackToAllCategories}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-[#585182]"
                  >
                    <ArrowLeft size={18} />
                    <span className="font-medium">Back to All Categories</span>
                  </button>
                  <div className="flex items-center space-x-3">
                    {categories.find(cat => cat.name === selectedCategory) && (
                      <>
                        <div 
                          className="p-2 rounded-lg"
                          style={{backgroundColor: `${categories.find(cat => cat.name === selectedCategory).color}20`}}
                        >
                          {React.createElement(categories.find(cat => cat.name === selectedCategory).icon, {
                            size: 20,
                            style: {color: categories.find(cat => cat.name === selectedCategory).color}
                          })}
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold" style={{color: '#585182'}}>
                          {selectedCategory}
                        </h2>
                      </>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder={showCategoryFeed ? `Search in ${selectedCategory}...` : "Search discussions..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-4 focus:ring-purple-100 focus:border-purple-300 focus:bg-white transition-all"
                  />
                </div>
                <button 
                  className="px-4 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 font-semibold transform hover:scale-105 bg-[#585182] hover:bg-[#4a4570]"
                >
                  <Plus size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">New Post</span>
                </button>
              </div>
            </div>

            <div className="lg:hidden">
              <MobileCategoryFilter />
            </div>

            {!showCategoryFeed && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No posts found</h3>
                <p className="text-gray-500">Try adjusting your search or browse different categories</p>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              {showCategoryFeed && selectedCategory !== 'All' && (
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-purple-100">
                  <h3 className="font-bold text-lg mb-2" style={{color: '#585182'}}>
                    Welcome to {selectedCategory}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {selectedCategory === 'General Talk' && 'Share updates, ask questions, and connect with the community through casual conversations.'}
                    {selectedCategory === 'Get Advice' && 'Seek guidance, share experiences, and get support from peers and advisors.'}
                    {selectedCategory === 'Resources' && 'Discover useful tools, courses, articles, and materials shared by the community.'}
                    {selectedCategory === 'Wins & Success' && 'Celebrate achievements, share success stories, and inspire others with your journey.'}
                    {selectedCategory === 'Connect' && 'Network with professionals, find collaboration opportunities, and build meaningful relationships.'}
                    {selectedCategory === 'Daily Boost' && 'Get motivated, find inspiration, and share positive energy with the community.'}
                  </p>
                </div>
              )}
              
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/50 p-4 sm:p-6 hover:shadow-xl transition-all duration-200 hover:scale-[1.01]">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                        {post.avatar}
                      </div>
                      {post.isAdvisor && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Shield size={8} className="sm:w-3 sm:h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-base sm:text-lg text-gray-900 truncate">{post.author}</h4>
                          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                            <span className="font-medium truncate">{post.role}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                        <button className="p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                          <MoreHorizontal size={16} className="sm:w-5 sm:h-5 text-gray-400" />
                        </button>
                      </div>
                      
                      <div className="mb-3 sm:mb-4">
                        <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 leading-tight">{post.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{post.content}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:shadow-sm transition-shadow cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3 sm:space-x-6">
                          <button className={`flex items-center space-x-1 sm:space-x-2 hover:bg-red-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all ${
                            post.isLiked ? 'text-red-500 bg-red-50' : 'text-gray-600'
                          }`}>
                            <Heart size={14} className="sm:w-4 sm:h-4" fill={post.isLiked ? 'currentColor' : 'none'} />
                            <span className="font-semibold text-sm sm:text-base">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-blue-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all">
                            <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                            <span className="font-semibold text-sm sm:text-base">{post.comments}</span>
                          </button>
                        </div>
                        <button className="font-semibold hover:bg-[#585182]/10 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all text-sm sm:text-base text-[#585182]">
                          <span className="hidden sm:inline">Join Discussion →</span>
                          <span className="sm:hidden">Join →</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChatPage = () => (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col sm:flex-row">
      <div className={`${mobileChatView === 'list' ? 'flex' : 'hidden'} sm:flex w-full sm:w-96 bg-white/80 backdrop-blur-md border-r border-gray-200 flex-col shadow-lg`}>
        <div className="p-4 sm:p-6 border-b border-gray-200 bg-white/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setCurrentPage('community')}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </button>
              <div>
                <h2 className="text-lg sm:text-xl font-bold" style={{color: '#585182'}}>Messages</h2>
                <p className="text-sm text-gray-500">{chats.length} conversations</p>
              </div>
            </div>
            <button className="p-2 sm:p-3 rounded-xl hover:bg-purple-50 transition-colors" style={{color: '#585182'}}>
              <Plus size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 sm:pl-11 pr-4 py-2 sm:py-3 bg-gray-50 border-2 border-transparent rounded-lg sm:rounded-xl text-sm focus:ring-4 focus:ring-purple-100 focus:border-purple-300 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`w-full p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:bg-gray-50 border-b border-gray-100 transition-all ${
                selectedChat?.id === chat.id ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4' : ''
              }`}
              style={selectedChat?.id === chat.id ? {borderLeftColor: '#585182'} : {}}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                  {chat.avatar}
                </div>
                {chat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                )}
                {chat.type === 'advisor' && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield size={8} className="sm:w-3 sm:h-3 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm sm:text-base truncate">{chat.name}</h4>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="text-xs text-gray-500">{chat.time}</span>
                    {chat.unread > 0 && (
                      <span className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 truncate mb-1">{chat.lastMessage}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium truncate">{chat.role}</span>
                  {chat.type === 'advisor' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium flex-shrink-0">
                      Available
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className={`${mobileChatView === 'chat' ? 'flex' : 'hidden'} sm:flex flex-1 flex-col`}>
        {selectedChat ? (
          <>
            <div className="p-4 sm:p-6 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <button 
                    onClick={handleBackToList}
                    className="p-2 rounded-xl hover:bg-gray-100 sm:hidden transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                      {selectedChat.avatar}
                    </div>
                    {selectedChat.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base sm:text-lg truncate">{selectedChat.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">{selectedChat.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button className="p-2 sm:p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <Phone size={16} className="sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                  <button className="p-2 sm:p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <Video size={16} className="sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                  <button className="p-2 sm:p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={16} className="sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end space-x-2 sm:space-x-3 max-w-xs sm:max-w-sm lg:max-w-md ${message.isSelf ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg shadow-md bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                      {message.avatar}
                    </div>
                    <div className={`px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md ${
                      message.isSelf 
                        ? 'text-white rounded-br-md' 
                        : 'bg-white text-gray-900 rounded-bl-md border'
                    }`} style={message.isSelf ? {background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'} : {}}>
                      <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-1 sm:mt-2 ${message.isSelf ? 'text-white/75' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 sm:p-6 bg-white/80 backdrop-blur-md border-t border-gray-200">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="p-2 sm:p-3 rounded-xl hover:bg-gray-100 transition-colors">
                  <Paperclip size={16} className="sm:w-5 sm:h-5 text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-purple-100 focus:bg-white border-2 border-transparent focus:border-purple-300 transition-all text-sm sm:text-base"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 rounded-xl hover:bg-gray-100 transition-colors">
                    <Smile size={16} className="sm:w-4 sm:h-4 text-gray-600" />
                  </button>
                </div>
                <button 
                  onClick={handleSendMessage}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
                >
                  <Send size={16} className="sm:w-4 sm:h-4" />
                </button>
              </div>
              
              <div className="mt-2 sm:mt-3 flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="hidden sm:inline">Dr. Emily Chen is typing...</span>
                <span className="sm:hidden">Typing...</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50/50 to-white/50 p-4">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-4xl mx-auto mb-4 sm:mb-6 shadow-xl" style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)', color: 'white'}}>
                💬
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3" style={{color: '#585182'}}>Select a conversation</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6">Choose from your existing conversations, start a new chat, or connect with an advisor.</p>
              <button 
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
              >
                Start New Conversation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans antialiased">
      {currentPage === 'community' ? <CommunityPage /> : <ChatPage />}
    </div>
  );
};

export default CommunityPlatform;