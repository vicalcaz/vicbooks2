import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

//si nos animamos hacer una librería de validación de formularios
// import { useForm } from "react-hook-form";
const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const buyerData = (e) => {

        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    
    // Aquí podrías agregar la lógica para finalizar la compra, como enviar los datos a un servidor o actualizar el estado del carrito
    //validar que el usuario haya completado el formulario
    //mejor decirle que le falta completar un campo
    //validar que el email sea correcto y que lo haya reingresado correctamente
    //no se olviden del formulario, descontar el stock de los productos comprados
    //pero no es obligatorio, que el usuario consulte su pedido no es obligatorio
    const finalizarCompra = (e)=>{
    //para que no recargue 
       e.preventDefault()

       if(!buyer.name || !buyer.address || !buyer.email){
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Todos los campos son requeridos.',
            confirmButtonColor: '#3085d6'
        });
       }else if(buyer.email !== validateEmail){
        Swal.fire({
            icon: 'warning',
            title: 'Correos no coinciden',
            text: 'Los correos electrónicos no coinciden.',
            confirmButtonColor: '#3085d6'
        });
       }else{
         let orden = {
            comprador: buyer,
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")

        //agregar un doc

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
            Swal.fire({
                icon: 'success',
                title: '¡Compra realizada!',
                text: 'Tu orden fue generada correctamente.',
                confirmButtonColor: '#3085d6'
            });
        })
        .catch((error)=> {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al procesar la compra. Intenta nuevamente.',
                confirmButtonColor: '#d33'
            });
            console.log(error)
        })
       }
    }
    console.log(buyer)


//hacer render condicional si el usuario ya completó el formulario o no
//sino existe renderizarle el formulario de compra
//tiene que existir una coleccion nueva en firebase que se llame orders
//en el then borrar el carrito llamar a clear de conexto, tengo que validad que la persona
// haya completado el formulario y si no, mostrarle un mensaje de error
    // Estado para almacenar el ID de la orden
    return (
   <>
   {
    orderId 
        ?  <div>
            <h2>Generaste correctamente tu orden!</h2>
            <h2>El id es:{orderId}</h2>
             
            <Link to='/' className='btn btn-dark'>Volver a Home!</Link>
           </div>
        
        : <div>
       <h1>Completa con tus datos</h1> 
       <form onSubmit={finalizarCompra}>
        <input className='form-control' placeholder='Complete con su nombre completo' type="text" name='name' onChange={buyerData}/>
        <input className='form-control' type="text" placeholder='Complete con su direccion de envio' name='address' onChange={buyerData}/>
        <input className='form-control' type="email" placeholder='Complete con su correo' name='email' onChange={buyerData} />
        <input className='form-control' type="email" placeholder='Repita su correo' name='email2' onChange={(e)=> setValidateEmail(e.target.value)}/>
        <button className='btn btn-success' type='submit'>Finalizar Compra</button>
       </form>
    </div>
   }
   </>
  )
}

export default Checkout
