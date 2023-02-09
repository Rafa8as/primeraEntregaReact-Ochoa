import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"


const ComponenteContainer = ({saludo}) => {
   
    let count = 0
    
  return (
    <div>
          <Titulo titulo= 'Ecommerce Supermercado' subtitulo= 'Ofertas' />
    <p>{saludo}</p>
    <section>
      <label>click: {count}</label>
    </section>
   <Formulario />
    </div>
  )
}

export default ComponenteContainer