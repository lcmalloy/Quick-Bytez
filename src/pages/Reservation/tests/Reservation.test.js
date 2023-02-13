import { render, screen } from '@testing-library/react';
import { Reservation, updateTimes, initializeTimes } from '../Reservation'

test('Renders the Reservation Heading', () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
})

test('Renders select a date at initilization', () => {
  render(<Reservation />);
  expect(initializeTimes).toStrictEqual(['Please select a date'])
})

test('returns available time', () => {
  expect(updateTimes()).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ])

})