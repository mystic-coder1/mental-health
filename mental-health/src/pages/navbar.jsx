import React, { useState } from 'react';
import { Menu, X, Users, Play, Eye, Calendar, LogIn, UserPlus, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: '#585182' }}
              >
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Buddy
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Mental Wellness</p>
            </div>
          </div>

          {/* Desktop Navigation - Single Line */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </button>
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Videos</span>
            </button>
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>AR Features</span>
            </button>
            <button 
              className="px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center space-x-2"
              style={{ backgroundColor: '#585182' }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </button>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            <button 
              className="px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center space-x-2"
              style={{ backgroundColor: '#585182' }}
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavButton icon={Users} text="Community" />
              <MobileNavButton icon={Play} text="Videos" />
              <MobileNavButton icon={Eye} text="AR Features" />
              <MobileBookSessionButton />
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex flex-col space-y-2">
                  <MobileSignInButton />
                  <MobileSignUpButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Components
const NavButton = ({ icon: Icon, text }) => (
  <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium">
    <Icon className="w-4 h-4" />
    <span className="whitespace-nowrap">{text}</span>
  </button>
);

const BookSessionButton = () => (
  <button 
    className="flex items-center space-x-2 px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
    style={{ backgroundColor: '#585182' }}
  >
    <Calendar className="w-4 h-4" />
    <span>Book Session</span>
  </button>
);

const SignInButton = () => (
  <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium whitespace-nowrap">
    <LogIn className="w-4 h-4" />
    <span>Sign In</span>
  </button>
);

const SignUpButton = () => (
  <button 
    className="flex items-center space-x-2 px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 whitespace-nowrap"
    style={{ backgroundColor: '#585182' }}
  >
    <UserPlus className="w-4 h-4" />
    <span>Sign Up</span>
  </button>
);

// Mobile Navigation Components
const MobileNavButton = ({ icon: Icon, text }) => (
  <button className="flex items-center space-x-3 w-full px-3 py-3 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium">
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </button>
);

const MobileBookSessionButton = () => (
  <button 
    className="flex items-center space-x-3 w-full px-3 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-md"
    style={{ backgroundColor: '#585182' }}
  >
    <Calendar className="w-5 h-5" />
    <span>Book Session with Doctor</span>
  </button>
);

const MobileSignInButton = () => (
  <button className="flex items-center space-x-3 w-full px-3 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium">
    <LogIn className="w-5 h-5" />
    <span>Sign In</span>
  </button>
);

const MobileSignUpButton = () => (
  <button 
    className="flex items-center space-x-3 w-full px-3 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200"
    style={{ backgroundColor: '#585182' }}
  >
    <UserPlus className="w-5 h-5" />
    <span>Sign Up</span>
  </button>
);

// Demo page to show the navbar in context
const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Demo content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Buddy
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted companion for mental wellness and support
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Feature cards */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Users className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with others on similar journeys</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Play className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Videos</h3>
              <p className="text-gray-600 text-sm">Educational content and guided sessions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Eye className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AR Features</h3>
              <p className="text-gray-600 text-sm">Immersive relaxation experiences</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Calendar className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Sessions</h3>
              <p className="text-gray-600 text-sm">Professional mental health support</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Your Wellness Journey Today
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who have found support and guidance through Your Buddy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#585182' }}
              >
                Get Started Free
              </button>
              <button className="px-8 py-3 text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;