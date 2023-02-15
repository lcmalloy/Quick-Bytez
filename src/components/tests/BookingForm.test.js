// import { fireEvent, render, screen } from '@testing-library/react';
// import BookingForm from '../BookingForm'

// describe("Reservation Form", () => {
//   test("user is able to submit the form with all fields submitted", () => {
//     const date = '01/01/2020';
//     const time = '17:00';
//     const guests = 2;
//     const location = 'outside';
//     const occasion = 'Birthday';
//     const additional = 'Wheelchair accessability';
//     const availableTimes = [
//       '17:00',
//       '18:00',
//       '19:00',
//       '20:00',
//       '21:00',
//       '22:00',
//     ]
//     render(<BookingForm availableTimes={availableTimes} />);
//     const dateInput = screen.getByLabelText(/Please select a date/)
//     fireEvent.change(dateInput, {target: { value: date}});

//     const timeInput = screen.getByLabelText(/Please select an available timeslot/)
//     fireEvent.change(timeInput, {target: { value: time}});

//     const guestsInput = screen.getByLabelText(/Please select party size/)
//     fireEvent.change(guestsInput, {target: { value: guests}});

//     const locationInput = screen.getByLabelText(/Please select seating location/)
//     fireEvent.change(locationInput, {target: { value: location}});

//     const occasionInput = screen.getByLabelText(/Special Occasion?/)
//     fireEvent.change(occasionInput, {target: { value: occasion}});

//     const additionalInput = screen.getByLabelText(/Additional Accommodations:/)
//     fireEvent.change(additionalInput, {target: { value: additional}});

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

//     expect(handleSubmit).toHaveBeenCalledWith({
//       date,
//       time,
//       guests,

//     })
//   })
// })