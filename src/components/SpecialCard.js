import React from 'react'
import '../styles/SpecialCard.css'

import { Link } from 'react-router-dom'

const SpecialCard = (props) => {
  return (
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
  )
}

export default SpecialCard