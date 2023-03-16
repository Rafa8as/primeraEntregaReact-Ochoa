import { Link } from "react-router-dom"

import { memo } from "react"

const Item = memo (({producto}) => {

  return (
    <div key={producto.id} className="card w-250 mt-3">
    <div className="card-header"> Nombre : {producto.name}</div>
    <div className="card-body">
        <img className="w-100" src={producto.foto} />
        <br />
        <label> Categoria: {producto.categoria}</label>
        <label> Precio: {producto.price}</label>
        <label> Stock: {producto.stock}</label>

    </div>
    <div className="card-footer">
        <Link to={`/detalle/${producto.id}`}>
            <button className="btn btn-outline-dark w-100 ">Detalle </button>
        </Link>
    </div>
</div>
  )
})

export default Item

