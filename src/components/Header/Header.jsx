import React from 'react';
import header_img from '../../assets/header1.jpeg'
import './header.scss'

const Header = () => {
  return (
    <header id="/#">
      <div className="header__container">
        <div className="header__banner">
          <div className="header__banner-details">
            <h1>Quick Bytez</h1>
            <h2 className='text-light'>California</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni, cum amet vero sint quod illo optio saepe minus harum eveniet vel eligendi sequi impedit explicabo deserunt distinctio est maiores.</p>
            <button className="btn btn-primary"> Reserve a spot!</button>
          </div>
          <div className="header__banner-image-container">
            <img src={header_img} alt="restaurant image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header