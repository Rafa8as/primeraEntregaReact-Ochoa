
import Titulo from "../Titulo/Titulo"
const Formulario = () => {


  const handleOnchange = (evet) => {
    setDataForm ({
      ...dataForm,
      [evet.target.name]: evet.target.value
    })
  }
  return (

    <section style={{ background: '#68B984' }}>
      <Titulo titulo='Formulario' subtitulo='Complete el siguiente campo' />

      <form  className="Form-group" onSubmit={generarOrden}>
        <input className="form- control"
       
          type="text"
          name="name"
          placeholder='Ingrese su nombre'
          onChange={handleOnchange}
       
          required
          value = {dataForm.name}
           />

        <input className="form- control"
          
          type="text"
          name="phone"
          placeholder='Ingrese su Numero de telefono'
          onChange={handleOnchange}
          required 
          value = {dataForm.phone}
          />

        <input className="form- control"
          
          type="text"
          name="email"
          placeholder='Ingrese su Email'
          onChange={handleOnchange}
          required
          value = {dataForm.email}
           />

        <input className="form- control"
          
          type="text"
          name="Validad Email"
          placeholder='validar el mail'
          onChange={handleOnchange}
          required
          value = {dataForm.validarEmail} 
          />


      </form>
    </section>


  )
  }


export default Formulario