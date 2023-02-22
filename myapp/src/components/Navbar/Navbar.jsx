import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Supermercadito</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Almacen</Nav.Link>
            <Nav.Link href="#pricing">Lacteos</Nav.Link>
            <Nav.Link href="#pricing">Carnes</Nav.Link>
            <Nav.Link  eventKey={2}> <CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

     </>
  );
}

export default ColorSchemesExample;

      
