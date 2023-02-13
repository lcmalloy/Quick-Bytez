import './App.css';
import { Homepage, Menu, Reservation, OrderOnline, Login, About } from './pages/'
import { Header, Footer } from './container/'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservation' element={<Reservation />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
