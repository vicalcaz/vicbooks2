import {useContext, useState}from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
 
const [compra, setCompra]= useState(false)

const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCompra(true)
    console.log(`Compraste ${cantidad} del item ${detalle.name}`)
    addItem(detalle,cantidad)
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:`Agregaste ${detalle.name} al carrito`,
      showCancelButton:false,
      showConfirmButton:false,
      timer:1500
    })
  }
  
  return (
    <div className="carddetail">
    
        <h2>{detalle.name}</h2>
        
        <img src={detalle.img} alt={detalle.name} className="item-image" />
        <p>{detalle.description}</p>
         <p>${detalle.price}</p>
          <p>Stock:{detalle.stock} unidades</p>
           {compra 
           ? <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Link to='/' className='btn btn-dark'>Seguir Comprando</Link>
                <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link>
            </div> 
           : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail