import React from 'react'
import { Link } from 'react-router-dom'

import './specialCard.scss'

const SpecialCard = (props) => {
  return (
    <article>
      <div className="specials__container">
        <div className="specials__img">
          <img src={props.meal.img} alt="" />
        </div>
        <div className="specials__header">
          <h3 className="specials__header-title">{props.meal.name}</h3>
          <h4 className="specials__header-price">{props.meal.price}</h4>
        </div>
        <div className="specials__description">
          <p>{props.meal.description}</p>
        </div>
        <div className="specials__CTA">
          <Link to="/Quick-Bytez/OrderOnline" className="specials__CTA-link"> Order a Delivery</Link>
        </div>
      </div>
    </article>

  )
}

export default SpecialCard


/*

<div className="card-specials">
      <img src={props.meal.img} alt={props.meal.alt}/>
      <div className="card-info-head">
        <h3 className="title">{props.meal.name}</h3>
        <h3 className="price secondary1">{props.meal.price}</h3>
      </div>
      <div className="card-info-body">
        <p className="card-text">{props.meal.description}</p>
      </div>
      <div className="card-action">
        <Link to='/OrderOnline' className="nav-item">Order a Delivery</Link>
      </div>
    </div>


    */