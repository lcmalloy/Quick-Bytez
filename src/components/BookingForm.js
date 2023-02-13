import React from 'react'
import { useState } from 'react'
import '../styles/Button.css'
import '../styles/BookingForm.css'

const BookingForm = (props) => {
  const [form, setForm] = useState({
    date: '',
    time: '',
    guests: 1,
    location: '',
    occasion: '',
    additional: '',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit([form.date, form.time, form.guests, form.location, form.occasion, form.additional])
  };

  const availableTime = props.availableTimes.map((availableTime, i) =>
    <option key={i}>{availableTime}</option>
  )

  return (
    <>
      <form className="bookingForm-main" onSubmit={handleFormSubmit}>
        <div className="res-date">
          <label htmlFor="res-date">Please select a date</label>
          <input
            type="date"
            id="res-date"
            value={form.date}
            onChange={e => {
              setForm({
                ...form,
                date: e.target.value
              });
              props.dispatch({type:form.date})
            }}
            />
        </div>
        <div className="res-time">
          <label htmlFor="res-time">Please select an available timeslot</label>
          <select
            id="res-time"
            value={form.time}
            onChange={e => {
              setForm({
                ...form,
                time: [e.target.value]
              });
            }}>
            {availableTime}
          </select>
        </div>
        <div className="res-guests">
          <label htmlFor="guests">Please select party size</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={form.guests}
            onChange={e => {
              setForm({
                ...form,
                guests: e.target.value,
              });
            }}
            />
        </div>
        <div className="res-location">
          <label htmlFor="location" class="m-auto">Please select seating location</label>
          <div className="res-radio">
            <div className="location-radio">
              <h3>Inside</h3>
              <input
                type="radio"
                value="inside"
                checked={form.location === "inside"}
                onChange={e => {
                  setForm({
                    ...form,
                    location: e.target.value,
                  });
                }}/>
            </div>
            <div className="location-radio">
              <h3>Outside</h3>
              <input
                type="radio"
                value="outside"
                checked={form.location === "outside"}
                onChange={e => {
                  setForm({
                    ...form,
                    location: e.target.value,
                  });
                }}/>
            </div>
          </div>
        </div>
        <div className="res-additionals">
          <div className="res-occasion">
            <label htmlFor="occasion">Special Occasion?</label>
            <select
              id="occasion"
              value={form.occasion}
              onChange={e => {
                setForm({
                  ...form,
                  occasion: e.target.value,
                })
              }}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className="res-additional">
            <label htmlFor="additional">Additional Accommodations:</label>
            <textarea
            placeholder="Optional..."
            value={form.additional}
            onChange={e => {
              setForm({
                ...form,
                additional: e.target.value,
              })
            }}
            />
          </div>
        </div>
        <button type="submit" className='btn1-square m-auto'>Make Your Reservation</button>
      </form>
    </>
  )
}

export default BookingForm