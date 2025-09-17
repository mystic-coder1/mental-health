import React, { useState } from 'react';

const DoctorDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('critical');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [notes, setNotes] = useState('');

  // Sample student data categorized by severity
  const students = {
    critical: [
      {
        id: 1,
        name: "Sarah Johnson",
        age: 20,
        condition: "Severe Depression with Suicidal Ideation",
        riskLevel: "Critical",
        symptoms: ["Suicidal thoughts", "Severe mood swings", "Social isolation", "Sleep disturbances"],
        lastAssessment: "2024-01-15",
        urgency: "Immediate attention required",
        background: "Recent family loss, academic stress, previous suicide attempt"
      },
      {
        id: 2,
        name: "Michael Chen",
        age: 19,
        condition: "Severe Anxiety with Panic Attacks",
        riskLevel: "Critical",
        symptoms: ["Frequent panic attacks", "Agoraphobia", "Severe social anxiety", "Academic decline"],
        lastAssessment: "2024-01-14",
        urgency: "Immediate attention required",
        background: "Performance anxiety, fear of failure, family pressure"
      }
    ],
    high: [
      {
        id: 3,
        name: "Emily Rodriguez",
        age: 21,
        condition: "Moderate to Severe Depression",
        riskLevel: "High",
        symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Concentration issues"],
        lastAssessment: "2024-01-13",
        urgency: "Schedule within 48 hours",
        background: "Relationship issues, academic pressure, financial stress"
      },
      {
        id: 4,
        name: "David Thompson",
        age: 22,
        condition: "Severe Sleep Disorder with Depression",
        riskLevel: "High",
        symptoms: ["Chronic insomnia", "Depressive episodes", "Irritability", "Memory problems"],
        lastAssessment: "2024-01-12",
        urgency: "Schedule within 48 hours",
        background: "Work-study balance, caffeine dependency, irregular schedule"
      }
    ],
    moderate: [
      {
        id: 5,
        name: "Jessica Lee",
        age: 20,
        condition: "Moderate Anxiety",
        riskLevel: "Moderate",
        symptoms: ["General anxiety", "Stress management issues", "Mild social anxiety"],
        lastAssessment: "2024-01-11",
        urgency: "Schedule within 1 week",
        background: "Transitioning to college, homesickness, social adjustment"
      },
      {
        id: 6,
        name: "Alex Williams",
        age: 19,
        condition: "Mild Depression",
        riskLevel: "Moderate",
        symptoms: ["Occasional sadness", "Motivation issues", "Sleep irregularity"],
        lastAssessment: "2024-01-10",
        urgency: "Schedule within 1 week",
        background: "Academic transition, seasonal affective symptoms"
      }
    ]
  };

  const recommendedTreatments = {
    critical: [
      "Immediate psychiatric evaluation",
      "Crisis intervention therapy",
      "Safety planning and monitoring",
      "Consider inpatient treatment if necessary",
      "Family/support system involvement",
      "Medication evaluation with psychiatrist",
      "Daily check-ins for first week"
    ],
    high: [
      "Weekly individual therapy sessions",
      "Cognitive Behavioral Therapy (CBT)",
      "Group therapy participation",
      "Medication consultation",
      "Stress management techniques",
      "Academic accommodation planning",
      "Regular progress monitoring"
    ],
    moderate: [
      "Bi-weekly counseling sessions",
      "Mindfulness and relaxation techniques",
      "Support group participation",
      "Self-care planning",
      "Coping strategies development",
      "Lifestyle modifications",
      "Follow-up in 2-3 weeks"
    ]
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setTreatmentPlan('');
    setNotes('');
  };

  const handleSaveTreatment = () => {
    console.log('Saving treatment plan for:', selectedStudent.name);
    console.log('Treatment Plan:', treatmentPlan);
    console.log('Notes:', notes);
    alert('Treatment plan saved successfully!');
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Mental Health Dashboard</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Student Case Management & Treatment Planning</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-500">Dr. Smith</p>
            <p className="text-sm text-gray-500">Licensed Clinical Psychologist</p>
          </div>
        </div>
      </div>

      <div className="lg:flex">
        {/* Sidebar - Student List */}
        <div className="lg:w-1/3 lg:border-r border-gray-200 bg-gray-50 lg:h-screen overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {[
              { key: 'critical', label: 'Critical', count: students.critical.length },
              { key: 'high', label: 'High Risk', count: students.high.length },
              { key: 'moderate', label: 'Moderate', count: students.moderate.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-purple-500 text-purple-600 bg-white'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Student Cards */}
          <div className="p-3 sm:p-4 space-y-3 max-h-96 lg:max-h-none overflow-y-auto">
            {students[activeTab].map((student) => (
              <div
                key={student.id}
                onClick={() => handleStudentSelect(student)}
                className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedStudent?.id === student.id
                    ? 'border-purple-300 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-1 sm:space-y-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{student.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium border self-start ${getRiskColor(student.riskLevel)}`}>
                    {student.riskLevel}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{student.condition}</p>
                <p className="text-xs text-gray-500">{student.urgency}</p>
                <p className="text-xs text-gray-400 mt-1">Last seen: {student.lastAssessment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Student Details */}
        <div className="flex-1 p-4 sm:p-6">
          {selectedStudent ? (
            <div className="space-y-4 sm:space-y-6">
              {/* Student Header */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">{selectedStudent.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Age: {selectedStudent.age} | Risk Level: {selectedStudent.riskLevel}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedStudent.condition}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500">Last Assessment</p>
                    <p className="font-semibold text-sm sm:text-base">{selectedStudent.lastAssessment}</p>
                  </div>
                </div>
              </div>

              {/* Patient Information */}
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                {/* Symptoms */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Current Symptoms</h3>
                  <ul className="space-y-2">
                    {selectedStudent.symptoms.map((symptom, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Background */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Background Information</h3>
                  <p className="text-xs sm:text-sm text-gray-700">{selectedStudent.background}</p>
                </div>
              </div>

              {/* Recommended Treatments */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Recommended Treatment Approaches</h3>
                <div className="grid gap-2 sm:gap-4 sm:grid-cols-2">
                  {recommendedTreatments[activeTab].map((treatment, index) => (
                    <div key={index} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Plan Input */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Create Treatment Plan</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Treatment Plan & Interventions
                    </label>
                    <textarea
                      value={treatmentPlan}
                      onChange={(e) => setTreatmentPlan(e.target.value)}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="Detail the specific treatment plan, therapy sessions, interventions, and timeline..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Clinical Notes & Observations
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="Add any additional notes, observations, or special considerations..."
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleSaveTreatment}
                  style={{ backgroundColor: '#585182' }}
                  className="px-4 sm:px-6 py-2 text-white text-sm sm:text-base rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Save Treatment Plan
                </button>
                <button
                  style={{ backgroundColor: '#585182' }}
                  className="px-4 sm:px-6 py-2 text-white text-sm sm:text-base rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Schedule Session
                </button>
                <button
                  style={{ backgroundColor: '#585182' }}
                  className="px-4 sm:px-6 py-2 text-white text-sm sm:text-base rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Generate Report
                </button>
              </div>

              {/* Emergency Protocol */}
              {selectedStudent.riskLevel === 'Critical' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">⚠️ Emergency Protocol Active</h3>
                  <p className="text-xs sm:text-sm text-red-700 mb-3">
                    This student requires immediate attention due to critical risk factors including suicidal ideation.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button
                      style={{ backgroundColor: '#dc2626' }}
                      className="px-4 py-2 text-white text-xs sm:text-sm rounded-md hover:opacity-90"
                    >
                      Contact Crisis Team
                    </button>
                    <button
                      style={{ backgroundColor: '#dc2626' }}
                      className="px-4 py-2 text-white text-xs sm:text-sm rounded-md hover:opacity-90"
                    >
                      Safety Plan Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="text-center px-4">
                <p className="text-gray-500 text-base sm:text-lg">Select a student to view details and create treatment plans</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Choose from the student list on the left to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;