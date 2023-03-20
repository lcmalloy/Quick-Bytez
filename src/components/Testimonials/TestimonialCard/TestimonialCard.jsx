import React from 'react'

import './testimonialCard.scss'

const TestimonialCard = (props) => {
  return (
    <article>
      <div className="testimonialCard__container">
        <div className="testimonial__img-container">
          <img src={props.testimonial.profile} alt="" />
        </div>
        <div className="testimonial__details">
          <h3>{props.testimonial.name}</h3>
          <h4>Rating: {props.testimonial.rating}</h4>
          <p>{props.testimonial.review}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard