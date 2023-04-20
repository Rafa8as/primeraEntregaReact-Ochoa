import { Link } from "react-router-dom"

import { memo } from "react"
import './Item.css'

const Item = memo(({ producto }) => {
  const iva = 1.21

  return (
    
    <div className="cards">
    <img src={producto.foto} alt="img producto" className="img-fluid" />
    <p className="titleProds">{producto.name}</p>
    <p className="price">${producto.price * iva}</p>
    <Link to={`/detalle/${producto.id}`} className="btnMoreDetails">Comprar</Link>
</div>
   
  )
})

export default Item



