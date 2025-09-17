import React, { useState } from 'react';

const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [isHovering, setIsHovering] = useState('');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    console.log(`Navigating to ${role} login page`);
    // Here you would typically navigate to the respective login page
    // For example: navigate(`/${role}-login`);
  };

  const roles = [
    {
      id: 'student',
      title: 'I am a Student',
      subtitle: 'Seeking mental health support',
      description: 'Access counseling services, book appointments with mental health professionals, and get the support you need for your wellbeing.',
      features: [
        'Schedule counseling sessions',
        'Access mental health resources',
        'Track your wellness journey',
        'Connect with peer support groups'
      ],
      icon: '🎓',
      buttonText: 'Continue as Student'
    },
    {
      id: 'doctor',
      title: 'I am a Mental Health Professional',
      subtitle: 'Providing care and support',
      description: 'Manage patient cases, create treatment plans, and provide professional mental health services to students who need your expertise.',
      features: [
        'Manage patient appointments',
        'Create treatment plans',
        'Access clinical resources',
        'Monitor patient progress'
      ],
      icon: '🩺',
      buttonText: 'Continue as Doctor'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Welcome to MindCare
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Your mental health and wellbeing matter. Choose your role below to access the support and tools designed specifically for you.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`bg-white border-2 rounded-xl p-6 sm:p-8 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                isHovering === role.id
                  ? 'border-purple-300 shadow-xl'
                  : 'border-gray-200 shadow-lg hover:border-gray-300'
              }`}
              onMouseEnter={() => setIsHovering(role.id)}
              onMouseLeave={() => setIsHovering('')}
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="text-4xl sm:text-5xl mb-4">{role.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {role.title}
                </h2>
                <p className="text-purple-600 font-medium text-sm sm:text-base">
                  {role.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {role.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">What you can do:</h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleRoleSelect(role.id)}
                style={{ backgroundColor: '#585182' }}
                className="w-full py-3 sm:py-4 text-white text-sm sm:text-base font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-200 transform hover:translate-y-1"
              >
                {role.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              🔒 Your Privacy & Security
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              All conversations and data are completely confidential and secure. We follow strict privacy guidelines 
              to ensure your mental health information remains protected at all times.
            </p>
          </div>
        </div>

        {/* Support Information */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-xs sm:text-sm mb-2">
            Need help choosing or have technical issues?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
            <a 
              href="#" 
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Contact Support
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a 
              href="#" 
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Frequently Asked Questions
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a 
              href="#" 
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Emergency Resources
            </a>
          </div>
        </div>

        {/* Crisis Helpline */}
        <div className="text-center mt-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl mx-auto">
          <p className="text-red-700 text-xs sm:text-sm font-medium mb-1">
            🚨 In Crisis? Need Immediate Help?
          </p>
          <p className="text-red-600 text-xs sm:text-sm">
            Call the National Suicide Prevention Lifeline: 
            <a href="tel:988" className="font-bold underline ml-1">988</a> (Available 24/7)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;