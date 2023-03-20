import { Homepage, Menu, Reservation, OrderOnline, Login, About } from './pages/'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/Quick-Bytez/' element={<Homepage />} />
        <Route path='/Quick-Bytez/Menu' element={<Menu />} />
        <Route path='/Quick-Bytez/Reservation' element={<Reservation />} />
        <Route path='/Quick-Bytez/OrderOnline' element={<OrderOnline />} />
        <Route path='/Quick-Bytez/About' element={<About />} />
        <Route path='/Quick-Bytez/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
