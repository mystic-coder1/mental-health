// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import Homepage from './pages/homepage'
// // import Category from './pages/category.jsx'
// // import DoctorLogin from './pages/logindoctor'
// // import Community from './pages/communitypage'
// // import App from './App';

// // import './index.css'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Homepage />
    
// //   </React.StrictMode>,

// //   <React.StrictMode>
// //     <Category />
// //   </React.StrictMode>,

// //     <React.StrictMode>
// //     <Community />
// //   </React.StrictMode>,

// //    <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,





// // )
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Homepage from './pages/homepage'
// import Category from './pages/category.jsx'
// import DoctorLogin from './pages/logindoctor'
// import Community from './pages/communitypage'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/category" element={<Category />} />
//         <Route path="/doctor-login" element={<DoctorLogin />} />
//         <Route path="/community" element={<Community />} />
//         <Route path="/app" element={<App />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';   

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

