import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const CheckOutUseForm = () => {
    
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear}=useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

    console.log(errors, 'errors')
    const finalizarCompra = (dataDelForm)=>{
        let orden = {
            comprador:{
                name:dataDelForm.name,
                address:dataDelForm.address,
                email:dataDelForm.email
            },
            compras:cart,
            total:cartTotal(),
            date:serverTimestamp()
        }
        const ventas = collection(db, "orders")
        //agregar un doc
        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
       }
    

    
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
       <form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={handleSubmit(finalizarCompra)}>
        <input className='form-control' placeholder='Complete con su nombre completo' type="text" name='name' {...register("name", {required:true, minLength:3})}/>
        {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
         {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre es muy corto</span>}
        <input className='form-control' type="text" placeholder='Complete con su direccion de envio' name='address'{...register("address", {required:true, minLength:10, maxLength:40
        })} />
        {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Dirección</span>}
         {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La dirección minimamente debe contener 10 carecteres</span>}
         {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La dirección es demasiado larga</span>}
        <input className='form-control' type="email" placeholder='Complete con su correo' name='email' {...register("email", {required:true})} />
        {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo</span>}
        <input className='form-control' type="email" placeholder='Repita su correo' name='email2' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
        {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo</span>}
        {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los mails no coinciden</span>}
        <button className='btn btn-success' type='submit'>Finalizar Compra</button>
       </form>
    </div>
   }
   </>
  )
}

export default ChecOutUseForm