import React from 'react'
import { useState } from 'react'
import './bookingform.scss'

const BookingForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    location: '',
    occasion: '',
    additional: '',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(form)
  };

  const availableTime = props.availTimes.map((availableTime, i) =>
    <option key={i} required>{availableTime}</option>
  )

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div className="container__form-submit">
        <label htmlFor="reservation__name">Name:</label>
        <input type="text" id="reservation__name" required minlength="2" maxlength="50" onChange={e => {setForm({...form, name: e.target.value })}}
        />
        <label htmlFor="reservation__date">Please select a date</label>
        <input type="date" id="reservation__date" required value={form.date} onChange={e => {
            setForm({...form, date: e.target.value});
            props.dispatch({type:'date'})
            props.setDate(form.date);}}
        />
        <label htmlFor="reservation__time">Select a timeslot</label>
        <select id="reservation__time" value={form.time} onChange={e => {setForm({...form, time: [e.target.value]});}}>
          {availableTime}
        </select>
        <label htmlFor="reservation__guests">Select party size</label>
        <input type="number" placeholder="1" min="1" max="10" id="reservation__guests" value={form.guests} required onChange={e => { setForm({...form, guests: e.target.value, }); }}/>
        <label htmlFor="reservation__location">select seating location</label>
          <div className="reservation__radio">
            <h3>Inside</h3>
            <input type="radio" value="inside" checked={form.location === "inside"}
              onChange={e => {
                setForm({
                  ...form,
                  location: e.target.value,
                });
            }}/>
            <h3>Outside</h3>
            <input type="radio" value="outside" checked={form.location === "outside"}
              onChange={e => {
                setForm({
                  ...form,
                  location: e.target.value,
                });
              }}/>
          </div>
          <label htmlFor="reservation__occasion">Special Occasion?</label>
          <select id="reservation__occasion" value={form.occasion}
            onChange={e => {
              setForm({
                ...form,
                occasion: e.target.value,
              })
            }}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <label htmlFor="reservation__additional">Additional Accommodations:</label>
          <textarea placeholder="Optional..." value={form.additional}
          onChange={e => {
            setForm({
              ...form,
              additional: e.target.value,
            })
          }}
          />
      </div>
        <button type="submit" className='btn btn-primary'>Make Your Reservation</button>
      </form>
    </>
  )
}

export default BookingForm

