import React, { use, useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import MDSpinner from "react-md-spinner";
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
    const [invalid, setInvalid]= useState(false)
    const {itemId} = useParams()
  //firebase
  
  useEffect(() => { 
    setCargando(true)
    //conectamos con nuestra colección de productos
    const productsCollection = collection(db, "productos");
    //pedimos a firebase los productos

    const docRef = doc (productsCollection, itemId);
    //VERSION CORTA
    // const docRef= doc(db, "productos", itemId)
    //traer un documento

    //traer un documento específico
     getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetalle({...res.data(), id:res.id})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
  },[])

    //usando la promesa que usamos en itemlistcontainer
     /*useEffect(()=>{
         getProducts()
         // .then((respuesta)=> setDetalle(respuesta[1]))
         .then((response)=> setDetalle(response.find((item)=> item.id === '03')))
         .catch((error)=> console.log(error))
     },[])*/

/*        useEffect(()=>{
        getOneProduct(itemId)
        .then((response)=> setDetalle(response))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false));
    },[itemId])

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <MDSpinner size={50} />
  
        </div>
      ) : (
        <ItemDetail detalle={detalle} />
      )}

  
    </div>
  )
}
*/
    if(invalid){
      return(
        <div>
          <h2>El producto no existe! 😅</h2>
          <Link className='btn btn-dark'>Volver a Home</Link>
        </div>
      )
    }
  return (
    <div>
       {
       cargando 
       ? <LoaderComponent/>
       :  <ItemDetail detalle={detalle} />
      }
    </div>
  )
}

export default ItemDetailContainer