
import Titulo from "../Titulo/Titulo"
const Formulario = () => {
  return (
    
    <section>
      <Titulo titulo= 'Formulario' subtitulo= 'Complete el siguiente campo' />

      <form><input type="text" placeholder='Ingrese su nombre' /></form>
    </section>
    
    
  )
}

export default Formulario