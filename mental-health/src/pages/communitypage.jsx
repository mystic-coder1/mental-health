import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Users, Send, Search, Filter, Heart, MessageSquare, Star, User, Settings, Bell, Plus, Phone, Video, MoreHorizontal, Smile, Paperclip, ArrowLeft, UserCheck, Shield, Coffee, Lightbulb, BookOpen, TrendingUp, Home, Zap, Award, Globe } from 'lucide-react';

const CommunityPlatform = () => {
  const [currentPage, setCurrentPage] = useState('community');
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  // Enhanced sample data with more variety
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
    {
      id: 1,
      author: 'Sarah Martinez',
      role: 'Product Designer',
      avatar: '🎨',
      time: '3 min ago',
      category: 'advice',
      title: 'Struggling with imposter syndrome as a junior designer',
      content: 'I just started my first design role and feel completely overwhelmed. Everyone seems so much more experienced. How do you deal with feeling like you don\'t belong? Any tips for building confidence?',
      likes: 47,
      comments: 12,
      isLiked: false,
      tags: ['career', 'confidence', 'design']
    },
    {
      id: 2,
      author: 'Dr. Emily Chen',
      role: 'Career Advisor',
      avatar: '👩‍🏫',
      time: '1 hour ago',
      category: 'inspiration',
      title: 'Monday Motivation: Your potential is unlimited! ✨',
      content: 'Remember that every expert was once a beginner. Your journey is unique, and comparing yourself to others only steals your joy. Focus on your growth, celebrate small wins, and trust the process. What\'s one thing you\'re grateful for today?',
      likes: 89,
      comments: 31,
      isLiked: true,
      isAdvisor: true,
      tags: ['motivation', 'growth', 'mindset']
    },
    {
      id: 3,
      author: 'Marcus Thompson',
      role: 'Software Developer',
      avatar: '👨‍💻',
      time: '2 hours ago',
      category: 'success',
      title: 'Just got promoted to Senior Developer! 🚀',
      content: 'Two years ago, I was teaching myself to code from my kitchen table. Today, I got promoted to Senior Developer! To anyone starting their journey: it\'s possible. Stay consistent, build projects, and never stop learning. Happy to mentor anyone who needs guidance!',
      likes: 156,
      comments: 43,
      isLiked: false,
      tags: ['promotion', 'coding', 'growth']
    },
    {
      id: 4,
      author: 'Lisa Wang',
      role: 'UX Researcher',
      avatar: '🔍',
      time: '4 hours ago',
      category: 'networking',
      title: 'Coffee chat anyone? ☕ Remote worker looking for connections',
      content: 'Working remotely can feel isolating sometimes. Would love to connect with other professionals for virtual coffee chats! I\'m particularly interested in discussing user research, but open to any interesting conversations.',
      likes: 23,
      comments: 18,
      isLiked: false,
      tags: ['networking', 'remote', 'coffee-chat']
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
    },
    {
      id: 4,
      name: 'Sarah Martinez',
      role: 'Product Designer',
      avatar: '🎨',
      lastMessage: 'The portfolio feedback was exactly what I needed!',
      time: 'Yesterday',
      unread: 0,
      isOnline: false,
      type: 'peer',
      status: 'Last seen 2 hours ago'
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
      content: 'Thank you so much for reaching out! I really appreciate it. Sometimes I feel like everyone can see right through me.',
      time: '10:18 AM',
      isSelf: true,
      avatar: '😊'
    },
    {
      id: 3,
      sender: 'Dr. Emily Chen',
      content: 'That feeling is so valid. Here\'s what I want you to remember: you were hired for a reason. Your unique perspective and fresh eyes are valuable assets to your team.',
      time: '10:20 AM',
      isSelf: false,
      avatar: '👩‍🏫'
    },
    {
      id: 4,
      sender: 'You',
      content: 'I never thought about it that way. Do you have any practical tips for building confidence day-to-day?',
      time: '10:25 AM',
      isSelf: true,
      avatar: '😊'
    },
    {
      id: 5,
      sender: 'Dr. Emily Chen',
      content: 'Absolutely! Start a "wins journal" - write down one thing you accomplished each day, no matter how small. Also, ask questions freely. It shows engagement, not incompetence.',
      time: '10:28 AM',
      isSelf: false,
      avatar: '👩‍🏫'
    },
    {
      id: 6,
      sender: 'Dr. Emily Chen',
      content: 'I\'d love to schedule a follow-up session this week. What works for you?',
      time: '10:30 AM',
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
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory.toLowerCase().replace(' ', '').replace('&', '');
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  const CommunityPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Modern Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform hover:scale-105 transition-transform"
                  style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
                >
                  🌟
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Community Hub
                </h1>
                <p className="text-sm text-gray-500">Connect, Learn, Grow Together</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setCurrentPage('chat')}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border-2 hover:shadow-md transition-all duration-200 bg-white/50"
                style={{borderColor: '#585182', color: '#585182'}}
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline font-medium">Messages</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
              </button>
              <button className="p-3 rounded-xl hover:bg-gray-100 relative transition-colors">
                <Bell size={20} style={{color: '#585182'}} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  5
                </span>
              </button>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow" style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)', color: 'white'}}>
                😊
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
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
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                        isSelected 
                          ? 'shadow-md transform scale-105' 
                          : 'hover:bg-gray-50 hover:shadow-sm'
                      }`}
                      style={isSelected ? {backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}`} : {}}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'shadow-sm' : 'group-hover:shadow-sm'}`} style={{backgroundColor: `${category.color}20`}}>
                          <Icon size={18} style={{color: category.color}} />
                        </div>
                        <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Stats */}
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

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg border border-purple-100 p-6">
              <h3 className="font-bold text-lg mb-4 text-purple-800">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full p-3 rounded-lg bg-white/70 hover:bg-white/90 transition-colors flex items-center space-x-2 text-purple-700 font-medium">
                  <Plus size={16} />
                  <span>Start Discussion</span>
                </button>
                <button className="w-full p-3 rounded-lg bg-white/70 hover:bg-white/90 transition-colors flex items-center space-x-2 text-purple-700 font-medium">
                  <Search size={16} />
                  <span>Find Advisor</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Actions */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search discussions, people, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-300 focus:bg-white transition-all"
                  />
                </div>
                <button 
                  className="px-8 py-4 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2 font-semibold transform hover:scale-105"
                  style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
                >
                  <Plus size={20} />
                  <span>New Post</span>
                </button>
              </div>
            </div>

            {/* Enhanced Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                        {post.avatar}
                      </div>
                      {post.isAdvisor && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Shield size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">{post.author}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span className="font-medium">{post.role}</span>
                            <span>•</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <MoreHorizontal size={20} className="text-gray-400" />
                        </button>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-bold text-xl mb-3 text-gray-900 leading-tight">{post.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-base">{post.content}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:shadow-sm transition-shadow cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-6">
                          <button className={`flex items-center space-x-2 hover:bg-red-50 px-4 py-2 rounded-lg transition-all ${
                            post.isLiked ? 'text-red-500 bg-red-50' : 'text-gray-600'
                          }`}>
                            <Heart size={18} fill={post.isLiked ? 'currentColor' : 'none'} />
                            <span className="font-semibold">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all">
                            <MessageSquare size={18} />
                            <span className="font-semibold">{post.comments}</span>
                          </button>
                        </div>
                        <button className="font-semibold hover:bg-purple-50 px-4 py-2 rounded-lg transition-all" style={{color: '#585182'}}>
                          Join Discussion →
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
    <div className="h-screen bg-gradient-to-br from-gray-50 to-white flex">
      {/* Enhanced Chat Sidebar */}
      <div className="w-full sm:w-96 bg-white/80 backdrop-blur-md border-r border-gray-200 flex flex-col shadow-lg">
        {/* Chat Header with Back Button */}
        <div className="p-6 border-b border-gray-200 bg-white/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setCurrentPage('community')}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors group"
                title="Back to Community"
              >
                <ArrowLeft size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
              </button>
              <div>
                <h2 className="text-xl font-bold" style={{color: '#585182'}}>Messages</h2>
                <p className="text-sm text-gray-500">4 active conversations</p>
              </div>
            </div>
            <button className="p-3 rounded-xl hover:bg-purple-50 transition-colors" style={{color: '#585182'}}>
              <Plus size={20} />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl text-sm focus:ring-4 focus:ring-purple-100 focus:border-purple-300 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Enhanced Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 border-b border-gray-100 transition-all ${
                selectedChat?.id === chat.id ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-l-4' : ''
              }`}
              style={selectedChat?.id === chat.id ? {borderLeftColor: '#585182'} : {}}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                  {chat.avatar}
                </div>
                {chat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                )}
                {chat.type === 'advisor' && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield size={10} className="text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-base">{chat.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{chat.time}</span>
                    {chat.unread > 0 && (
                      <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 truncate mb-1">{chat.lastMessage}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">{chat.role}</span>
                  {chat.type === 'advisor' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                      Available
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Chat Content */}
      <div className={`flex-1 flex flex-col ${selectedChat ? 'block' : 'hidden sm:flex'}`}>
        {selectedChat ? (
          <>
            {/* Enhanced Chat Header */}
            <div className="p-6 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setSelectedChat(null)}
                    className="p-2 rounded-xl hover:bg-gray-100 sm:hidden transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md bg-gradient-to-br from-gray-100 to-gray-200">
                      {selectedChat.avatar}
                    </div>
                    {selectedChat.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{selectedChat.name}</h3>
                    <p className="text-sm text-gray-500">{selectedChat.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <Phone size={20} className="text-gray-600" />
                  </button>
                  <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <Video size={20} className="text-gray-600" />
                  </button>
                  <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end space-x-3 max-w-xs lg:max-w-md ${message.isSelf ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-md bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                      {message.avatar}
                    </div>
                    <div className={`px-5 py-3 rounded-2xl shadow-md max-w-sm ${
                      message.isSelf 
                        ? 'text-white rounded-br-md' 
                        : 'bg-white text-gray-900 rounded-bl-md border'
                    }`} style={message.isSelf ? {background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'} : {}}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.isSelf ? 'text-white/75' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Message Input */}
            <div className="p-6 bg-white/80 backdrop-blur-md border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="p-3 rounded-xl hover:bg-gray-100 transition-colors">
                  <Paperclip size={20} className="text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:bg-white border-2 border-transparent focus:border-purple-300 transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-xl hover:bg-gray-100 transition-colors">
                    <Smile size={18} className="text-gray-600" />
                  </button>
                </div>
                <button 
                  onClick={handleSendMessage}
                  className="p-4 rounded-2xl text-white hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)'}}
                >
                  <Send size={18} />
                </button>
              </div>
              
              {/* Typing indicator */}
              <div className="mt-3 flex items-center space-x-2 text-sm text-gray-500">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span>Dr. Emily Chen is typing...</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50/50 to-white/50">
            <div className="text-center max-w-md">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl" style={{background: 'linear-gradient(135deg, #585182 0%, #7C73B8 100%)', color: 'white'}}>
                💬
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#585182'}}>Select a conversation</h3>
              <p className="text-gray-500 leading-relaxed">Choose from your existing conversations, start a new chat, or connect with an advisor for personalized guidance.</p>
              <button 
                className="mt-6 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105"
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