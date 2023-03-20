import React from 'react'
import { useReducer, useEffect, useState } from 'react'

import BookingForm from '../../components/BookingForm/BookingForm'
import ConfirmedBooking from '../../components/ConfirmedBooking/ConfirmedBooking'
import { fetchAPI } from '../../static/API/fetchAPI'
import submitAPI from '../../static/API/submitAPI'
import {Link} from 'react-router-dom'

import './reservation.scss'


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
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [data, setData] = useState({})


  useEffect(() => {
    if (date) {
      let currentDate = new Date(date);
      setAvailTimes(fetchAPI(currentDate));
    }
  },[date])

  const handleSubmit = (updateData) => {
    submitAPI(updateData);
    setData(updateData);
    setFormSubmitted(!formSubmitted);
  };

  return (
    <section>
      <div class="container container__reservation">
        <h1>Reservation</h1>
        <div class="container__form">
          { formSubmitted ?
          <ConfirmedBooking data={data}/>
          :
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} setDate={setDate} availTimes={availTimes}/>
          }
        </div>
        <Link to="Quick-Bytez/">Return to Home</Link>
      </div>
    </section>
  )
}

export { Reservation, updateTimes, initializeTimes }