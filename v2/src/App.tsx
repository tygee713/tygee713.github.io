import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Intro from './pages/Intro'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App