import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import Preguntas from "../Preguntas/Preguntas";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


function ColorSchemesExample() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar" className="sticky-top">
        <Container>
        <NavLink to='/categoria/home'> Supermercadito</NavLink> 
        <div>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="me-auto" id="navbarnav">
                        
                        <NavLink to='/categoria/Almacen' id="navlink">Almacen</NavLink>
                        <NavLink to='/categoria/Lacteos' id="navlink">Lacteos</NavLink>
                        <NavLink to='/Preguntas' id="navlink"> Preguntas</NavLink>
                    </Nav>
                </NavbarCollapse>
          </div>
            <div> 
            <NavLink to='/cart' id="navlink"> <CartWidget /></NavLink> 
            </div>
            
         
        </Container>
      </Navbar>
     

     </>
  );
}

export default ColorSchemesExample;

      
