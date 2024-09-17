import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/ui/Header'
import Hero from './components/ui/Hero'

function Home() {
  return (
    <>
        {/* Header */}
        <Header/>
        {/* Hero */}
        <Hero/>
    </>
  )
}

export default Home 