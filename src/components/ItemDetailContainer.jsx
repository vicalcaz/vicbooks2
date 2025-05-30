import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const {itemId} = useParams()
   
    //usando la promesa que usamos en itemlistcontainer
     /*useEffect(()=>{
         getProducts()
         // .then((respuesta)=> setDetalle(respuesta[1]))
         .then((response)=> setDetalle(response.find((item)=> item.id === '03')))
         .catch((error)=> console.log(error))
     },[])*/

        useEffect(()=>{
        getOneProduct(itemId)
        .then((response)=> setDetalle(response))
        .catch((error)=> console.log(error))
    },[itemId])

  return (
    <div>
        <ItemDetail detalle={detalle} />
    </div>
  )
}

export default ItemDetailContainer