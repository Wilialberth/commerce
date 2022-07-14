import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom" 


const Item = ({info}) => {

      
  return (
    <Link to={`/item/${info.id}`} className='products'>
        <img src= {info.img} alt="" />
        <p> {info.name} </p>
        <p> {info.precio} </p>
    </Link>
    
  );
}

export default Item