import React from 'react'
import HeroSection from '../components/heroSection'
import About from '../components/about'
import Skills from '../components/skills'
import Service from '../components/service'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

function Home() {
  return (
    // <Navbar />
    <>
      <HeroSection />
      <About />
      <Skills />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home