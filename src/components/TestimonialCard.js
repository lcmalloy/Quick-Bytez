import React from 'react'
import '../styles/TestimonialCard.css'

const TestimonialCard = (props) => {
  return (
    <div className="card-testimonial">
      <h3 className="ml-20">Rating: {props.testimonial.rating}</h3>
      <div className='profile ml-5 inline-b'>
        <img className="img-sm" src={props.testimonial.profile} alt=""/>
      </div>
      <h3 className="name inline-f">{props.testimonial.name}</h3>
      <p className="testimonial-description">{props.testimonial.review}</p>
    </div>
  )
}

export default TestimonialCard