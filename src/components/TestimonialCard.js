import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="card-testimonial">
      <h3>{props.testimonial.rating}</h3>
      <img src='' alt='profile'/>
      <h3>{props.testimonial.name}</h3>
      <p>{props.testimonial.review}</p>
    </div>
  )
}

export default TestimonialCard