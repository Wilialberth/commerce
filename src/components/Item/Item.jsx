import React from 'react'
import "./Item.css"

const Item = ({info}) => {
  return (
    <a href="" className='products'>
        <img src= {info.img} alt="" />
        <p> {info.name} </p>
        <p> {info.precio} </p>
    </a>
    
  );
}

export default Item