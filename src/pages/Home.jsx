

import React from 'react'
import Hero from "../components/Hero"
import HomeMenu from "../components/HomeMenu"
import HomeAddress from '../components/HomeAddress'
import BookATable from '../components/BookATable'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeMenu/>
      <HomeAddress/>
    </div>
  )
}

export default Home