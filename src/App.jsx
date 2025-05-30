import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <NavBar/>    
      <Routes>
        
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenidos a mi cofre de tesoros!"/>}/>       
        <Route path='/home' element={<ItemListContainer greeting="¡Bienvenidos a mi cofre de tesoros!"/>}/>       
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/> 
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/> 
        <Route path='/seleccionados/:seleccionadosId' element={<ItemListContainer greeting="Estas en la sección de seleccionados: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
        <Route path="/:otrosId" element={<ItemListContainer greeting="Estas en:" />}/>
        <Route path='*' element={<Error/>}/> 
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
