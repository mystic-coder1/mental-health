
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './pages/homepage';
// import Category from './pages/category';
// import DoctorLogin from './pages/logindoctor';
// import Community from './pages/communitypage';
// // import { createBrowserRouter } from 'react-router-dom';
// import './App.css';


// function App() {
//   // const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <> <Homepage /> </>
//   // }


//   // ])


//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/category" element={<Category />} />
//         <Route path="/logindoc" element={<DoctorLogin />} />
//         <Route path="/community" element={<Community />} />
//       </Routes>
//     </Router>
//   );
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Category from './pages/category';
import Community from './pages/communitypage';
import DoctorLogin from './pages/logindoctor';
import StudentLogin from './pages/loginstudent';
import Counseller from './pages/counsellor';
import Chatbot from './pages/chatbot';
import StudentAccount from './pages/studentaccount';
import AR from './pages/ARpage';
import BeforeLogin from './pages/beforelogin';


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
      <Route path="/student-account" element={<StudentAccount  />} />  
      <Route path="/arpage" element={<AR  />} />  
      <Route path="/beforelogin" element={<BeforeLogin  />} />  
    </Routes>
  );
}

export default App;




