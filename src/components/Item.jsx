import React from 'react'
import { Link } from 'react-router-dom'
const item = ({prod}) => {
  return (
    <div className="card" style={{width: '10rem', alignSelf:'left', marginTop:70}}>
  <img src={prod.img} className="card-img-top" alt={prod.name} style={{width: '10rem', alignSelf:'center', marginTop:50}}/>
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">${prod.price},00</p>
    <Link to={'/item/'+prod.id} className="btn btn-primary">Ver más</Link> 
    {/* <Link to={`/item/${prod.id}`} className="btn btn-primary">Ver más</Link> */}
  </div>
</div>
  )
}

export default item
