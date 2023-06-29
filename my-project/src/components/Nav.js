import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>
          Trang chủ
        </NavLink>
        <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : '')}>
          Giới thiệu
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default Nav
