import React from 'react'
import "./ItemDetail.css"

export const ItemDetail = ({data}) => {
  return (
   <div className='container' >
    <div className='detail'>
      <img className='detail__img' src= {data.img} alt="" />
      <div className='content' >
        <h1> {data.description } </h1>
        <p> {data.precio} </p>
      </div>
    </div>
   </div>
  )
}

export default ItemDetail