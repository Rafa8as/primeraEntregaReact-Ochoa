import { useState, useEffect } from "react"
import { gFetch } from "../../Utils/gFetch"

import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

export const ComponenteContainer = ({saludos} ) => {
  const [productos,setProductos] = useState ([])
  const [loading,setLoading] = useState (true)
  useEffect (() => {
    gFetch ()
    .then (resp =>setProductos (resp))
    .catch (err => console.log (err))
    .finally ( ()=> setLoading (false))

  }, [])
 
  return (
    <>
    <h2>{saludos} </h2>
    { loading ?
    <h2>Cargando..</h2> 
    :
    <div>
    {productos.map (producto =>
       <div key= {producto.id} className="card w-50">
<div className="card-header"> Nombre : {producto.name}</div>
<div className="card-body">
  <img className="w-100" src={producto.foto} />
  <br /> 
  <label> Categoria: {producto.categoria}</label>
  <label> Precio: {producto.price}</label>
  <label> Stock: {producto.stock}</label>
  
</div>
<div className="card footer">
  <button className="btn btn-outline-dark w-100 ">Detalle </button>
</div>
    </div>)}
    </div>
    }
    </>
  )
}
/*
  const [count,setCount]= useState (0){
  if (condition){setTimeout (()=>res (productos))}
   const [bouleano,setBouleano] = useState (0)
     /*let count = 0*/
    
/*
    console.log (count)
  const handleCount = () => {
    setCount (count + 1) 
  }

  return (
    <div>
          <Titulo titulo= 'Ecommerce Supermercado' subtitulo= 'Ofertas' />
    <p>{saludo}</p>
    <section>
      <label>click: {}</label>
      <label>cantidad: {count}</label>
      <button onClick={handleCount}> Click</button>
    </section>
   <Formulario />
    </div>
  )

*/
export default ComponenteContainer