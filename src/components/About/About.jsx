import React from 'react'

import about1 from '../../assets/Mario and Adrian A.jpg'
import about2 from '../../assets/Mario and Adrian b.jpg'
import './about.scss'

const About = () => {
  return (
    <section>
      <div className="container about__container">
        <div className="about__details">
          <h2>Quick Bytez</h2>
          <small>California</small>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam commodi quae laborum temporibus, corporis rem facere aspernatur tempora possimus minima voluptate harum expedita, nesciunt debitis asperiores nemo repellat quas?</p>
        </div>
        <div className="container__about-images">
          <div className="about__images">
            <img className="img1" src={about1} alt="" />
            <img className="img2" src={about2} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About