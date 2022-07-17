import React from 'react'
import { useCartContext } from '../../context/CartContext'



const CartWidget = () => {
  const {totalProducts} = useCartContext ();


  return (
    <>
      <span className="material-symbols-outlined" >
          shopping_cart
      </span>
      <span> {totalProducts() || ''} </span>
    </>
  )
}

export default CartWidget