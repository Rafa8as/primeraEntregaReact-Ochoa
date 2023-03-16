import 'bootstrap/dist/css/bootstrap.min.css'
/*import './App.css'*/
import Navbar from './components/Navbar/Navbar'
import ComponenteContainer from './components/ComponenteContainer/ComponenteContainer'
import CartWidget from './components/CartWidget/CartWidget'
import { NavbarBrand } from 'react-bootstrap'
import ColorSchemesExample from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'




function App() {
 

  return (
    <CartContextProvider>
    <BrowserRouter>
       
         
         <ColorSchemesExample/> 
        

          <Routes>
                    
              
                  <Route path='/' element ={<ComponenteContainer saludos= 'Bienvenidos a Supermercadito' />} />
                  <Route path='/categoria/Home' element ={<ComponenteContainer/>} />
                  <Route path='/categoria/:idCategoria' element ={<ComponenteContainer/>} />
                  <Route path='/detalle/:idProducto' element ={<ItemDetailContainer/>} />

                  <Route path='/cart' element ={<CartWidget />} />
                  <Route path='*' element ={<Navigate to='/' />} />
          </Routes>
                  
          <ItemCount initial={1} stock= {10} onAdd={()=>{}}/>
                
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App


/* <ComponenteContainer saludos= 'Bienvenidos a Supermercadito' >
                       
                  </ComponenteContainer>
                  
               */