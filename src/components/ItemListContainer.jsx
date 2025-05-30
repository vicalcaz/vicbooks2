import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import '../css/TextoBrillante.css' 

const ItemListContainer = ({greeting})=>{
    const [data, setData]= useState([])
    const { categoryId, seleccionadosId, otrosId } = useParams();
    console.log(categoryId)

    useEffect(() => {
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
            .catch((error) => console.error(error));
    }, [categoryId, seleccionadosId, otrosId]);
    return (
        <>
            <div className="texto-brillante">
                <h1>{greeting}{(categoryId || seleccionadosId || otrosId) && <span style={{textTransform:'capitalize'}}>{categoryId || seleccionadosId || otrosId}</span>}</h1>
            </div>
            <div>
                <ItemList data={data} />
            </div>
        </>
    );
}
export default ItemListContainer

