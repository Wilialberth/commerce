import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const greeting = "Bienvenidos, tienda en construcción."
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting} />
      <ItemDetailContainer />
    </>  
  );
}

export default App;
