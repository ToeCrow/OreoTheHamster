import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink>Hem</NavLink>
      <NavLink>Bilder</NavLink>
      <NavLink>Hamstervård</NavLink>
    </nav>
  )
}

export default Navbar 