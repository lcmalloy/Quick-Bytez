import React from 'react';
import Nav from './Nav';
import Logo from '../assets/Logo.svg';
import "./Header.css";


const Header = () => {
  return (
    <div className="header_main">
      <img className="logo_img" src={Logo} alt="logo"/>
      <Nav />
    </div>
  )
}

export default Header