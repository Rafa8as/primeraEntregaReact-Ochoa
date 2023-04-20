import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ColorSchemesExample from './components/Navbar/Navbar'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Container/CartContainer/CartContainer'
import { CartContextProvider } from './Context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 

  return (
    <CartContextProvider>
    <BrowserRouter>
       
         
         <ColorSchemesExample/> 
        

          <Routes>
                    
              
                  <Route path='/' element ={<ItemListContainer saludos= 'Bienvenidos a Supermercadito' />} />
                  <Route path='/categoria/Home' element ={<ItemListContainer/>} />
                  <Route path='/categoria/:idCategoria' element ={<ItemListContainer/>} />
                  <Route path='/detalle/:idProducto' element ={<ItemDetailContainer/>} />
                  <Route path='/cart' element ={<CartContainer />} />
                 
                  <Route path='*' element ={<Navigate to='/' />} />
          </Routes>
          
                
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App


/* <ComponenteContainer saludos= 'Bienvenidos a Supermercadito' >
                       
                  </ComponenteContainer>
                  
               */