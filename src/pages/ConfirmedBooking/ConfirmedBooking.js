import React from 'react'
import '../../styles/ConfirmedBooking.css'

const ConfirmedBooking = ({ data }) => {
  const {name, date, time, guests, location, occasion, additional } = data
  return (
    <div className="confirmedBooking_container">
      <h1>Your Reservations have been made and Confirmed</h1>
      <h6>Name: {name}</h6>
      <h6>Date: {date}</h6>
      <h6>Time: {time}</h6>
      <h6>Guest: {guests}</h6>
      <h6>Location: {location}</h6>
      <h6>Occasion: {occasion}</h6>
      {additional === '' ? null : <h6>Additional Accommodations: {additional}</h6>}
      <div>
        <h2>Thank You For Trusting Us!</h2>
      </div>
    </div>
  )
}

export default ConfirmedBooking