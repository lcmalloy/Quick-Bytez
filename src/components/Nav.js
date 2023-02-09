import React from 'react'
import "../styles/Nav.css"

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar_main">
        <Link to='/' className="nav-item">HOME</Link>
        <Link to='/Menu' className="nav-item">MENU</Link>
        <Link to='/About' className="nav-item">ABOUT</Link>
        <Link to='/Reservation' className="nav-item">RESERVATION</Link>
        <Link to='/OrderOnline' className="nav-item">ORDER ONLINE</Link>
        <Link to='/Login' className="nav-item">LOGIN</Link>
      </nav>
    </>
  )
}

export default Nav