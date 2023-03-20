import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/logo.svg'
import './nav.scss'

const Nav = () => {
  const [ active, setActive ] = useState('/')

  return (
    <nav>
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <Link to='Quick-Bytez/' onClick={() => setActive('/')} className={active === '/' ? 'active' : ''}>HOME</Link>
        <Link to='Quick-Bytez/Menu' onClick={() => setActive('/Menu')} className={active === '/Menu' ? 'active' : ''}>MENU</Link>
        <Link to='Quick-Bytez/About' onClick={() => setActive('/About')} className={active === '/About' ? 'active' : ''}>ABOUT</Link>
        <Link to='Quick-Bytez/Reservation' onClick={() => setActive('/Reservation')} className={active === '/Reservation' ? 'active' : ''}>RESERVATION</Link>
        <Link to='Quick-Bytez/OrderOnline' onClick={() => setActive('/OrderOnline')} className={active === '/OrderOnline' ? 'active' : ''}>ORDER ONLINE</Link>
        <Link to='Quick-Bytez/Login' onClick={() => setActive('/Login')} className={active === '/Login' ? 'active' : ''}>LOGIN</Link>
        <div className="navbar__sidebar">
        <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  )
}

export default Nav