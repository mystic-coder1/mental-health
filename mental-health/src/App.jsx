
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Category from './pages/category';
import DoctorLogin from './pages/logindoctor';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/logindoc" element={<DoctorLogin />} />
      </Routes>
    </Router>
  );
}




