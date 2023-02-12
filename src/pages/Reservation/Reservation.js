import React from 'react'
import '../../styles/Reservation.css'
import BookingForm from '../../components/BookingForm'
import Hero from '../../container/Hero/Hero'
import { hero_reservation } from '../../static/hero/hero_description'

const Reservation = () => {
  return (
    <>
      <Hero hero={ hero_reservation }/>
      <h1>
        Reservation
      </h1>
      <div className="booking-container">
        <BookingForm />
      </div>
    </>
  )
}

export default Reservation