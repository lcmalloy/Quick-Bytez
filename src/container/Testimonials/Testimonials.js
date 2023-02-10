import React from 'react'
import "../../styles/Testimonials.css"
import TestimonialCard from '../../components/TestimonialCard'

const testimonials = [
  {
    name: 'Ken Mars',
    rating: 4,
    review: 'Culpa adipisicing ullamco amet tempor labore enim.'
  },
  {
    name: 'Kyle Marks',
    rating: 5,
    review: 'Qui irure voluptate deserunt ad laboris.'
  },
  {
    name: 'Jessica Chu',
    rating: 4,
    review: 'Aliquip deserunt pariatur consequat minim consectetur adipisicing sint excepteur ad irure sunt nulla officia laboris.'
  }
]

const Testimonials = () => {

  let testimonial = testimonials.map((testimonial) =>
    <TestimonialCard testimonial={testimonial}/>
  )
  return (
    <div className="testimonials_main">
      Testimonials
      <div className="testimonial_body">
        {testimonial}
      </div>
    </div>
  )
}

export default Testimonials