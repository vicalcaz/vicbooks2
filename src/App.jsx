import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import BotonMultiuso from "./components/ejemplos/BotonMultiuso"
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
function App() {
  // const guardarData = () => {
  //   alert('Datoas guardados')
  // }

  // const borrarData = () => {
  //   console.log('borrado con exito!')
  // }
  // const colores=['rojo', 'verde', 'violeta']
  // const [pepe, maria]= colores
  // console.log(pepe, maria)

  return (
    <>
    
    <NavbarReactBootstrap/> 
    <ItemListContainer greeting="Bienvenidos a mi app!"/>
     {/* <BotonMultiuso texto={"Guardar"} estilo="red-button" manejadorDelOnclick={guardarData}/>
     <BotonMultiuso texto='Borrar' estilo='delete-button' manejadorDelOnclick={borrarData} disabled={true}/>
     <BotonMultiuso texto='Hola'/> */}
    </>
  )
}

export default App