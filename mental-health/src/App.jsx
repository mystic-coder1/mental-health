import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Category from './pages/category';
import Community from './pages/communitypage';
import DoctorLogin from './pages/logindoctor';
import StudentLogin from './pages/loginstudent';
import Counsellor from './pages/counsellor';
import Chatbot from './pages/chatbot';
import AR from './pages/ARpage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/category" element={<Category />} />
      <Route path="/community" element={<Community />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/counsellor" element={<Counsellor />} />
      <Route path="/chatbot" element={<Chatbot  />} />  
      <Route path="/arpage" element={<AR  />} />  
    </Routes>
  );
}

export default App;