import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Users, Send, Search, Filter, Heart, MessageSquare, Star, User, Settings, Bell, Plus, Phone, Video, MoreHorizontal, Smile, Paperclip, ArrowLeft, UserCheck, Shield, Coffee, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

const CommunityPlatform = () => {
  const [currentPage, setCurrentPage] = useState('community');
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  // Sample data
  const categories = [
    { id: 'all', name: 'All', icon: Users, color: '#585182' },
    { id: 'general', name: 'General Discussion', icon: MessageCircle, color: '#4a90e2' },
    { id: 'advice', name: 'Ask Advisors', icon: Lightbulb, color: '#f5a623' },
    { id: 'resources', name: 'Resources', icon: BookOpen, color: '#50c878' },
    { id: 'success', name: 'Success Stories', icon: TrendingUp, color: '#ff6b6b' },
    { id: 'coffee', name: 'Coffee Chat', icon: Coffee, color: '#8b4513' }
  ];

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      role: 'Community Member',
      avatar: '👩‍💼',
      time: '2 hours ago',
      category: 'advice',
      title: 'How to balance work and personal growth?',
      content: 'I\'ve been struggling to find the right balance between my demanding job and pursuing personal development. Any advice from those who\'ve been there?',
      likes: 23,
      comments: 8,
      isLiked: false
    },
    {
      id: 2,
      author: 'Dr. Michael Chen',
      role: 'Advisor',
      avatar: '👨‍⚕️',
      time: '4 hours ago',
      category: 'general',
      title: 'Weekly Check-in: How is everyone doing?',
      content: 'Hope everyone is having a great week! Remember, small progress is still progress. What\'s one thing you accomplished this week that you\'re proud of?',
      likes: 45,
      comments: 19,
      isLiked: true,
      isAdvisor: true
    },
    {
      id: 3,
      author: 'Emma Rodriguez',
      role: 'Community Member',
      avatar: '👩‍🎨',
      time: '6 hours ago',
      category: 'success',
      title: 'Finally launched my side project! 🎉',
      content: 'After months of planning and development, I finally launched my freelance design platform. Thank you to everyone in this community for the encouragement!',
      likes: 67,
      comments: 24,
      isLiked: false
    }
  ];

  const chats = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      role: 'Advisor',
      avatar: '👨‍⚕️',
      lastMessage: 'I think we should schedule a follow-up session next week.',
      time: '10:30 AM',
      unread: 2,
      isOnline: true,
      type: 'private'
    },
    {
      id: 2,
      name: 'Design Enthusiasts',
      role: 'Group Chat',
      avatar: '🎨',
      lastMessage: 'Sarah: The new Adobe update is amazing!',
      time: '9:45 AM',
      unread: 0,
      isOnline: false,
      type: 'group'
    },
    {
      id: 3,
      name: 'Anna Wilson',
      role: 'Community Member',
      avatar: '👩‍💻',
      lastMessage: 'Thanks for the advice on the project!',
      time: 'Yesterday',
      unread: 1,
      isOnline: false,
      type: 'private'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Michael Chen',
      content: 'Hi! I saw your post about work-life balance. I think we could explore some strategies that might help.',
      time: '10:15 AM',
      isSelf: false,
      avatar: '👨‍⚕️'
    },
    {
      id: 2,
      sender: 'You',
      content: 'That would be really helpful! I feel like I\'m always behind on something.',
      time: '10:18 AM',
      isSelf: true,
      avatar: '👤'
    },
    {
      id: 3,
      sender: 'Dr. Michael Chen',
      content: 'That\'s completely normal. Let\'s start with time-blocking techniques. Have you tried setting specific hours for different activities?',
      time: '10:20 AM',
      isSelf: false,
      avatar: '👨‍⚕️'
    },
    {
      id: 4,
      sender: 'You',
      content: 'I\'ve heard about it but never really implemented it properly.',
      time: '10:25 AM',
      isSelf: true,
      avatar: '👤'
    },
    {
      id: 5,
      sender: 'Dr. Michael Chen',
      content: 'I think we should schedule a follow-up session next week.',
      time: '10:30 AM',
      isSelf: false,
      avatar: '👨‍⚕️'
    }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  const CommunityPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl" style={{backgroundColor: '#585182'}}>
                  🌟
                </div>
                <h1 className="text-2xl font-bold" style={{color: '#585182'}}>Community Hub</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('chat')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border-2 hover:bg-gray-50 transition-colors"
                style={{borderColor: '#585182', color: '#585182'}}
              >
                <MessageCircle size={20} />
                <span className="hidden sm:inline">Messages</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell size={20} style={{color: '#585182'}} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{backgroundColor: '#585182', color: 'white'}}>
                👤
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-lg mb-4" style={{color: '#585182'}}>Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.name ? 'bg-gray-100' : 'hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={18} style={{color: category.color}} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="font-semibold text-lg mb-4" style={{color: '#585182'}}>Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discussions</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Advisors Online</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Create Post */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{focusRingColor: '#585182'}}
                  />
                </div>
                <button 
                  className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
                  style={{backgroundColor: '#585182'}}
                >
                  <Plus size={20} />
                  <span>New Post</span>
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gray-100">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{post.author}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>{post.role}</span>
                            {post.isAdvisor && <Shield size={14} className="text-blue-500" />}
                            <span>•</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg hover:bg-gray-100">
                          <MoreHorizontal size={20} className="text-gray-400" />
                        </button>
                      </div>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{post.content}</p>
                      </div>

                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-6">
                          <button className={`flex items-center space-x-2 hover:bg-gray-50 px-3 py-1 rounded-lg transition-colors ${
                            post.isLiked ? 'text-red-500' : 'text-gray-600'
                          }`}>
                            <Heart size={18} fill={post.isLiked ? 'currentColor' : 'none'} />
                            <span className="text-sm font-medium">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-50 px-3 py-1 rounded-lg transition-colors">
                            <MessageSquare size={18} />
                            <span className="text-sm font-medium">{post.comments}</span>
                          </button>
                        </div>
                        <button className="text-sm font-medium hover:bg-gray-50 px-3 py-1 rounded-lg transition-colors" style={{color: '#585182'}}>
                          Join Discussion
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
    <div className="h-screen bg-gray-50 flex">
      {/* Chat Sidebar */}
      <div className="w-full sm:w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentPage('community')}
              className="p-2 rounded-lg hover:bg-gray-100 sm:hidden"
            >
              <ArrowLeft size={20} style={{color: '#585182'}} />
            </button>
            <h2 className="text-xl font-bold" style={{color: '#585182'}}>Messages</h2>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Plus size={20} style={{color: '#585182'}} />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:border-transparent"
              style={{focusRingColor: '#585182'}}
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 border-b border-gray-100 ${
                selectedChat?.id === chat.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gray-100">
                  {chat.avatar}
                </div>
                {chat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm">{chat.name}</h4>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400">{chat.role}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Content */}
      <div className={`flex-1 flex flex-col ${selectedChat ? 'block' : 'hidden sm:flex'}`}>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setSelectedChat(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 sm:hidden"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-gray-100">
                    {selectedChat.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedChat.name}</h3>
                    <p className="text-sm text-gray-500">{selectedChat.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Phone size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Video size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <MoreHorizontal size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isSelf ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-gray-100 flex-shrink-0">
                      {message.avatar}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.isSelf 
                        ? 'text-white' 
                        : 'bg-gray-200 text-gray-900'
                    }`} style={message.isSelf ? {backgroundColor: '#585182'} : {}}>
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isSelf ? 'text-white opacity-75' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Paperclip size={20} className="text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-gray-100 rounded-full focus:ring-2 focus:ring-offset-0 focus:bg-white border-transparent"
                    style={{focusRingColor: '#585182'}}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-gray-200">
                    <Smile size={18} className="text-gray-600" />
                  </button>
                </div>
                <button 
                  onClick={handleSendMessage}
                  className="p-3 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{backgroundColor: '#585182'}}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4" style={{backgroundColor: '#585182', color: 'white'}}>
                💬
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: '#585182'}}>Select a conversation</h3>
              <p className="text-gray-500">Choose from your existing conversations or start a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {currentPage === 'community' ? <CommunityPage /> : <ChatPage />}
    </div>
  );
};

export default CommunityPlatform;