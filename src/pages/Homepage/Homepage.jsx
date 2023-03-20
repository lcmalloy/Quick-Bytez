import React from 'react'

import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Highlights from '../../components/Highlights/Highlights'
import Testimonials from '../../components/Testimonials/Testimonials'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'


const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <Highlights/>
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}

export default Homepage