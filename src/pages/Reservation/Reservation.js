import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import '../../styles/Reservation.css'
import BookingForm from '../../components/BookingForm'
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking'
import { hero_reservation } from '../../static/hero/hero_description'
import { Hero } from '../../container/'
import { fetchAPI } from '../../static/API/fetchAPI'
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

const initializeTimes = [
  'Please select a date'
]

const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
  const [date, setDate] = useState('');
  const [availTimes, setAvailTimes] = useState(['Please select a date']);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [data, setData] = useState({})


  useEffect(() => {
    if (date) {
      let currentDate = new Date(date);
      setAvailTimes(fetchAPI(currentDate));
      console.log(availTimes);
    }
  },[date])

  const handleSubmit = (updateData) => {
    console.log("Form submitted!")
    console.log(updateData);
    submitAPI(updateData);
    setData(updateData);
    setIsFormSubmitted(!isFormSubmitted);
  };

  return (
    <>
      <Hero hero={ hero_reservation }/>
      <div className="booking-container">
        <h1>Reservation</h1>
        { isFormSubmitted ?
        <ConfirmedBooking data={data}/>
          :
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} setDate={setDate} availTimes={availTimes}/>
        }
      </div>
    </>
  )
}

export { Reservation, updateTimes, initializeTimes }