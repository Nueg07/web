import React from 'react'
import Navigation from '../component/Navigation.js'
import Hero from '../component/Hero.js'
import About from '../component/About.js'
import Service from '../component/Service.js'
import FAQ from '../component/FAQ.js'
import Contact from '../component/Contact.js'
import Footer from '../component/Footer.js'

const LandingPage = () => {
  return (
    <div>
          <Navigation />
    <Hero />
    <About />
    <Service />
    <FAQ />
    <Contact />
    <Footer />
    </div>
  )
}

export default LandingPage
