import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return (
  <nav className='App' style={{ background: '#FED049'} }>
        <label>Supermercadito
            <a href="_blank" target= "_blank"></a>
        </label>
        <p>Asado</p>
        <p>Gaseosa</p>
        <p>Cerveza</p>
        <p>Leche</p>
        <p>Manteca</p>
        <p>Yerba</p>
        <CartWidget />
      </nav>
       
    )
  
  }
  

export default Navbar