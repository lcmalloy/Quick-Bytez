import React from 'react'
import { Link } from 'react-router-dom'

import Restaurant from '../../assets/restaurant.jpg'
import './footer.scss'

const Footer = () => {
  return (
    <section>
      <div className="container container__footer">
        <div className="container__footer-img">
          <img src={Restaurant} alt="" />
        </div>
        <div className="container__footer-nav">
          <h2>Doormat Navigation</h2>
          <Link to='/Quick-Bytez/' className="foot-link">HOME</Link>
          <Link to='/Quick-Bytez/Menu' className="foot-link">MENU</Link>
          <Link to='/Quick-Bytez/About' className="foot-link">ABOUT</Link>
          <Link to='/Quick-Bytez/Reservation' className="foot-link">RESERVATION</Link>
          <Link to='/Quick-Bytez/OrderOnline' className="foot-link">ORDER ONLINE</Link>
          <Link to='/Quick-Bytez/Login' className="foot-link">LOGIN</Link>
        </div>
        <div className="container__footer-contact">
          <h2>Contacts</h2>
          <h3>Address</h3>
          <h3>Phone Number</h3>
          <h3>Email</h3>
        </div>
        <div className="container__footer-socials">
          <h2>Social Media Links</h2>
          <h3>Facebook</h3>
          <h3>Instagram</h3>
          <h3>Twitter</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer