import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const greeting = "Bienvenidos, tienda en construcción."
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={greeting} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={greeting} />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        </Routes>       
      </BrowserRouter>      
    </>  
  );
}

export default App;
