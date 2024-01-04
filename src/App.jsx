import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Room from './pages/Room/Room'



function App() {

  // <Route path='/room/:roomId' element={<Room/>} />
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/room/:roomId' element={<Room/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App