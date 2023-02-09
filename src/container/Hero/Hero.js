import React from 'react'
import '../../styles/Hero.css'
import heroImage from '../../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <div className="hero_main hero_grid">
      <div className="flex-content">
        <div className="hero_content">
          <h1 className="primary2 heading">Little Lemon</h1>
          <h2 className="secondary2 subheading">Chicago</h2>
          <p className="secondary2">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
          <button className="btn1">Reserve a table</button>
        </div>
      </div>
      <div className="hero_img_container">
        <img src={heroImage} className="hero_image" alt="restaurant"/>
      </div>
    </div>
  )
}

export default Hero