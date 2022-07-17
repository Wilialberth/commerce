import React from 'react'
import "./ItemCart.css";
import { useCartContext } from '../../context/CartContext';

const ItemCart = ([products]) => {
const {removeProducts} = useCartContext ();

  return (
    <div>
        <img src={products.img} alt={products.name} />
            <div>
                <p>Name: {products.name} </p>
                <p>Cantidad: {products.quantity} </p>
                <p>Precio: {products.precio} </p>
                <p>Subtotal: ${products.quantity * products.precio} </p>
                <button onClick={()=> removeProducts(products.id)} >Eliminar</button>
            </div>



    </div>
  )
}

export default ItemCart