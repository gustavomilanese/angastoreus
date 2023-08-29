import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={"/"} className="noUnderline">
            <Navbar.Brand>Anga Store</Navbar.Brand>
          </Link>
          
          <Nav className="me-auto">
            
            <Nav.Link>
              <Link to={`/category/${`cat1`}`} className="noUnderline">
                Set 2 pieces
              </Link>
            </Nav.Link>
            
            <Nav.Link>
              <Link to={`/category/${`cat2`}`} className="noUnderline">
                Top
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={`/category/${`cat3`}`} className="noUnderline">
                Short
              </Link>
            </Nav.Link>

          </Nav>
        </Container>
        <Link to={"/cart"} className="noUnderline">
          <CartWidget/>
        </Link>
      </Navbar>
    </>
  );
}

export default NavBar;


