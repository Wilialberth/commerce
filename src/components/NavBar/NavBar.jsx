import React from 'react'
import "./NavBar.css"
import Logo from "../../assets/logoProvisorio.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
        <img src= {Logo} alt="Logo provisorio" />
        <h1>👨‍💻 Mi tienda Jiménez 👨‍💻</h1>
        <nav>
          <a href="">Inicio</a>
          <a href="">Productos</a>
          <a href="">Pago</a>
        </nav>
        < CartWidget />
    </header>
    
  )
}

export default NavBar