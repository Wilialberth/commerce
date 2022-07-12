import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const products = {id:'01', name:'random1', description:"Estamos renovando para ti", precio: '$2500', img:'https://picsum.photos/200', stock:5}


const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});

    useEffect(() =>{
        const getItem = new Promise((resolve) => {
            setTimeout (() =>{
                resolve(products)
            }, 2000)
        });
        getItem.then (res=> setItem(res))
    },[])

  return (
    <ItemDetail item = {item} />
  )
}

export default ItemDetailContainer