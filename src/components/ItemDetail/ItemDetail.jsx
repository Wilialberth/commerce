import React from 'react'
import "./ItemDetail.css"

export const ItemDetail = ({item}) => {
  return (
   <div className='container' >
    <div className='detail'>
      <img className='detail__img' src= {item.img} alt="" />
      <div className='content' >
        <h1> {item.description} </h1>
        <p> {item.precio} </p>
      </div>
    </div>
   </div>
  )
}

export default ItemDetail