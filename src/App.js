import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Carrito } from './components/context/CartContext';

function App() {
  return (
  <BrowserRouter>
    <Carrito>

          <NavBar />
          <Routes>
            <Route 
              path='/' 
              element={<ItemListContainer greeting="BIENVENIDOS A MI ECOMMER " />} 
              />       
            <Route 
              path='/category/:id' 
              element={<ItemListContainer greeting="BIENVENIDOS A MI ECOMMER " />} 
              />       
          </Routes>
    </Carrito>
  </BrowserRouter>) 
}

export default App;
