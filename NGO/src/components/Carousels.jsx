import React from 'react';
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CarouselSlide = () => {
  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Container className="position-absolute top-0 start-0 end-0">
            <Navbar expand="lg" className="bg-body-black">
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">NGO</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link as={Link} to="/about">
                        About Us
                      </Nav.Link>
                      <Nav.Link as={Link} to="/events">
                        Events
                      </Nav.Link>
                      <Nav.Link as={Link} to="/projects">
                        Projects
                      </Nav.Link>
                      <Nav.Link as={Link} to="/blog">
                        Blog/News
                      </Nav.Link>
                      <Nav.Link as={Link} to="/volunteer">
                        Volunteer
                      </Nav.Link>
                      <Nav.Link as={Link} to="/contact">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Container>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
            alt="First slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h5>“The best way to find yourself is to lose yourself in the service of others.”</h5>
            <p>– Mahatma Gandhi</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Repeat similar modifications for other Carousel.Items */}
        <Carousel.Item>
          <Container className="position-absolute top-0 start-0 end-0">
            <Navbar expand="lg" className="bg-body-black">
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">NGO</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link as={Link} to="/about">
                        About Us
                      </Nav.Link>
                      <Nav.Link as={Link} to="/events">
                        Events
                      </Nav.Link>
                      <Nav.Link as={Link} to="/projects">
                        Projects
                      </Nav.Link>
                      <Nav.Link as={Link} to="/blog">
                        Blog/News
                      </Nav.Link>
                      <Nav.Link as={Link} to="/volunteer">
                        Volunteer
                      </Nav.Link>
                      <Nav.Link as={Link} to="/contact">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Container>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Second slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h5>“Alone, we can do so little; together, we can do so much.”</h5>
            <p>– Helen Keller</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <Container className="position-absolute top-0 start-0 end-0">
            <Navbar expand="lg" className="bg-body-black">
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">NGO</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link as={Link} to="/about">
                        About Us
                      </Nav.Link>
                      <Nav.Link as={Link} to="/events">
                        Events
                      </Nav.Link>
                      <Nav.Link as={Link} to="/projects">
                        Projects
                      </Nav.Link>
                      <Nav.Link as={Link} to="/blog">
                        Blog/News
                      </Nav.Link>
                      <Nav.Link as={Link} to="/volunteer">
                        Volunteer
                      </Nav.Link>
                      <Nav.Link as={Link} to="/contact">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Container>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Third slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h5>“Act as if what you do makes a difference. It does.”</h5>
            <p>– William James</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlide;
