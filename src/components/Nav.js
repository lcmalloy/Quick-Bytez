import React from 'react'
import "../styles/Nav.css"

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar_main">
        <Link to='/' className="nav-link">HOME</Link>
        <Link to='/Menu' className="nav-link">MENU</Link>
        <Link to='/About' className="nav-link">ABOUT</Link>
        <Link to='/Reservation' className="nav-link">RESERVATION</Link>
        <Link to='/OrderOnline' className="nav-link">ORDER ONLINE</Link>
        <Link to='/Login' className="nav-link">LOGIN</Link>
      </nav>
    </>
  )
}

export default Nav