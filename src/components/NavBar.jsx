import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/keeper">
            Keeper
        </NavLink>
      
    </div>
  )
}

export default NavBar
