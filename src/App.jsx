// import React from 'react'
import Home from './pages/Home'
import Navbar from './compontents/Navbar'
import Footer from './compontents/Footer'
import Animals from './pages/Animals'
import Space from './pages/Space'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Technology from './pages/Technology'
import Food from './pages/Food'
import History from './pages/History'
import About from './pages/About'


export default function App() {
  return (
    <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Space" element={<Space />} />
        <Route path="/History" element={<History />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
    <Footer/>
  </Router>
    
  )
}
