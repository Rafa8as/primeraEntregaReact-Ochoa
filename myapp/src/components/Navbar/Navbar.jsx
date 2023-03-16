import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to='/'> Supermercadito</Link> 
          
          <Nav className="me-auto">
            <Nav.Link className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/'>Home</Nav.Link>
            <Nav.Link className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/Almacen'>Almacen</Nav.Link>
            <Nav.Link className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/Lacteos'>Lacteos</Nav.Link>
            <Nav.Link className={({isActive}) =>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/Carnes'>Carnes</Nav.Link>
            <nav>
            <Link to='/cart' className="btn btn-primary"> <CartWidget /></Link> 
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

      
