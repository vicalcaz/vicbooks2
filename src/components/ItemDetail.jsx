import React from 'react'
import ItemCount from './ItemCount'
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} del item ${detalle.name}`)
  }
  return (
    <div className="carddetail">
    <h2>{detalle.name}</h2>
    <img src={detalle.img} alt={detalle.name} className="item-image" />
    <p>{detalle.description}</p>
    <p>${detalle.price}</p>
    <p>Stock: {detalle.stock} unidades</p>
    <ItemCount stock={detalle.stock} onAdd={onAdd} />
  </div>
  )
}

export default ItemDetail