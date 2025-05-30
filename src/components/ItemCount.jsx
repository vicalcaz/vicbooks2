import {useState, useEffect} from 'react'
//imports arriba del componente
const ItemCount = ({stock, onAdd}) => {
    //logica, funciones, hook
    //declaracion del hook
    const [count, setCount]= useState(1)
   
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){

            setCount (count + 1)
        }
    }

// const comprar = () => {
//     onAdd(count)
// }

  return (
   <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span  className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    {/* <button className='btn btn-primary' onClick={comprar} >Agregar al carrito</button> */}
     <button className='btn btn-primary' onClick={()=>onAdd(count)} >Agregar al carrito</button>
   </div>
  )
}
//exportamos el componente
export default ItemCount