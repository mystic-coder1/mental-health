import React, { useState, useRef, useEffect } from 'react';

const HomePage = () => {
  // Chat state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hello! I'm here to provide support",
      sender: "bot",
      timestamp: Date.now()
    },
    {
      text: "Feel free to share what's on your mind, and I'll do my best to help.",
      sender: 'bot',
      timestamp: Date.now() + 500
    },
    {
      text: "🌟 You're not alone in this journey.",
      sender: 'bot',
      timestamp: Date.now() + 1000
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatMessagesRef = useRef(null);

  // Data
  const videoLectures = [
    {
      id: 'stress-anxiety',
      title: 'Managing Stress and Anxiety',
      description: 'Learn practical techniques to identify triggers and develop healthy coping mechanisms for daily stress management.',
      thumbnail: '🧘‍♀️'
    },
    {
      id: 'healthy-habits',
      title: 'Building Healthy Habits',
      description: 'Discover how small, consistent changes can transform your mental well-being and create lasting positive impact.',
      thumbnail: '🌱'
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness Techniques for Beginners',
      description: 'Start your mindfulness journey with simple, effective techniques you can practice anywhere, anytime.',
      thumbnail: '🧠'
    },
    {
      id: 'negative-thoughts',
      title: 'How to Cope with Negative Thoughts',
      description: 'Understand the nature of negative thinking patterns and learn evidence-based strategies to overcome them.',
      thumbnail: '💭'
    }
  ];

  const journalEntries = [
    {
      date: 'Today, September 17, 2025',
      text: 'Started my morning with a 10-minute meditation session. Felt more centered and ready to tackle the day. The breathing exercises from yesterday\'s video really helped...'
    },
    {
      date: 'Yesterday',
      text: 'Had a challenging conversation at work, but I managed to stay calm and communicate my feelings clearly. Progress!'
    }
  ];

  const communityStories = [
    {
      text: 'After months of anxiety, I finally found peace through the mindfulness videos. The community support made all the difference in my recovery journey.',
      author: 'Anonymous Community Member'
    },
    {
      text: 'Journaling became my safe space. Writing down my thoughts helped me understand my emotions better and track my progress over time.',
      author: 'Sarah M.'
    },
    {
      text: 'The expert lectures gave me tools I never knew existed. Now I help others in my community using what I\'ve learned here.',
      author: 'Alex R.'
    }
  ];

  // Functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCommunity = () => {
    alert('Opening community page...\n\nIn a real implementation, this would show the full community section with more stories, support groups, and discussion forums.');
  };

  const playVideo = (videoId) => {
    const video = videoLectures.find(v => v.id === videoId);
    alert(`Playing video: ${video.title}\n\nIn a real implementation, this would open the video player with the selected content.`);
  };

  const openJournal = () => {
    alert('Opening full journal view...\n\nIn a real implementation, this would navigate to your complete journal with all entries, writing tools, and progress tracking.');
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleChatInput = (e) => {
    if (e.key === 'Enter' && currentMessage.trim()) {
      const userMessage = {
        text: currentMessage.trim(),
        sender: 'user',
        timestamp: Date.now()
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setCurrentMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "Thank you for sharing that with me. It takes courage to reach out. Can you tell me more about what you're experiencing?",
          "I hear you, and your feelings are completely valid. Let's work through this together. Have you tried any breathing exercises today?",
          "That sounds really challenging. Remember, it's okay to take things one step at a time. Would you like me to guide you through a quick mindfulness exercise?",
          "You're taking positive steps by reaching out. That shows real strength. How has your day been overall?",
          "I'm here to support you. If you're in crisis, please don't hesitate to contact a professional helpline. For now, let's focus on some grounding techniques."
        ];
        
        const aiMessage = {
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: 'ai',
          timestamp: Date.now()
        };
        
        setChatMessages(prev => [...prev, aiMessage]);
      }, 1500);
    }
  };

  // Effects
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatOpen && 
          !event.target.closest('.chat-modal') && 
          !event.target.closest('.emergency-support')) {
        setChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [chatOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-[#585182] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">Mind Mate</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-white hover:text-opacity-80 px-3 py-2 transition-colors">Home</a>
                <a href="#videos" className="text-white hover:text-opacity-80 px-3 py-2 transition-colors">Videos</a>
                <a href="#journal" className="text-white hover:text-opacity-80 px-3 py-2 transition-colors">Journal</a>
                <a href="#community" className="text-white hover:text-opacity-80 px-3 py-2 transition-colors">Community</a>
                <a href="#support" className="text-white hover:text-opacity-80 px-3 py-2 transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 min-h-screen bg-[#f8fafc]">
        {/* Welcome Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-normal text-gray-900">
                Hello, <span className="text-[#585182] font-medium">Rohan</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                How are you feeling today?
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
                <span className="text-2xl">😊</span>
                <span className="text-lg text-gray-700">Feeling optimistic today</span>
              </div>
              <div>
                <button
                  className="mt-8 px-8 py-3 bg-[#585182] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#4a4070] transition-colors"
                  onClick={() => scrollToSection('videos')}
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Lectures Section */}
        <section id="videos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🎥</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Start Your Healing Journey with Expert-Guided Video Lectures
              </h2>
              <p className="text-lg text-gray-600">
                Discover curated content designed to support your mental wellness journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoLectures.map((video) => (
                <div 
                  key={video.id} 
                  className="bg-[#585182] rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => playVideo(video.id)}
                >
                  <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-[#585182] p-8">
                    <span className="text-6xl">{video.thumbnail}</span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section id="journal" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Daily Journal Snapshot
              </h2>
              <p className="text-lg text-gray-600">
                Reflect on your thoughts and track your emotional journey
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              {journalEntries.map((entry, index) => (
                <div key={index} className="border-l-4 border-[#585182] pl-6 py-2">
                  <div className="text-sm text-gray-500 mb-2">{entry.date}</div>
                  <div className="text-gray-700 italic">"{entry.text}"</div>
                </div>
              ))}
              <div className="text-center pt-6">
                <button 
                  className="px-8 py-3 bg-[#585182] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#4a4070] transition-colors"
                  onClick={openJournal}
                >
                  View Full Journal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Community Spotlights
              </h2>
              <p className="text-lg text-gray-600">
                Find inspiration in shared experiences and collective healing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communityStories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#585182]">
                  <div className="text-gray-700 italic mb-4">"{story.text}"</div>
                  <div className="text-[#585182] font-medium">- {story.author}</div>
                  <button 
                    className="mt-6 w-full px-6 py-3 border-2 border-[#585182] text-[#585182] font-medium rounded-full hover:bg-[#585182] hover:text-white transition-colors"
                    onClick={openCommunity}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Emergency Support Button */}
      <button 
        className="fixed bottom-8 right-8 bg-[#585182] text-white w-16 h-16 rounded-full shadow-lg hover:bg-[#4a4070] transition-colors flex items-center justify-center text-2xl"
        onClick={toggleChat} 
        title="Chat with AI Support"
      >
        💬
      </button>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[500px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
          <div className="bg-[#585182] text-white px-6 py-4 font-semibold">
            🤖 AI Support - Here to Help
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-y-auto" ref={chatMessagesRef}>
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 inline-block ${
                    message.sender === 'user'
                      ? 'bg-[#585182] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#585182] focus:ring-2 focus:ring-[#585182] focus:ring-opacity-20"
              placeholder="Type your message here..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleChatInput}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;