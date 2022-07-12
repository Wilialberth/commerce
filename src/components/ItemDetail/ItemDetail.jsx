import React, {useState} from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom" 

export const ItemDetail = ({data}) => {

  const [cart, setCart] = useState (false);

  const onAdd = (cantidad) =>{
   setCart(true);
  }

  return (
   <div className='container' >
    <div className='detail'>
      <img className='detail__img' src= {data.img} alt="" />
      <div className='content' >
        <h1> {data.description } </h1>
        <p> {data.precio} </p>
        {
          cart
          ? <Link to = '/cart' >Terminar compra</Link>
          : <ItemCount initial={1} stock = {10} onAdd = {onAdd} />
        }
      </div>
    </div>
   </div>
  )
}

export default ItemDetail