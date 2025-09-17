import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  FileText, 
  Heart, 
  Shield, 
  CheckCircle, 
  X, 
  Plus,
  Save,
  Video,
  Mic,
  MicOff,
  VideoOff
} from 'lucide-react';

const MentalHealthSessionPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentSession, setCurrentSession] = useState(null);
  const [sessionNotes, setSessionNotes] = useState('');
  const [riskLevel, setRiskLevel] = useState('low');
  const [crisisMode, setCrisisMode] = useState(false);

  // Sample data - in real app this would come from backend
  const [patients] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 19,
      lastSession: '2024-01-15',
      riskLevel: 'high',
      conditions: ['Severe Depression', 'Suicidal Ideation'],
      nextSession: '2024-01-20 10:00',
      emergencyContact: '+1-234-567-8900'
    },
    {
      id: 2,
      name: 'Alex Chen',
      age: 21,
      lastSession: '2024-01-12',
      riskLevel: 'moderate',
      conditions: ['Anxiety Disorder', 'Depression'],
      nextSession: '2024-01-18 14:00',
      emergencyContact: '+1-234-567-8901'
    },
    {
      id: 3,
      name: 'Jordan Smith',
      age: 20,
      lastSession: '2024-01-10',
      riskLevel: 'low',
      conditions: ['Mild Anxiety'],
      nextSession: '2024-01-22 09:00',
      emergencyContact: '+1-234-567-8902'
    }
  ]);

  const [sessions] = useState([
    {
      id: 1,
      patientId: 1,
      date: '2024-01-20',
      time: '10:00',
      type: 'Individual Therapy',
      status: 'scheduled'
    },
    {
      id: 2,
      patientId: 2,
      date: '2024-01-18',
      time: '14:00',
      type: 'CBT Session',
      status: 'in-progress'
    }
  ]);

  const getRiskColor = (level) => {
    switch(level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const startSession = (patient) => {
    setCurrentSession(patient);
    setActiveTab('session');
    setSessionNotes('');
    if (patient.riskLevel === 'high') {
      setCrisisMode(true);
    }
  };

  const endSession = () => {
    setCurrentSession(null);
    setActiveTab('dashboard');
    setCrisisMode(false);
    setSessionNotes('');
  };

  const CrisisAlert = () => (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <div className="flex items-center">
        <AlertTriangle className="text-red-500 mr-3" size={20} />
        <div>
          <h3 className="text-red-800 font-semibold">High Risk Patient</h3>
          <p className="text-red-700 text-sm">Patient shows signs of severe depression and suicidal ideation. Follow crisis intervention protocols.</p>
          <div className="flex mt-2 space-x-2">
            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 flex items-center">
              <Phone size={14} className="mr-1" />
              Emergency Contact
            </button>
            <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200">
              Crisis Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <User className="text-blue-600 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold text-blue-600">{patients.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="text-red-600 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-600">High Risk</p>
                <p className="text-2xl font-bold text-red-600">{patients.filter(p => p.riskLevel === 'high').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Calendar className="text-green-600 mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-600">Today's Sessions</p>
                <p className="text-2xl font-bold text-green-600">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {patients.map(patient => (
            <div key={patient.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{patient.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getRiskColor(patient.riskLevel)}`}>
                      {patient.riskLevel.toUpperCase()} RISK
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Age: {patient.age}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Conditions: {patient.conditions.join(', ')}
                  </p>
                  <p className="text-sm text-blue-600">
                    Next Session: {patient.nextSession}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => startSession(patient)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
                  >
                    <Video size={16} className="mr-1" />
                    Start Session
                  </button>
                  {patient.riskLevel === 'high' && (
                    <button className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">
                      <Phone size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SessionInterface = () => (
    <div className="space-y-6">
      {crisisMode && <CrisisAlert />}
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Active Session</h2>
            <p className="text-gray-600">Patient: {currentSession?.name}</p>
          </div>
          <button 
            onClick={endSession}
            className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 flex items-center"
          >
            <X size={16} className="mr-1" />
            End Session
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Call Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <Video size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-gray-300">Video Call Active</p>
                <p className="text-sm text-gray-400">Patient: {currentSession?.name}</p>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="flex justify-center space-x-4 mb-6">
              <button className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700">
                <Mic size={20} />
              </button>
              <button className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700">
                <Video size={20} />
              </button>
              <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700">
                <Phone size={20} />
              </button>
            </div>
          </div>

          {/* Session Tools */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Patient Information</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Age:</strong> {currentSession?.age}</p>
                <p><strong>Risk Level:</strong> 
                  <span className={`ml-2 px-2 py-1 rounded text-xs ${getRiskColor(currentSession?.riskLevel)}`}>
                    {currentSession?.riskLevel?.toUpperCase()}
                  </span>
                </p>
                <p><strong>Conditions:</strong> {currentSession?.conditions?.join(', ')}</p>
                <p><strong>Emergency Contact:</strong> {currentSession?.emergencyContact}</p>
              </div>
            </div>

            {crisisMode && (
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">Crisis Intervention Tools</h3>
                <div className="space-y-2">
                  <button className="w-full bg-red-600 text-white p-2 rounded text-sm hover:bg-red-700">
                    Safety Plan Review
                  </button>
                  <button className="w-full bg-red-100 text-red-700 p-2 rounded text-sm hover:bg-red-200">
                    Risk Assessment
                  </button>
                  <button className="w-full bg-yellow-100 text-yellow-700 p-2 rounded text-sm hover:bg-yellow-200">
                    Emergency Resources
                  </button>
                </div>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Quick Tools</h3>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white p-2 rounded text-sm hover:bg-blue-700">
                  Mood Assessment
                </button>
                <button className="w-full bg-blue-100 text-blue-700 p-2 rounded text-sm hover:bg-blue-200">
                  Coping Strategies
                </button>
                <button className="w-full bg-green-100 text-green-700 p-2 rounded text-sm hover:bg-green-200">
                  Progress Tracker
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Session Notes */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Session Notes</h3>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder="Record session observations, patient responses, interventions used, and next steps..."
            className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between mt-3">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium">Risk Level:</label>
              <select 
                value={riskLevel} 
                onChange={(e) => setRiskLevel(e.target.value)}
                className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
              <Save size={16} className="mr-1" />
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Resources = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Crisis Resources & Protocols</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3 flex items-center">
              <AlertTriangle size={20} className="mr-2" />
              Emergency Contacts
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>National Suicide Prevention Lifeline:</strong></p>
              <p className="text-red-700 font-mono">988</p>
              <p><strong>Crisis Text Line:</strong></p>
              <p className="text-red-700 font-mono">Text HOME to 741741</p>
              <p><strong>Campus Emergency:</strong></p>
              <p className="text-red-700 font-mono">(555) 123-4567</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
              <Shield size={20} className="mr-2" />
              Safety Assessment
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-600 mr-2" />
                <span>Immediate danger assessment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-600 mr-2" />
                <span>Means restriction</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-600 mr-2" />
                <span>Support system evaluation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-600 mr-2" />
                <span>Safety plan creation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-4">Treatment Protocols</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Cognitive Behavioral Therapy</h4>
              <p className="text-sm text-gray-600 mb-3">Evidence-based approach for depression and anxiety</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm">View Guidelines →</button>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Dialectical Behavior Therapy</h4>
              <p className="text-sm text-gray-600 mb-3">Skills-based therapy for emotional regulation</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm">View Guidelines →</button>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Crisis Intervention</h4>
              <p className="text-sm text-gray-600 mb-3">Immediate response protocols for high-risk patients</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm">View Guidelines →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="text-blue-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">MindCare Sessions</h1>
                <p className="text-sm text-gray-600">Professional Mental Health Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">Dr. Sarah Wilson</p>
                <p className="text-sm text-gray-600">Licensed Therapist</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                SW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('session')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'session' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              disabled={!currentSession}
            >
              Active Session
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Resources
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'session' && currentSession && <SessionInterface />}
        {activeTab === 'resources' && <Resources />}
      </div>
    </div>
  );
};

export default MentalHealthSessionPlatform;