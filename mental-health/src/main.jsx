import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/homepage.jsx';
import Category from './pages/category.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)