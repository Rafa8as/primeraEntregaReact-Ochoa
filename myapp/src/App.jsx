import 'bootstrap/dist/css/bootstrap.min.css'
/*import './App.css'*/
import Navbar from './components/Navbar/Navbar'
import ComponenteContainer from './components/ComponenteContainer/ComponenteContainer'
import CartWidget from './components/CartWidget/CartWidget'
import { NavbarBrand } from 'react-bootstrap'
import ColorSchemesExample from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {
 

  return (
    <BrowserRouter>
         <Navbar />
         <ColorSchemesExample/> 
         

          <Routes>
                    
              <div style={{background : '#F1F6F5'}} >
                  <Route path='/' element ={<ComponenteContainer saludos= 'Bienvenidos a Supermercadito' ></ComponenteContainer>} />
                  <Route path='/ detalle' element ={<ItemDetailContainer/>} />
                  <Route path='/cart ' element ={<CartWidget />} />
                  <ComponenteContainer saludos= 'Bienvenidos a Supermercadito' >
                       
                  </ComponenteContainer>
                  
                  <ItemCount initial={1} stock= {10} onAdd={()=>{}}/>
             </div>
          </Routes>
    </BrowserRouter>
  )
}

export default App
