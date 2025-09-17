import React, { useState, useRef, useEffect } from 'react';
import { Send, Moon, Heart, Brain, MessageCircle, Smile, Shield, Coffee, Star, Zap } from 'lucide-react';

const AdvancedMentalHealthChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! 👋 I'm your mental health companion, and I'm genuinely glad you're here. Think of me as that friend who's always available to listen, no matter what time it is or what's going on in your head. Whether you're dealing with those 3 AM anxiety spirals, can't seem to get good sleep, or just need someone who gets it - I'm here for all of it. What's been weighing on your mind lately?",
      sender: 'bot',
      timestamp: new Date(),
      mood: 'welcoming'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState({});
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const updateUserContext = (message) => {
    const lowerMessage = message.toLowerCase();
    const newContext = { ...userContext };
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety')) {
      newContext.hasAnxiety = true;
    }
    if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia')) {
      newContext.hasSleepIssues = true;
    }
    if (lowerMessage.includes('depressed') || lowerMessage.includes('sad')) {
      newContext.hasDepression = true;
    }
    if (lowerMessage.includes('work') || lowerMessage.includes('job')) {
      newContext.workStress = true;
    }
    
    setUserContext(newContext);
    return newContext;
  };

  const generateAdvancedResponse = (userMessage, context) => {
    const message = userMessage.toLowerCase();
    
    // Sleep disorder responses - more sophisticated and contextual
    if (message.includes('sleep') || message.includes('insomnia') || message.includes('tired') || message.includes('can\'t sleep')) {
      const sleepResponses = [
        "Ugh, sleep issues are honestly the worst because they mess with literally everything else, right? Your mood, energy, thinking - it's all connected. I'm curious, is this more of a 'can't fall asleep' situation or a 'wake up at 3 AM and brain won't shut up' kind of thing? Because the approach can be pretty different for each.",
        "Sleep troubles are like that annoying friend who overstays their welcome - except they mess with your entire life. Here's the thing though, most people don't realize that anxiety and sleep issues are like best frenemies - they feed off each other. Have you noticed your mind racing more when you're trying to wind down?",
        "You know what's frustrating? Everyone acts like sleep should be this simple, natural thing, but for so many of us, it's like trying to force your brain into submission every single night. What's your current bedtime situation like? Are we talking Netflix until 2 AM or actually trying to sleep but failing?",
        "I totally get this - insomnia is like having a really rude roommate in your head who decides 2 AM is the perfect time for deep philosophical discussions about every mistake you've ever made. Let's figure out what's actually keeping you up. Is it racing thoughts, physical restlessness, or just that general 'tired but wired' feeling?"
      ];
      return {
        text: sleepResponses[Math.floor(Math.random() * sleepResponses.length)],
        mood: 'understanding'
      };
    }
    
    // Anxiety responses - more relatable and practical
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried') || message.includes('panic') || message.includes('overwhelmed')) {
      const anxietyResponses = [
        "Anxiety is such a sneaky little beast, isn't it? It convinces you that literally everything is a crisis that needs solving RIGHT NOW. But here's what I've learned - anxiety is basically your brain's overprotective parent who sees danger in everything, even choosing what to have for lunch. What's got your anxiety brain all fired up today?",
        "Oh man, the anxiety spiral is real. It's like your brain decides to play 'worst case scenario bingo' and suddenly you're three steps deep into imagining disasters that will probably never happen. I see you're dealing with this right now - want to try something that might help break the cycle?",
        "You know what's wild about anxiety? It makes you feel like you're the only person falling apart when literally EVERYONE deals with this stuff. Your nervous system is just doing its job a little too enthusiastically. Are we talking general life anxiety or is there something specific that's got you in fight-or-flight mode?",
        "Anxiety has this fun way of making molehills feel like Mount Everest, doesn't it? Like suddenly ordering coffee becomes this complex social interaction you need a strategy for. I get it, and more importantly, what you're feeling is completely normal. What's the anxiety trying to 'protect' you from today?"
      ];
      
      if (context.hasSleepIssues) {
        anxietyResponses.push("I'm noticing you've mentioned both sleep and anxiety - and honestly, those two are like partners in crime. When you're anxious, sleep becomes impossible, and when you're sleep-deprived, everything feels more anxiety-provoking. It's this lovely little cycle that nobody asked for. Should we tackle the anxiety first or the sleep stuff?");
      }
      
      return {
        text: anxietyResponses[Math.floor(Math.random() * anxietyResponses.length)],
        mood: 'supportive'
      };
    }
    
    // Depression responses - more genuine and less clinical
    if (message.includes('depressed') || message.includes('sad') || message.includes('down') || message.includes('hopeless') || message.includes('empty')) {
      const depressionResponses = [
        "Depression is like having emotional anesthesia, isn't it? Everything just feels... muted. Like you're watching life through frosted glass. The hardest part is that people expect you to 'just think positive' when your brain literally isn't producing the chemicals needed to feel okay. I'm really glad you're here talking about it though - that takes guts.",
        "You know what nobody tells you about depression? It's not just sadness - it's like your brain forgot how to feel joy, motivation, or even basic interest in things. It's exhausting pretending to be okay when inside you feel like you're running on empty. How long have you been carrying this weight?",
        "Depression lies. It's really good at convincing you that this is permanent, that you're broken, that nothing will help. But here's the thing - you're still here, still trying, still reaching out. That's not nothing, that's actually pretty incredible. What does a typical day look like for you right now?",
        "The thing about depression is it makes everything feel impossible - getting out of bed, showering, calling people back. And then you feel guilty for struggling with 'basic' stuff, which just makes it worse. It's like emotional quicksand. But you're talking to me right now, which means part of you is still fighting, and I think that's pretty amazing."
      ];
      return {
        text: depressionResponses[Math.floor(Math.random() * depressionResponses.length)],
        mood: 'compassionate'
      };
    }
    
    // Work/stress related
    if (message.includes('work') || message.includes('job') || message.includes('boss') || message.includes('stress')) {
      const workResponses = [
        "Ah, work stress - the gift that keeps on giving, right? It's like your job follows you home, sits at your dinner table, and tucks you in at night with a nice bedtime story about all your deadlines. What's going on at work that's got you wound up?",
        "Work can be such a mental health minefield. You've got deadlines, difficult people, pressure to perform, and somehow you're supposed to leave it all at the office like it's that simple. Is it more the workload itself or the people/environment that's getting to you?",
        "Let me guess - you're probably that person who cares a lot about doing good work, which makes the stress even worse because you can't just phone it in, right? The perfectionist curse is real. What's the most stressful part of your work situation right now?"
      ];
      return {
        text: workResponses[Math.floor(Math.random() * workResponses.length)],
        mood: 'understanding'
      };
    }
    
    // Relationship/social issues
    if (message.includes('friends') || message.includes('family') || message.includes('relationship') || message.includes('lonely')) {
      const socialResponses = [
        "Relationships are complicated, aren't they? Whether it's family drama, friend issues, or romantic stuff - people are just... a lot sometimes. And when you're already dealing with mental health stuff, social interactions can feel like navigating a minefield. What's going on with the people in your life?",
        "Loneliness hits different when you're struggling mentally. It's like everyone else got a manual on how to do relationships and you're just winging it. Plus, when you're anxious or depressed, it's easy to assume people don't actually want you around. What's making you feel disconnected right now?"
      ];
      return {
        text: socialResponses[Math.floor(Math.random() * socialResponses.length)],
        mood: 'understanding'
      };
    }
    
    // General check-ins and greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      const greetingResponses = [
        "Hey there! Good to see you back. How's your brain treating you today? Are we dealing with the usual suspects or is there something new keeping you up at night?",
        "Hello! I'm glad you're here. Seriously - reaching out when you're struggling takes courage that a lot of people don't have. What's on your mind today?",
        "Hi! Hope you're being kind to yourself today, even if your brain isn't being particularly cooperative. What's going on in your world?"
      ];
      return {
        text: greetingResponses[Math.floor(Math.random() * greetingResponses.length)],
        mood: 'welcoming'
      };
    }
    
    // Thank you responses
    if (message.includes('thank')) {
      const thankResponses = [
        "You don't need to thank me - honestly, I'm just glad I can be here for you. Taking care of your mental health is hard work, and you're doing it. That's what matters.",
        "Hey, we're in this together. You're doing the hard work of actually dealing with your stuff instead of just ignoring it, which is more than a lot of people can say. Keep going.",
        "No thanks needed! I'm just happy you feel comfortable enough to share what's really going on. That's huge, actually."
      ];
      return {
        text: thankResponses[Math.floor(Math.random() * thankResponses.length)],
        mood: 'warm'
      };
    }
    
    // Crisis/emergency language detection
    if (message.includes('hurt myself') || message.includes('kill myself') || message.includes('suicide') || message.includes('end it all')) {
      return {
        text: "Hey, I hear you, and I'm really concerned about what you just shared. What you're feeling right now sounds incredibly painful, but I need you to know that there are people trained specifically to help with these feelings who can do way more than I can. Please reach out to a crisis helpline - in the US, you can call 988 for the Suicide & Crisis Lifeline. You matter, and there are people who want to help you through this.",
        mood: 'urgent'
      };
    }
    
    // Default empathetic responses - more conversational
    const defaultResponses = [
      "I hear you. Mental health stuff is so individual and weird - what works for one person might be completely useless for another. Tell me more about what's been going through your head lately?",
      "That sounds like a lot to carry around. Sometimes it helps just to get it out of your head and into words, you know? What feels like the most overwhelming part right now?",
      "I'm listening, and this is definitely a judgment-free zone. Your feelings make sense, even when they feel completely chaotic to you. What would help most right now - just venting, or do you want to brainstorm some ways to deal with this?",
      "Mental health is such a weird thing because it affects everything but it's invisible, so people don't always get it. But I get it, and whatever you're going through makes total sense given what your brain is dealing with. Want to tell me more about what's been happening?",
      "You know what I appreciate about you reaching out? You're actually doing something about how you feel instead of just suffering in silence. That takes strength, even when you don't feel strong. What's been the hardest part of your day today?"
    ];
    
    return {
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      mood: 'supportive'
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);
    
    // Update user context based on message
    const updatedContext = updateUserContext(currentInput);
    
    // Simulate realistic typing delay
    const typingDelay = Math.max(1000, Math.min(4000, currentInput.length * 50));
    
    setTimeout(() => {
      const response = generateAdvancedResponse(currentInput, updatedContext);
      const botResponse = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        mood: response.mood
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    { text: "I'm having anxiety spirals", icon: Brain, color: "text-purple-600" },
    { text: "Can't sleep again", icon: Moon, color: "text-indigo-600" },
    { text: "Feeling really down today", icon: Heart, color: "text-pink-600" },
    { text: "Work is overwhelming me", icon: Zap, color: "text-orange-600" },
    { text: "I need someone to talk to", icon: MessageCircle, color: "text-blue-600" },
    { text: "Having a panic attack", icon: Shield, color: "text-red-600" }
  ];

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'welcoming': return 'border-l-green-400 bg-green-50';
      case 'understanding': return 'border-l-blue-400 bg-blue-50';
      case 'supportive': return 'border-l-purple-400 bg-purple-50';
      case 'compassionate': return 'border-l-pink-400 bg-pink-50';
      case 'urgent': return 'border-l-red-400 bg-red-50';
      case 'warm': return 'border-l-yellow-400 bg-yellow-50';
      default: return 'border-l-gray-400 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Enhanced Header */}
      <div className="bg-white border-b border-gray-100 p-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">MindfulChat</h1>
              <p className="text-sm text-gray-500">Your 24/7 mental health companion</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Always here for you</span>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-2xl p-5 rounded-3xl shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white ml-12'
                    : `bg-white border-l-4 ${message.mood ? getMoodColor(message.mood) : 'border-l-gray-400 bg-gray-50'} text-gray-700 mr-12`
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-3 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-5 rounded-3xl max-w-xs shadow-sm mr-12">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Quick Response Buttons */}
      <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-600 mb-3 font-medium">How are you feeling? Quick ways to start:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {quickResponses.map((response, index) => {
              const IconComponent = response.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setInputText(response.text);
                    setTimeout(handleSendMessage, 100);
                  }}
                  className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl text-xs text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
                >
                  <IconComponent className={`w-5 h-5 ${response.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-center leading-tight">{response.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Input Area */}
      <div className="p-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share whatever's on your mind... I'm here to listen and understand 💙"
                className="w-full p-4 pr-12 border-2 border-gray-200 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 focus:bg-white transition-colors"
                rows={1}
                style={{ minHeight: '60px', maxHeight: '150px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
          
          {/* Enhanced Disclaimer */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-800">
                <p className="font-medium mb-1">Important: This is peer support, not professional therapy</p>
                <p>If you're having thoughts of self-harm or suicide, please reach out immediately:</p>
                <p className="mt-1"><strong>Crisis Text Line:</strong> Text HOME to 741741 | <strong>National Suicide Prevention Lifeline:</strong> 988</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMentalHealthChatbot;