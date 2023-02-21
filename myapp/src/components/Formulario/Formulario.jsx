
import Titulo from "../Titulo/Titulo"
const Formulario = () => {
  return (
    
    <section style={{background : '#68B984'}}>
      <Titulo titulo= 'Formulario' subtitulo= 'Complete el siguiente campo' />

      <form ><input style={{background : '#E6E2C3'}} type="text" placeholder='Ingrese su nombre' /></form>
    </section>
    
    
  )
}

export default Formulario