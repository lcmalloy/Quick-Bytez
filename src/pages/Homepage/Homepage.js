import React from 'react'
import { Header, Hero, Highlights, Testimonials, About, Footer } from '../../container/'
import { hero_main } from '../../static/hero/hero_description'

const Homepage = () => {
  return (
    <>
      <Hero hero={hero_main}/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  )
}

export default Homepage