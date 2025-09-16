import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  UserCheck, 
  Heart, 
  Send, 
  Search, 
  Filter,
  AlertTriangle,
  CloudRain,
  Flame,
  Moon,
  GraduationCap,
  UserX,
  Bell,
  Settings,
  Lock,
  Globe,
  Plus,
  Star,
  ThumbsUp,
  Eye,
  Clock,
  Shield,
  Video,
  Phone
} from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('community');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPrivateChat, setShowPrivateChat] = useState(false);
  const [selectedChatUser, setSelectedChatUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const categories = [
    { id: 'all', name: 'All Topics', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { id: 'anxiety', name: 'Anxiety', icon: AlertTriangle, color: 'from-orange-500 to-red-500' },
    { id: 'depression', name: 'Depression', icon: CloudRain, color: 'from-gray-600 to-blue-600' },
    { id: 'burnout', name: 'Burnout', icon: Flame, color: 'from-red-600 to-orange-600' },
    { id: 'sleep', name: 'Sleep Issues', icon: Moon, color: 'from-indigo-600 to-purple-600' },
    { id: 'academic', name: 'Academic Stress', icon: GraduationCap, color: 'from-green-600 to-teal-600' },
    { id: 'social', name: 'Social Issues', icon: UserX, color: 'from-purple-600 to-pink-600' }
  ];

  const communityPosts = [
    {
      id: 1,
      user: { name: 'Sarah M.', isAdvisor: false, avatar: '👩‍💼' },
      category: 'anxiety',
      title: 'Dealing with exam anxiety - tips that worked for me',
      content: 'I wanted to share some techniques that really helped me manage my exam anxiety. Deep breathing exercises before each exam and creating a study schedule really made a difference...',
      timestamp: '2 hours ago',
      likes: 24,
      replies: 12,
      isLiked: false
    },
    {
      id: 2,
      user: { name: 'Dr. Emily Johnson', isAdvisor: true, avatar: '👩‍⚕️' },
      category: 'depression',
      title: 'Understanding seasonal depression patterns',
      content: 'As we approach winter, many people experience changes in mood. Here are some evidence-based strategies to help manage seasonal depression symptoms...',
      timestamp: '4 hours ago',
      likes: 45,
      replies: 18,
      isLiked: true
    },
    {
      id: 3,
      user: { name: 'Mike R.', isAdvisor: false, avatar: '👨‍💻' },
      category: 'burnout',
      title: 'Work-life balance as a student',
      content: 'Struggling to find balance between work, studies, and personal life. Would love to hear how others manage this...',
      timestamp: '6 hours ago',
      likes: 15,
      replies: 8,
      isLiked: false
    }
  ];

  const advisors = [
    { 
      id: 1, 
      name: 'Dr. Emily Johnson', 
      speciality: 'Anxiety & Depression', 
      avatar: '👩‍⚕️',
      rating: 4.9,
      status: 'online',
      experience: '8 years'
    },
    { 
      id: 2, 
      name: 'Dr. Michael Chen', 
      speciality: 'Academic Stress', 
      avatar: '👨‍⚕️',
      rating: 4.8,
      status: 'away',
      experience: '6 years'
    },
    { 
      id: 3, 
      name: 'Dr. Lisa Williams', 
      speciality: 'Sleep & Wellness', 
      avatar: '👩‍⚕️',
      rating: 4.9,
      status: 'online',
      experience: '10 years'
    }
  ];

  const recentChats = [
    { id: 1, name: 'Sarah M.', lastMessage: 'Thanks for the advice!', time: '2 min', unread: 1, avatar: '👩‍💼' },
    { id: 2, name: 'Dr. Emily Johnson', lastMessage: 'Let\'s schedule a follow-up', time: '1 hour', unread: 0, avatar: '👩‍⚕️' },
    { id: 3, name: 'Support Group - Anxiety', lastMessage: 'New member joined', time: '3 hours', unread: 3, avatar: '👥' }
  ];

  const Header = () => (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl md:text-2xl font-bold flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Community Hub
          </h1>
          <p className="text-purple-100 text-sm">Connect, Share, and Grow Together</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all">
            <Bell className="w-5 h-5 text-white" />
          </button>
          <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  const CategoryFilter = () => (
    <div className="p-4 bg-white border-b">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">Topics</h3>
        <button 
          onClick={() => setShowCreatePost(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          <Plus className="w-4 h-4 mr-1" />
          New Post
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-3 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );

  const CommunityPost = ({ post }) => {
    const categoryInfo = categories.find(cat => cat.id === post.category);
    const CategoryIcon = categoryInfo?.icon || Globe;
    
    return (
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
            {post.user.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">{post.user.name}</span>
                {post.user.isAdvisor && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    Advisor
                  </span>
                )}
                <span className="text-gray-500 text-sm flex items-center">
                  <CategoryIcon className="w-3 h-3 mr-1" />
                  {categoryInfo?.name}
                </span>
              </div>
              <span className="text-gray-400 text-sm flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {post.timestamp}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-all ${
                  post.isLiked ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                }`}>
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.replies}</span>
                </button>
              </div>
              <button 
                onClick={() => {
                  setSelectedChatUser(post.user);
                  setShowPrivateChat(true);
                }}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium"
              >
                Message User
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AdvisorCard = ({ advisor }) => (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
            {advisor.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{advisor.name}</h3>
            <p className="text-sm text-gray-600">{advisor.speciality}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          advisor.status === 'online' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {advisor.status}
        </span>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{advisor.rating}</span>
          <span className="text-xs text-gray-500">({advisor.experience})</span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => {
            setSelectedChatUser(advisor);
            setShowPrivateChat(true);
          }}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center"
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          Chat
        </button>
        <button className="bg-white border border-purple-200 text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-all">
          <Video className="w-4 h-4" />
        </button>
        <button className="bg-white border border-purple-200 text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-all">
          <Phone className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const ChatList = () => (
    <div className="space-y-3">
      {recentChats.map(chat => (
        <div 
          key={chat.id}
          onClick={() => {
            setSelectedChatUser(chat);
            setShowPrivateChat(true);
          }}
          className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-purple-50 cursor-pointer transition-all border"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg">
            {chat.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900 truncate">{chat.name}</h4>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          </div>
          {chat.unread > 0 && (
            <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {chat.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  const PrivateChatModal = () => {
    if (!showPrivateChat || !selectedChatUser) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                {selectedChatUser.avatar}
              </div>
              <div>
                <h3 className="text-white font-semibold">{selectedChatUser.name}</h3>
                <p className="text-purple-100 text-sm">
                  {selectedChatUser.isAdvisor ? 'Mental Health Advisor' : 'Community Member'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowPrivateChat(false)}
              className="text-white hover:bg-white/20 p-1 rounded"
            >
              ×
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-xl max-w-xs">
                  <p className="text-sm">Hi! Thanks for reaching out.</p>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl max-w-xs">
                  <p className="text-sm">I'd love to discuss the strategies you mentioned.</p>
                  <span className="text-xs text-purple-100">1 min ago</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CreatePostModal = () => {
    if (!showCreatePost) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-lg w-full">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-xl flex items-center justify-between">
            <h3 className="text-white font-semibold">Create New Post</h3>
            <button 
              onClick={() => setShowCreatePost(false)}
              className="text-white hover:bg-white/20 p-1 rounded"
            >
              ×
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                {categories.slice(1).map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="What would you like to discuss?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                rows={4}
                placeholder="Share your thoughts, experiences, or questions..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="anonymous" className="rounded" />
              <label htmlFor="anonymous" className="text-sm text-gray-600">Post anonymously</label>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowCreatePost(false)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Header />
          
          {/* Navigation Tabs */}
          <div className="bg-white border-b">
            <div className="flex overflow-x-auto">
              {[
                { id: 'community', name: 'Community Feed', icon: Globe },
                { id: 'advisors', name: 'Advisors', icon: UserCheck },
                { id: 'chats', name: 'Messages', icon: MessageCircle }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 font-medium whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-h-[600px]">
            {activeTab === 'community' && (
              <div>
                <CategoryFilter />
                <div className="p-6">
                  {communityPosts.map(post => (
                    <CommunityPost key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'advisors' && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Mental Health Advisors</h2>
                  <p className="text-gray-600">Connect with qualified professionals for personalized guidance</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advisors.map(advisor => (
                    <AdvisorCard key={advisor.id} advisor={advisor} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chats' && (
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Messages</h2>
                  <p className="text-gray-600">Private conversations with community members and advisors</p>
                </div>
                <ChatList />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <PrivateChatModal />
      <CreatePostModal />
    </div>
  );
};

export default CommunityPage;