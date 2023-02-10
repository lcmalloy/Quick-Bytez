import React from 'react'
import "../../styles/Testimonials.css"
import TestimonialCard from '../../components/TestimonialCard'
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'

const testimonials = [
  {
    name: 'Ken Mars',
    rating: 4,
    review: 'Culpa adipisicing ullamco amet tempor labore enim.',
    profile: profile1,
  },
  {
    name: 'Kyle Marks',
    rating: 5,
    review: 'Qui irure voluptate deserunt ad laboris.',
    profile: profile3,
  },
  {
    name: 'Jessica Chu',
    rating: 4,
    review: 'Aliquip deserunt pariatur consequat minim consectetur adipisicing sint excepteur ad irure sunt nulla officia laboris.',
    profile: profile2,
  }
]

const Testimonials = () => {

  let testimonial = testimonials.map((testimonial) =>
    <TestimonialCard testimonial={testimonial}/>
  )
  return (
    <div className="testimonials_main">
      <h2 className='flex-center mt-50'>Testimonials</h2>
      <div className="testimonial_body">
        {testimonial}
      </div>
    </div>
  )
}

export default Testimonials