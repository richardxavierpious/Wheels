import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCars from './components/MostSearchedCars'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function Home() {
  return (
    <>
        {/* Header */}
        <Header/>
        {/* Hero */}
        <Hero/>
        {/* Category */}
        <Category/>
        {/* MostSerchedCars*/}
        <MostSearchedCars/>
        {/* InfoSection */}
        <InfoSection/>
        {/* Footer */}
        <Footer/>
    </>
  )
}

export default Home 