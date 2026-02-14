import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importera router
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

//Importera sidor
import Cv from './pages/Cv';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

//Importera komponenter
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
