

import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Menu from './pages/Menu'
import About from './pages/About'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer' 

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='pages' element={<Pages/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App