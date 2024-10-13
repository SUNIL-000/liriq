import React from 'react'
import Navbar from './components/Layouts/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
    </Router>
  )
}

export default App