import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hello! I'm here to provide support and guidance. Feel free to share what's on your mind, and I'll do my best to help.",
      sender: 'ai',
      timestamp: Date.now()
    },
    {
      text: "🌟 You're not alone in this journey.",
      sender: 'ai',
      timestamp: Date.now() + 1000
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const chatMessagesRef = useRef(null);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const playVideo = (videoId) => {
    const video = videoLectures.find(v => v.id === videoId);
    alert(`Playing video: ${video.title}\n\nIn a real implementation, this would open the video player with the selected content.`);
  };

  const openJournal = () => {
    alert('Opening full journal view...\n\nIn a real implementation, this would navigate to your complete journal with all entries, writing tools, and progress tracking.');
  };

  const openCommunity = () => {
    alert('Opening community page...\n\nIn a real implementation, this would show the full community section with more stories, support groups, and discussion forums.');
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

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Close chat when clicking outside
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
      <header className="w-full bg-[#585182] shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">🧠 MindWell</div>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#home" className="text-white font-medium hover:opacity-80 transition">Home</a></li>
            <li><a href="#videos" className="text-white font-medium hover:opacity-80 transition">Videos</a></li>
            <li><a href="#journal" className="text-white font-medium hover:opacity-80 transition">Journal</a></li>
            <li><a href="#community" className="text-white font-medium hover:opacity-80 transition">Community</a></li>
            <li><a href="#support" className="text-white font-medium hover:opacity-80 transition">Support</a></li>
          </ul>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">Hello, <span className="text-[#585182] font-semibold">Alex</span>.</h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">How are you feeling today?</p>
          <div className="inline-flex items-center gap-3 mt-4 px-6 py-3 bg-[#585182]/10 border-2 border-[#585182]/20 rounded-full">
            <span className="text-2xl">😊</span>
            <span className="text-base sm:text-lg">Feeling optimistic today</span>
          </div>
          <div className="mt-10">
            <button className="bg-[#585182] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#4a4070] transition" onClick={() => scrollToSection('videos')}>
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Video Lectures Section */}
        <section id="videos" className="content-section">
          <div className="container">
            <h2 className="section-title">🎥 Start Your Healing Journey with Expert-Guided Video Lectures</h2>
            <p className="section-subtitle">Discover curated content designed to support your mental wellness journey</p>
            
            <div className="video-grid">
              {videoLectures.map((video) => (
                <div key={video.id} className="video-card">
                  <div className="video-thumbnail" onClick={() => playVideo(video.id)}>
                    <div className="thumbnail-bg">
                      <span className="thumbnail-emoji">{video.thumbnail}</span>
                    </div>
                    <div className="play-button">▶️</div>
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Journal Section */}
        <section id="journal" className="journal-section">
          <div className="container">
            <h2 className="section-title">📖 Daily Journal Snapshot</h2>
            <p className="section-subtitle">Reflect on your thoughts and track your emotional journey</p>
            
            <div className="journal-snapshot">
              {journalEntries.map((entry, index) => (
                <div key={index} className="journal-entry">
                  <div className="entry-date">{entry.date}</div>
                  <div className="entry-text">"{entry.text}"</div>
                </div>
              ))}
              <button className="cta-button" onClick={openJournal}>View Full Journal</button>
            </div>
          </div>
        </section>

        {/* Community Spotlights */}
        <section id="community" className="community-section">
          <div className="container">
            <h2 className="section-title">💬 Community Spotlights</h2>
            <p className="section-subtitle">Find inspiration in shared experiences and collective healing</p>
            
            <div className="story-carousel">
              {communityStories.map((story, index) => (
                <div key={index} className="story-card">
                  <div className="story-text">"{story.text}"</div>
                  <div className="story-author">- {story.author}</div>
                  <button className="read-more-btn" onClick={openCommunity}>Read More</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Emergency Support Button */}
      <button className="emergency-support" onClick={toggleChat} title="Chat with AI Support">
        💬
      </button>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <div>🤖 AI Support - Here to Help</div>
          </div>
          <div className="chat-messages" ref={chatMessagesRef}>
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender}`}
                style={{
                  marginBottom: '15px',
                  padding: '10px 15px',
                  borderRadius: '15px',
                  maxWidth: '80%',
                  backgroundColor: message.sender === 'user' ? '#585182' : '#f0f0f0',
                  color: message.sender === 'user' ? 'white' : '#333',
                  marginLeft: message.sender === 'user' ? 'auto' : '0',
                  textAlign: message.sender === 'user' ? 'right' : 'left'
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message here..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleChatInput}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: white;
          min-height: 100vh;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          padding: 20px 0;
          background: #585182;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .nav-links a:hover {
          opacity: 0.8;
        }

        /* Welcome Section */
        .welcome-section {
          padding: 80px 0;
          text-align: center;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8edff 100%);
          margin: 0;
          border-bottom: 1px solid #e9ecef;
        }

        .welcome-section h1 {
          font-size: 48px;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .welcome-section .username {
          color: #585182;
          font-weight: 600;
        }

        .welcome-section p {
          font-size: 24px;
          color: #555;
          margin-bottom: 40px;
        }

        .mood-indicator {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          padding: 15px 25px;
          background: rgba(88, 81, 130, 0.1);
          border-radius: 50px;
          border: 2px solid rgba(88, 81, 130, 0.2);
        }

        .mood-emoji {
          font-size: 24px;
        }

        .cta-button {
          background: #585182;
          color: white;
          padding: 15px 40px;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(88, 81, 130, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(88, 81, 130, 0.6);
          background: #4a4070;
        }

        /* Main Content */
        .main-content {
          background: white;
        }

        .content-section {
          padding: 60px 40px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        .section-subtitle {
          font-size: 18px;
          color: #7f8c8d;
          margin-bottom: 40px;
        }

        /* Video Lectures Section */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .video-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 25px;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
          cursor: pointer;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .video-thumbnail {
          height: 180px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .thumbnail-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thumbnail-emoji {
          font-size: 48px;
          opacity: 0.3;
        }

        .play-button {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #585182;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .play-button:hover {
          background: white;
          transform: scale(1.1);
        }

        .video-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .video-description {
          color: #7f8c8d;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Journal Section */
        .journal-section {
          background: #f8f9fa;
          padding: 60px 40px;
        }

        .journal-snapshot {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          margin-top: 30px;
        }

        .journal-entry {
          border-left: 4px solid #585182;
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .entry-date {
          font-size: 14px;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .entry-text {
          font-style: italic;
          color: #555;
          line-height: 1.6;
        }

        /* Community Section */
        .community-section {
          padding: 60px 40px;
        }

        .story-carousel {
          display: flex;
          gap: 30px;
          margin-top: 40px;
          overflow-x: auto;
          padding: 20px 0;
        }

        .story-card {
          min-width: 350px;
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #585182;
        }

        .story-text {
          font-style: italic;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .story-author {
          font-weight: 600;
          color: #585182;
        }

        .read-more-btn {
          background: transparent;
          color: #585182;
          border: 2px solid #585182;
          padding: 10px 25px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
        }

        .read-more-btn:hover {
          background: #585182;
          color: white;
        }

        /* Emergency Support Button */
        .emergency-support {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #585182;
          color: white;
          border: none;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(88, 81, 130, 0.4);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .emergency-support:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(88, 81, 130, 0.6);
        }

        /* Chat Modal */
        .chat-modal {
          position: fixed;
          bottom: 120px;
          right: 30px;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          overflow: hidden;
          border: 1px solid #e9ecef;
        }

        .chat-header {
          background: #585182;
          color: white;
          padding: 20px;
          font-weight: 600;
        }

        .chat-messages {
          height: 350px;
          padding: 20px;
          overflow-y: auto;
        }

        .chat-input-area {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
        }

        .chat-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 25px;
          outline: none;
          font-family: inherit;
        }

        .chat-input:focus {
          border-color: #585182;
          box-shadow: 0 0 0 3px rgba(88, 81, 130, 0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .welcome-section h1 {
            font-size: 32px;
          }

          .section-title {
            font-size: 28px;
          }

          .video-grid {
            grid-template-columns: 1fr;
          }

          .story-carousel {
            flex-direction: column;
          }

          .story-card {
            min-width: 100%;
          }

          .chat-modal {
            width: 90%;
            right: 5%;
          }

          .content-section {
            padding: 40px 20px;
          }

          .journal-section {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;