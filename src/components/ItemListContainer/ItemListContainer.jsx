import React, { useEffect, useState  } from 'react'

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const products = [
  {id:'01', name:'random1', description:"Estamos renovando para ti", precio: '$2500', category: 'Remeras', img:'https://picsum.photos/200', stock:5},
  {id:'02', name:'random2', description:"Estamos renovando para ti", precio: '$2500', category: 'Remeras', img:'https://picsum.photos/201', stock:15},
  {id:'03', name:'random3', description:"Estamos renovando para ti", precio: '$2500', category: 'Jeans', img:'https://picsum.photos/202', stock:7},
  {id:'04', name:'random4', description:"Estamos renovando para ti", precio: '$2500', category: 'Jeans', img:'https://picsum.photos/204', stock:10},
  {id:'05', name:'random5', description:"Estamos renovando para ti", precio: '$2500', category: 'Jeans', img:'https://picsum.photos/205', stock:4},
  {id:'07', name:'random7', description:"Estamos renovando para ti", precio: '$2500', category: 'Camisas', img:'https://picsum.photos/204', stock:4},
  {id:'08', name:'random8', description:"Estamos renovando para ti", precio: '$2500', category: 'Camisas', img:'https://picsum.photos/200', stock:4},
  
];

export const ItemListContainer = ( {greeting} ) => {
  const [data, setData] = useState ([]);

  const {categoryId} = useParams();

  useEffect(()=>{
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    });
    if (categoryId) {
      getData.then(res => setData (res.filter(products => products.category === categoryId)))
    } else {
      getData.then(res => setData(res))
    }
    
  }, [categoryId])

  


  return (
    <div>
        <span> {greeting} </span>
        <ItemList data = {data}  />
    </div>
  )
}

export default ItemListContainer