import React from 'react'
import HeroSection from '../components/heroSection'
import About from '../components/about'
import Skills from '../components/skills'
import Service from '../components/service'

function Home() {
  return (
    // <Navbar />
    <>
      <HeroSection />
      <About />
      <Skills />
      <Service />
    </>
  )
}

export default Home