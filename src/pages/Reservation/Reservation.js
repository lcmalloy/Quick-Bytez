import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import '../../styles/Reservation.css'
import BookingForm from '../../components/BookingForm'
import { hero_reservation } from '../../static/hero/hero_description'
import { Hero } from '../../container/'
import { fetchAPI, seededRandom } from '../../static/API/fetchAPI'
import submitAPI from '../../static/API/submitAPI'

const updateTimes = (availableTimes, action) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
}

const initializeTimes =  [
  'Please select a date'
]

const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  useEffect(() => {
    const date = new Date();
    console.log(fetchAPI(date))

  },[])

  const handleSubmit = () => {
    console.log("Form submitted!")
  };

  return (
    <>
      <Hero hero={ hero_reservation }/>
      <div className="booking-container">
        <h1>Reservation</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} handleSubmit={handleSubmit}/>
      </div>
    </>
  )
}

export { Reservation, updateTimes, initializeTimes }