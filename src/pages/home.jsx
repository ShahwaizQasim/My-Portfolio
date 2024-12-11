import React from 'react'
import HeroSection from '../components/heroSection'
import About from '../components/about'
import Skills from '../components/skills'
import Service from '../components/service'
import Projects from '../components/projects'

function Home() {
  return (
    // <Navbar />
    <>
      <HeroSection />
      <About />
      <Skills />
      <Service />
      <Projects />
    </>
  )
}

export default Home