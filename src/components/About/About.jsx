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

/*
<div className="about_main grid-2col">
      <div className="about-details">
        <div className="heading_container">
          <h1 className='flex-center mt-50 heading pr-185'>Little Lemon</h1>
          <h2 className='flex-center subheading pr-200'>Chicago</h2>
        </div>
        <p>
          Tempor nisi est dolor magna ea esse est. Cillum culpa aliquip do officia nulla proident officia eu officia labore enim ipsum aute nostrud. Ex officia culpa Lorem cupidatat labore minim deserunt et laborum enim eu pariatur Lorem nostrud.
          Pariatur aliquip adipisicing dolor id ullamco aliqua commodo minim cillum cupidatat.
        </p>
        <p>
          Ut ut Lorem sunt nulla. Ipsum ad dolor incididunt officia voluptate pariatur. Magna consectetur nostrud fugiat nisi exercitation tempor ad do. Proident deserunt culpa pariatur fugiat sint duis anim commodo veniam. Lorem enim amet et duis esse velit fugiat Lorem.
        </p>
      </div>
      <div className="about-img-container">
        <img className="md-img about-img1" src={about1} alt="Mario and Adrian" />
        <img className="md-img about-img2" src={about2} alt="Mario and Adrian" />
      </div>
    </div>
    */