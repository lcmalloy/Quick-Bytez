import React from 'react'
import SpecialCard from '../../components/SpecialCard/SpecialCard'
import SaladImg from '../../assets/greek salad.jpg'
import LemonDessertImg from '../../assets/lemon dessert.jpg'
import Bruschetta from '../../assets/bruschetta.jpg'

import './hightlights.scss'

import {useNavigate} from 'react-router-dom'


const specials = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    img: SaladImg,
    alt: 'salad',
  },
  {
    name: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic, and seasoned with sald and olive oil.',
    img: Bruschetta,
    alt: 'Bruchetta',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma`s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: LemonDessertImg,
    alt: 'lemon dessert',
  }
]

const Highlights = () => {
  const navigate = useNavigate();

  const special = specials.map((meal) =>
    <SpecialCard key={meal.name} meal={meal} />
  )
  return (
    <section>
      <div className="container highlights__container">
        <div className="highlights__meals">
          <div className="highlights__CTA">
            <h2>This Weeks Specials</h2>
            <button className="btn btn-primary" onClick={() => navigate('/menu')}>Online Menu</button>
          </div>
          <div className="highlights__container-meals">
            {special}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
