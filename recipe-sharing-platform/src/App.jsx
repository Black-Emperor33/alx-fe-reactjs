import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetail from './components/RecipeDetail';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );;
}

export default App;