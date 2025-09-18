import React from 'react';

export default function MindMateLandingPage() {
  const handleDoctorClick = () => {
    console.log('Redirecting to doctor login');
    // Handle doctor login redirect
  };

  const handleStudentClick = () => {
    console.log('Redirecting to student login');
    // Handle student login redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Animated Header Section */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent mb-2 animate-gradient">
              MindMate
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6 mb-4 font-light leading-relaxed px-4">
            Connecting minds, fostering wellness, building brighter futures together.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Whether you're a healthcare professional dedicated to healing minds or a student seeking support and growth, 
            MindMate is here to guide your journey toward mental wellness.
          </p>
        </div>

        {/* Options Section */}
        <div className="space-y-4 md:space-y-6 mb-8 px-4">
          <h2 className="text-xl sm:text-2xl font-light text-gray-700 text-center mb-6 md:mb-8">
            Choose your path to get started
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Doctor Option */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Healthcare Professional</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    Join as a licensed mental health professional. Provide expert care, manage patient relationships, 
                    and make a meaningful impact.
                  </p>
                  <button
                    onClick={handleDoctorClick}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Continue as Doctor
                  </button>
                </div>
              </div>
            </div>

            {/* Student Option */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Student</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    Access mental health resources, connect with professionals, track your wellness journey, 
                    and find the support you need.
                  </p>
                  <button
                    onClick={handleStudentClick}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Continue as Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-8 px-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">What makes MindMate special?</h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Safe & Secure</h4>
              <p className="text-xs md:text-sm text-gray-600">
                HIPAA compliant platform ensuring your privacy and data security.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expert Care</h4>
              <p className="text-xs md:text-sm text-gray-600">
                Connect with verified mental health professionals specialized in care.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Personalized Journey</h4>
              <p className="text-xs md:text-sm text-gray-600">
                Tailored resources and support designed to meet your unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 md:pt-8 border-t border-gray-200 px-4">
          <p className="text-xs md:text-sm text-gray-600 font-light">
            Your mental health journey starts here. Take the first step with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}