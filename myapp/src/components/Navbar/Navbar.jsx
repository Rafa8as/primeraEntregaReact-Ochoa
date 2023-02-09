import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return (
  <nav className='App'>
        <label>Supermercadito</label>
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