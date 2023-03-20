import React from 'react'

import './confirmedBooking.scss'

const ConfirmedBooking = ({ data }) => {
  const {name, date, time, guests, location, occasion, additional } = data
  return (
    <section className="confirmed__booking">
      <h2>Confirmation: Reservation has been made!</h2>
      <h3>Name: {name}</h3>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Party Size: {guests}</h3>
      <h3>Location: {location}</h3>
      <h3>Occassion: {occasion}</h3>
      {additional === '' ? null : <h3>Additional Accommodations: {additional}</h3>}
      <h2>Thank You For Booking With Us!</h2>
    </section>
  )
}

export default ConfirmedBooking