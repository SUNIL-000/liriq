import React from 'react'
import Navbar from './components/Layouts/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  )
}

export default App