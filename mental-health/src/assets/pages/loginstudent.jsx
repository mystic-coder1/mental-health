import React, { useState } from 'react';

const MentalHealthLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.email && formData.password) {
      setIsLoading(true);
      
      // Simulate login process
      setTimeout(() => {
        alert('Login successful! Welcome to your mental wellness journey.');
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleGuestAccess = () => {
    alert('Welcome! You can explore our mindfulness exercises and breathing techniques as a guest.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5" style={{
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #c084fc 75%, #e879f9 100%)'
    }}>
      <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-3xl p-10 max-w-md w-full shadow-2xl border border-white border-opacity-20">
        
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center text-4xl shadow-lg border-3 border-white border-opacity-30 animate-pulse"
               style={{
                 background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
                 backgroundSize: '300% 300%',
                 animation: 'gradientShift 3s ease-in-out infinite'
               }}>
            🧠
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-3">
            Take a moment for yourself today. Your mental wellness journey continues here.
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email or Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleInputChange}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember" className="text-gray-700 text-sm">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-indigo-600 text-sm font-medium hover:text-purple-600 transition-colors duration-300"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none p-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              boxShadow: isLoading ? 'none' : '0 10px 20px rgba(99, 102, 241, 0.3)'
            }}
          >
            {isLoading ? 'Signing you in...' : 'Continue with Login'}
          </button>
        </div>

        {/* Divider */}
        <div className="text-center my-6 relative text-gray-400 text-sm">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
          <span className="bg-white bg-opacity-95 px-4 relative z-10">or</span>
        </div>

        {/* Guest Access */}
        <button
          onClick={handleGuestAccess}
          className="w-full bg-transparent text-indigo-600 border-2 border-indigo-600 p-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:transform hover:-translate-y-0.5 mb-6"
        >
          Continue as Guest
        </button>

        {/* Signup Link */}
        <div className="text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300"
          >
            Create one here
          </a>
        </div>

        {/* Support Text */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200 text-gray-600 text-xs leading-relaxed">
          Remember: Taking care of your mental health is a sign of strength, not weakness.
          <br />
          We're here to support you every step of the way <span className="text-red-500 text-sm">♥</span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        @media (max-width: 480px) {
          .max-w-md {
            margin: 10px;
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default MentalHealthLogin;