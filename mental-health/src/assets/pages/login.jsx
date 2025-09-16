import React, { useState, useEffect } from 'react';

const PsychologyDoctorLogin = () => {
  const [formData, setFormData] = useState({
    licenseId: '',
    email: '',
    password: '',
    specialty: '',
    institution: '',
    experience: '',
    remember: false
  });
  
  const [loginState, setLoginState] = useState('idle'); // idle, loading, success
  const [logoAnimation, setLogoAnimation] = useState(false);

  // Logo floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoAnimation(true);
      setTimeout(() => setLogoAnimation(false), 2000);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const psychologySpecialties = [
    { value: '', label: 'Select your psychology specialty' },
    { value: 'psychiatrist', label: 'Psychiatrist - Mental Health Disorders' },
    { value: 'clinical-psychologist', label: 'Clinical Psychologist - Therapy & Assessment' },
    { value: 'depression-specialist', label: 'Depression Specialist' },
    { value: 'anxiety-specialist', label: 'Anxiety Disorders Specialist' },
    { value: 'cognitive-behavioral', label: 'Cognitive Behavioral Therapist (CBT)' },
    { value: 'trauma-ptsd', label: 'Trauma & PTSD Specialist' },
    { value: 'bipolar-specialist', label: 'Bipolar Disorder Specialist' },
    { value: 'eating-disorders', label: 'Eating Disorders Specialist' },
    { value: 'addiction-psychiatrist', label: 'Addiction Psychiatrist' },
    { value: 'child-adolescent', label: 'Child & Adolescent Psychologist' },
    { value: 'geriatric-psychology', label: 'Geriatric Psychology Specialist' },
    { value: 'neuropsychologist', label: 'Neuropsychologist' }
  ];

  const experienceOptions = [
    { value: '', label: 'Years of experience' },
    { value: '0-2', label: '0-2 years (Resident/Early Career)' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '11-15', label: '11-15 years' },
    { value: '16-20', label: '16-20 years' },
    { value: '20+', label: '20+ years (Senior Expert)' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.licenseId || !formData.email || !formData.password || !formData.specialty) {
      alert('Please fill in all required fields');
      return;
    }

    setLoginState('loading');
    
    // Simulate login process
    setTimeout(() => {
      setLoginState('success');
      
      setTimeout(() => {
        alert(`Welcome Dr. ${formData.email}!\nSpecialty: ${formData.specialty}\nInstitution: ${formData.institution}\nExperience: ${formData.experience}\nAccessing MindCare Professional Dashboard...`);
        
        // Reset for demo
        setLoginState('idle');
        setFormData({
          licenseId: '',
          email: '',
          password: '',
          specialty: '',
          institution: '',
          experience: '',
          remember: false
        });
      }, 2000);
    }, 1500);
  };

  const getButtonText = () => {
    switch (loginState) {
      case 'loading': return 'Verifying Medical Credentials...';
      case 'success': return 'Welcome Doctor! Accessing Dashboard...';
      default: return 'Access Psychology Professional Portal';
    }
  };

  const getButtonStyle = () => {
    const baseStyle = {
      width: '100%',
      padding: '18px',
      border: 'none',
      borderRadius: '16px',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: loginState === 'idle' ? 'pointer' : 'default',
      transition: 'all 0.3s ease',
      marginBottom: '24px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
    };

    if (loginState === 'success') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        boxShadow: '0 12px 30px rgba(79, 172, 254, 0.3)'
      };
    } else if (loginState === 'loading') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: '0.7'
      };
    }

    return {
      ...baseStyle,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    color: 'white',
    fontSize: '16px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5"
         style={{
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
           backgroundAttachment: 'fixed',
           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
         }}>
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        animation: 'slideIn 0.8s ease-out'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transform: logoAnimation ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
            transition: 'all 2s ease-in-out'
          }}>
            🧠
          </div>
          
          <h1 style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            MindCare Psychology
          </h1>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '16px',
            fontWeight: '400',
            marginBottom: '20px'
          }}>
            Mental Health Professional Portal
          </p>

          {/* Professional Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 18px',
            borderRadius: '14px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            marginBottom: '10px'
          }}>
            <span style={{ marginRight: '10px', fontSize: '18px' }}>🏥</span>
            <span style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '13px',
              fontWeight: '600'
            }}>
              Licensed Psychology Professional
            </span>
          </div>

          {/* Specialization Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)',
            padding: '8px 16px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(79, 172, 254, 0.3)'
          }}>
            <span style={{ marginRight: '8px', fontSize: '16px' }}>💙</span>
            <span style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              Depression, Anxiety & Mental Health Specialist
            </span>
          </div>
        </div>

        {/* Login Form */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Medical License Number
            </label>
            <input
              type="text"
              name="licenseId"
              value={formData.licenseId}
              onChange={handleInputChange}
              placeholder="Enter your psychology/psychiatry license number"
              required
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Professional Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your professional email address"
              required
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Secure Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your secure password"
              required
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Psychology Specialty
            </label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              required
              style={{
                ...inputStyle,
                cursor: 'pointer'
              }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
              {psychologySpecialties.map((specialty) => (
                <option 
                  key={specialty.value} 
                  value={specialty.value}
                  style={{ background: '#764ba2', color: 'white', padding: '8px' }}
                >
                  {specialty.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Experience Level
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              style={{
                ...inputStyle,
                cursor: 'pointer'
              }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
              {experienceOptions.map((exp) => (
                <option 
                  key={exp.value} 
                  value={exp.value}
                  style={{ background: '#764ba2', color: 'white', padding: '8px' }}
                >
                  {exp.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'block'
            }}>
              Hospital / Clinic / Private Practice
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              placeholder="Your workplace/practice name (optional)"
              style={inputStyle}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleInputChange}
                style={{ marginRight: '8px', transform: 'scale(1.2)' }}
              />
              <label 
                htmlFor="remember"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '14px'
                }}
              >
                Keep me signed in
              </label>
            </div>
            <a 
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              Reset Password?
            </a>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loginState !== 'idle'}
            style={getButtonStyle()}
            onMouseEnter={(e) => {
              if (loginState === 'idle') {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (loginState === 'idle') {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }
            }}
          >
            {getButtonText()}
          </button>
        </div>

        {/* Professional Tools */}
        <div style={{
          textAlign: 'center',
          margin: '24px 0',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
          }}></div>
          <span style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '0 16px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Psychology Tools
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <a
            href="#"
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📋</span>
            Patient Records
          </a>
          
          <a
            href="#"
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>💊</span>
            Therapy Sessions
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <a
            href="#"
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📊</span>
            Assessment Tools
          </a>
          
          <a
            href="#"
            style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              textDecoration: 'none',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              display: 'block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }}>📅</span>
            Appointments
          </a>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            New psychology professional?
          </p>
          <a
            href="#"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = 'none';
            }}
          >
            Apply for Professional Access →
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          input::placeholder, select::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
          
          @media (max-width: 480px) {
            .login-container {
              padding: 30px 20px !important;
              margin: 10px !important;
            }
            
            .title {
              font-size: 24px !important;
            }
            
            .quick-access {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PsychologyDoctorLogin;