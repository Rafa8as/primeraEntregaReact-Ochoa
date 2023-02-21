
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ComponenteContainer from './components/ComponenteContainer/ComponenteContainer'
import CartWidget from './components/CartWidget/CartWidget'




function App() {
 

  return (
    <div style={{background : '#F1F6F5'}} >
    <Navbar /> 
  
    
    
    <ComponenteContainer saludos= 'Bienvenidos a Supermercadito' >
      <Navbar />
      <Navbar />
      </ComponenteContainer>


  
    </div>
    
  )
}

export default App
