import React from 'react'
import { Hero, Highlights, Testimonials, About } from '../../container/'
import { hero_main } from '../../static/hero/hero_description'

const Homepage = () => {
  return (
    <>
      <Hero hero={hero_main}/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </>
  )
}

export default Homepage