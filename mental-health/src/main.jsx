import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/homepage'
import Category from './pages/category.jsx'
import DoctorLogin from './pages/logindoctor'
import Community from './pages/communitypage'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
    <Category />
    <DoctorLogin />
    <Community />

  </React.StrictMode>,
)