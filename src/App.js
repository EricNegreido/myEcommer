import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Cartt } from './components/Cartt';
import { Carrito } from './components/context/CartContext';

function App() {
  return (
  <BrowserRouter>
    <Carrito>

          <NavBar />
          <Routes>
            <Route 
              path='/' 
              element={<ItemListContainer greeting="BIENVENIDOS A MI ECOMMERCE " />} 
              />       
            <Route 
              path='/category/:id' 
              element={<ItemListContainer greeting="BIENVENIDOS A MI ECOMMERCE" />} 
              />      
              <Route 
                path='/cart'
                element={<Cartt />}
              /> 
          </Routes>
    </Carrito>
  </BrowserRouter>) 
}

export default App;
