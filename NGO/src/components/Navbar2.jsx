import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar2 = () =>  {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/" className='d-flex justify-content-center align-items-center'>
              <img
                  alt="logo"
                  src="https://th.bing.com/th/id/OIP.XwYFe07ZN-pBCkhp9jYIIgHaHa?pid=ImgDet&rs=1"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                  Non
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/events">Events</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog/News</Nav.Link>
                  <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
                
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;