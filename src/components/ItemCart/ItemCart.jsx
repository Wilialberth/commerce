import React from 'react'
import "./ItemCart.css";
import { useCartContext } from '../../context/CartContext';

const ItemCart = ([product]) => {
const {removeProducts} = useCartContext ();

  return (
    <div>
        <img src={product.img} alt={product.name} />
            <div>
                <p>Name: {product.name} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio: {product.precio} </p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={()=> removeProducts(product.id)} >Eliminar</button>
            </div>



    </div>
  )
}

export default ItemCart