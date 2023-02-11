import React from 'react'
import "../../styles/Footer.css"
import Restaurant from "../../assets/restaurant.jpg"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer_main grid-col4">
      <div className="foot-img m-auto">
        <img className='foot-img-md' src={Restaurant} alt='restaurant' />
      </div>
      <div className="foot-nav m-auto">
        <h3 className="primary1">Doormat Navigation</h3>
        <nav className="nav_foot">
          <Link to='/' className="foot-link">HOME</Link>
          <Link to='/Menu' className="foot-link">MENU</Link>
          <Link to='/About' className="foot-link">ABOUT</Link>
          <Link to='/Reservation' className="foot-link">RESERVATION</Link>
          <Link to='/OrderOnline' className="foot-link">ORDER ONLINE</Link>
          <Link to='/Login' className="foot-link">LOGIN</Link>
        </nav>
      </div>
      <div className="contact m-auto">
        <h3 className="primary1">Contact</h3>
        <h4>Address</h4>
        <h4>Phone Number</h4>
        <h4>Email</h4>
      </div>
      <div className="socials m-auto">
        <h3 className="primary1">Social Media Links</h3>
        <h4>Address</h4>
        <h4>Phone Number</h4>
        <h4>Email</h4>
      </div>
    </div>
  )
}



export default Footer