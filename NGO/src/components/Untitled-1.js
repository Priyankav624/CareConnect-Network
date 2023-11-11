import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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

export default CollapsibleExample;