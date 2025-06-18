import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
//importar el proveedor del contexto del carrito
import { CartProvider } from './context/CartContext';
import CheckOutUseForm from './components/CheckOutUseForm';
import Cart from './components/Cart';
//importar el componente Cart
function App() {
  return (
    
    <BrowserRouter>
     
      {/* //todos los componentes que necesiten acceder al contexto del carrito deben estar dentro del proveedor */}
      <CartProvider>
        <NavBar/>       
        <Routes>
        
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a mi cofre de tesoros!"/>}/>       
        <Route path='/home' element={<ItemListContainer greeting="¡Bienvenidos a mi cofre de tesoros!"/>}/>       
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/> 
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/> 
        <Route path='/seleccionados/:seleccionadosId' element={<ItemListContainer greeting="Estas en la sección de seleccionados: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
        <Route path="/:otrosId" element={<ItemListContainer greeting="Estas en:" />}/>
         <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOutUseForm/>}/>
        <Route path='*' element={<Error/>}/> 
        {/* //ruta nueva del Checkout */}
        </Routes> 
        
      </CartProvider>
    </BrowserRouter>
    
  )
}

export default App
