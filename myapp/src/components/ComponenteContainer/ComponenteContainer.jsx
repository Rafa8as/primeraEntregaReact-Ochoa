import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../Utils/gFetch"

import Formulario from "../Form/Form"
import ItemList from "../ItemList/ItemList"
import Titulo from "../Titulo/Titulo"

export const ComponenteContainer = ({ saludos }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then(resp => setProductos(resp.filter(producto => producto.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))


    } else {
      gFetch()
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))


    }

  }, [idCategoria])

  return (
    <>
      <h2>{saludos} </h2>
      {loading ?
        <h2>Cargando..</h2>
        :
        
        <ItemList productos={productos}/>
        
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