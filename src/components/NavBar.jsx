import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Anga Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#CategoryA">Category A</Nav.Link>
            <Nav.Link href="#CategoryB">Category B</Nav.Link>
            <Nav.Link href="#CategoryC">Category C</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    </>
  );
}

export default NavBar;