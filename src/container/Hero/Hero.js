import React from 'react'
import '../../styles/Hero.css'
import '../../styles/Button.css'

const Hero = (props) => {

  return (
    <div className="hero_main hero_grid">
      <div className="flex-content">
        <div className="hero_content">
          <h1 className="primary2 heading">{props.hero.heading}</h1>
          <h2 className="secondary2 subheading">{props.hero.sub}</h2>
          <p className="secondary2">{props.hero.description}</p>
          {props.hero.btn.active &&
            <button className="btn1-round" type="button" onClick={null}>Reserve a table</button>
          }
        </div>
      </div>
      <div className="hero_img_container">
        <img src={props.hero.img} className="hero_image" alt="restaurant"/>
      </div>
    </div>
  )
}

export default Hero