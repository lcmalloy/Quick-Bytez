import React from 'react'

import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import TestimonialCard from './TestimonialCard/TestimonialCard'
import './testimonials.scss'

const testimonials = [
  {
    name: 'Ken Mars',
    rating: 4,
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dolorem provident laboriosam quod vel corrupti quas dolore odit assumenda similique.',
    profile: profile1,
  },
  {
    name: 'Kyle Marks',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat pariatur, nostrum cupiditate adipisci quaerat libero alias itaque culpa laudantium!',
    profile: profile3,
  },
  {
    name: 'Jessica Chu',
    rating: 4,
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quisquam porro assumenda reiciendis cumque vel asperiores. Aliquam unde obcaecati repellat!',
    profile: profile2,
  },
]

const Testimonials = () => {

  return (
    <section>
      <div className="testimonials__container">
        <h2>Testimonials</h2>
        <div className="cards__container">
          {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial}/>)}
        </div>
      </div>
    </section>
  )
}

export default Testimonials