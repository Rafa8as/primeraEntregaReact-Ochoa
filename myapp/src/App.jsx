import 'bootstrap/dist/css/bootstrap.min.css'
/*import './App.css'*/
import Navbar from './components/Navbar/Navbar'
import ComponenteContainer from './components/ComponenteContainer/ComponenteContainer'
import CartWidget from './components/CartWidget/CartWidget'
import { NavbarBrand } from 'react-bootstrap'
import ColorSchemesExample from './components/Navbar/Navbar'




function App() {
 

  return (
    <div style={{background : '#F1F6F5'}} >
    <ColorSchemesExample/> 
  
    
    
    <ComponenteContainer saludos= 'Bienvenidos a Supermercadito' >
      <Navbar />
      <CartWidget />
      </ComponenteContainer>


  
    </div>
    
  )
}

export default App
