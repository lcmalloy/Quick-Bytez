import React from 'react';
import Nav from '../../components/Nav';
import Logo from '../../assets/Logo.svg';
import "../../styles/Header.css";


const Header = () => {
  return (
    <div className="header_main">
      <img className="logo_img logo" src={Logo} alt="logo"/>
      <Nav />
    </div>
  )
}

export default Header