import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Preguntas from "../Preguntas/Preguntas";


function ColorSchemesExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar" className="sticky-top">
        <Container>
        <Link to='/'> Supermercadito</Link> 
          
          <Nav className="me-auto" id="navbarnav">
            
            <NavLink className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/Almacen'id="navlink">Almacen</NavLink>
            <NavLink className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/Lacteos'id="navlink">Lacteos y Carnes</NavLink>
            <NavLink className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='./Preguntas'id="navlink" > Preguntas</NavLink>
            <nav>
         
            </nav>
            <nav>
           
             
            <Link to='/cart' id="navlink"> <CartWidget /></Link> 
            </nav>
            {/*<Nav.Link  eventKey={2}> 
           
            </Nav.Link>*/}
            
          </Nav>
        </Container>
      </Navbar>
     

     </>
  );
}

export default ColorSchemesExample;

      
