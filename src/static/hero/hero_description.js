import heroImageMain from '../../assets/restauranfood.jpg'
import heroImageReservation from '../../assets/restaurant-775x500.jpeg'

const hero_main = {
  heading: 'Little Lemon',
  sub: 'Chicago',
  description: 'Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.',
  btn: {
    active: true,
    link: null
  },
  img: heroImageMain
}

const hero_reservation = {
  heading: 'Book A Table',
  sub: 'Little Lemon',
  description: 'Esse consequat dolore culpa sint non incididunt reprehenderit ea ut amet adipisicing ipsum voluptate amet. Laboris voluptate eiusmod aliquip minim. Aute ullamco anim culpa Lorem adipisicing aliquip officia.',
  btn: {
    active: false,
    link: null,
  },
  img: heroImageReservation
}

export { hero_main, hero_reservation }