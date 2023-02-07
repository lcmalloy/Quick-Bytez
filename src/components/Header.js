import React from 'react';
import Nav from './Nav';
import Logo from '../assets/Logo.svg';


const Header = () => {
  return (
    <div className="header_main">
      <img src={Logo} alt="logo"/>
      <Nav />
    </div>
  )
}

export default Header