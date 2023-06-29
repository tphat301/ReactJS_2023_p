import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Er404 from '../components/Er404'
import Home from '../components/Home'
import Nav from '../components/Nav'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav></Nav>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Route>
      <Route path='*' element={<Er404></Er404>}></Route>
    </Routes>
  )
}

export default Routers
