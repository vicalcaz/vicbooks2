import React from 'react'
import Item from './item'
import "../css/ItemList.css"

const ItemList = ({data}) => {
  return (
    <div className="item-list">
    {data.map((prod) => <Item key={prod.id} prod={prod} />)}
</div>
  )
}

export default ItemList