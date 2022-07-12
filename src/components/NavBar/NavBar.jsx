import React from 'react'
import "./NavBar.css"
import Logo from "../../assets/logoProvisorio.png"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <img src= {Logo} alt="Logo provisorio" />
        <h1>👨‍💻 Mi tienda Jiménez 👨‍💻</h1>
        <nav>
          <NavLink className='list' to= '/' >Inicio</NavLink>
          <NavLink className='list' to= '/category'>Productos</NavLink>
          <NavLink className='list' to='/item'>Detalle</NavLink>
        </nav>
        <NavLink to= '/cart'> < CartWidget /> </NavLink>
        
    </header>
    
  )
}

export default NavBar