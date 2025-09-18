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
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">MindMate</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Connecting minds, fostering wellness, building brighter futures together.
          </p>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            Whether you're a healthcare professional dedicated to healing minds or a student seeking support and growth, 
            MindMate is here to guide your journey toward mental wellness.
          </p>
        </div>

        {/* Options Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-light text-gray-700 text-center mb-8">
            Choose your path to get started
          </h2>

          {/* Doctor Option */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Healthcare Professional</h3>
              <p className="text-gray-600 leading-relaxed">
                Join as a licensed mental health professional. Provide expert care, manage patient relationships, 
                and make a meaningful impact in the mental health community.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={handleDoctorClick}
                className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 transition-all duration-200 border border-gray-200"
                style={{ backgroundColor: '#585182' }}
              >
                Continue as Doctor
              </button>
            </div>
          </div>

          {/* Student Option */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Student</h3>
              <p className="text-gray-600 leading-relaxed">
                Access mental health resources, connect with professionals, track your wellness journey, 
                and find the support you need during your academic journey.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={handleStudentClick}
                className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 transition-all duration-200 border border-gray-200"
                style={{ backgroundColor: '#585182' }}
              >
                Continue as Student
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-6">What makes MindMate special?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="p-4">
              <h4 className="font-medium text-gray-800 mb-2">Safe & Secure</h4>
              <p className="text-gray-600">
                HIPAA compliant platform ensuring your privacy and data security at all times.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-800 mb-2">Expert Care</h4>
              <p className="text-gray-600">
                Connect with verified mental health professionals specialized in various areas of care.
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-800 mb-2">Personalized Journey</h4>
              <p className="text-gray-600">
                Tailored resources and support designed to meet your unique mental health needs.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Your mental health journey starts here. Take the first step with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}