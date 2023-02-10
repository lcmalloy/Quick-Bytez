import React from 'react'
import "../../styles/Highlights.css"
import "../../styles/Button.css"
import SpecialCard from '../../components/SpecialCard'
import SaladImg from '../../assets/greek salad.jpg'
import BruchettaImg from '../../assets/bruchetta.svg'
import LemonDessertImg from '../../assets/lemon dessert.jpg'


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
    img: BruchettaImg,
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

  const special = specials.map((meal) =>
    <SpecialCard meal={meal} />
  )
  return (
    <div className="hightlights_main">
      <div className="highlight-heading">
        <h2>This weeks specials</h2>
        <button type="button" className="btn1-square">Online Menu</button>
      </div>
      <div className="container-special">
        {special}
      </div>
    </div>
  )
}

export default Highlights