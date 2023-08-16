import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
  <BrowserRouter>
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
  </BrowserRouter>) 
}

export default App;
