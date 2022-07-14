import React, { useState, useContext } from 'react'


const CartContext = React.createContext ([]); 

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProducts = (item, newQuantity) =>{
        const newCart = cart.filter (prod => prod.id !== item.id);
        newCart.push ({...item, quantity: newQuantity});
        setCart (newCart)
    }
console.log('Carrito: ', cart);

    const clearCart = () => setCart ([]);

    const isInCart = (id) => cart.find (products => products.id === id) ? true : false;

   // const removeProducts = (id) => setCart(cart.filter (products.id !==id));



  return (
    <CartContext.Provider value = {{
        clearCart,
        isInCart,
        //removeProducts
        addProducts
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider