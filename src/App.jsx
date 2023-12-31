import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Error from './pages/Error'
import Header from './units/Header'


export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
  )
}
