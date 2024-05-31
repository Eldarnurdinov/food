

import React, { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Menu from './pages/Menu'
import About from './pages/About'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Footer from './components/Footer' 
import BookATable from './components/BookATable'

const App = () => {
  const navigate = useNavigate()

  const toggleModal = () => {
    // setShowModal(prev => !prev)
    navigate("/book")
  }
  return (
    <div>
      <Header toggleModal = {toggleModal}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<BookATable/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App