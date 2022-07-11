import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemListContainer = ( {greeting} ) => {
  
  const onAdd = (cantidad) =>{
    console.log(`Felicidades, compraste ${cantidad} unidades`);
  }


  return (
    <div>
        <span> {greeting} </span>
        <ItemCount initial={1} stock = {10} onAdd = {onAdd} />
    </div>
  )
}

export default ItemListContainer