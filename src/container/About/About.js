import React from 'react'
import "../../styles/About.css"
import about1 from '../../assets/Mario and Adrian A.jpg'
import about2 from '../../assets/Mario and Adrian b.jpg'

const About = () => {
  return (
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
  )
}

export default About