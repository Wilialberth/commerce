import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  const greeting = "Bienvenidos a mi tienda."
  return (
    <>
      <BrowserRouter> 
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={greeting} />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
         </Routes>  
        </CartProvider>     
      </BrowserRouter>      
    </>  
  );
}

export default App;
