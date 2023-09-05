import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { position, ring } from '@chakra-ui/react';

function Footer() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container style={{ height: '120px', marginLeft:'10px', position:'relative'}}>
          <Nav>
            <Nav.Link>
              <Link to={`/`} className="noUnderline">
                AngaStore.com
              </Link>
            </Nav.Link>
            
            <Nav.Link>
                Copyright 2023
            </Nav.Link>

            <Nav.Link>
                  Omar Manias Presidente
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;


