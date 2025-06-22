import { useEffect, useState } from "react"
// import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import '../css/TextoBrillante.css' 
import LoaderComponent from "./LoaderComponent"
import {db} from '../service/firebase'
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = ({greeting})=>{
    const [data, setData]= useState([])
    const { categoryId, seleccionadosId, otrosId } = useParams();
    const [loading, setLoading]= useState(false)
    console.log(categoryId)
    //empezamos a utilizar firebase
     useEffect(() => {
        setLoading(true);
        //pedir a firebase los productos
        //conectarnos con nuestra colección de productos
        // const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
         // Determina el filtro a aplicar
        let productsCollection = collection(db, "productos");
        if (categoryId) {
            productsCollection = query(productsCollection, where("category", "==", categoryId));
        } else if (seleccionadosId) {
            productsCollection = query(productsCollection, where("seleccionados", "==", seleccionadosId));
        } else if (otrosId) {
            productsCollection = query(productsCollection, where("otros", "==", otrosId));
        }
        //pedir a firebase los productos (documentos)
        getDocs(productsCollection)
        //getdoc devuelve una promesa, lo tratamos con then y devuelve un array de productos
        .then((res) => {
            //limpiar los datos
            const list = res.docs.map((doc)=> {
                
            //mapear los datos para obtener el id y los datos del producto
                return {
                    ...doc.data(),
                    id:doc.id
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId, seleccionadosId, otrosId])
    /* useEffect(() => {
        setLoading(true);
        getProducts()
            .then((respuesta) => {
                if (categoryId) {
                    // Filtrar por categoría
                    setData(respuesta.filter((prod) => prod.category === categoryId));
                    console.log('paso por aca con filtro de categoría');
                } else if (seleccionadosId) {
                    // Filtrar por seleccionados
                    setData(respuesta.filter((prod) => prod.seleccionados === seleccionadosId));
                    console.log('paso por aca con filtro de seleccionados');
                } else if (otrosId) {
                    // Filtrar por seleccionados
                    setData(respuesta.filter((prod) => prod.otros === otrosId));
                    console.log('paso por aca con filtro de otros');
                } else {
                    // No filtrar
                    setData(respuesta);
                    console.log('paso por aca sin filtro');
                }
            })
            .catch((error) => console.error(error))
             //console.log('paso por aca finally')
            .finally(()=> setLoading(false))
    }, [categoryId, seleccionadosId, otrosId]) */

    //solo se hace una sola vez, insertar los productos desde firebase
    //tomo de mi mock, borro los id y el producto que ya dubí
   /*  const subirData = () =>{
         console.log('Subiendo prods...')
         const prodCollectionToAdd = collection(db, "productos")
         products.map((item)=> addDoc(prodCollectionToAdd, item))
     }*/
        //subir los productos a firebase

       
    return (
        <>
        
            {loading 
            ?   <LoaderComponent /> 
            :  
            (
            <>
            {/* <button onClick={subirData}>Subir DATA</button>  */}
                <div className="texto-brillante">
                     
                    <h1>{greeting}{(categoryId || seleccionadosId || otrosId) && <span style={{textTransform:'capitalize'}}>{categoryId || seleccionadosId || otrosId}</span>}</h1>
                </div>
                <div>
                    <ItemList data={data} />
                </div>
            </>
            )
         }
        </>
    
    );
}
export default ItemListContainer
