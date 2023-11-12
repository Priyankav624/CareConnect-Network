import React, { useState } from 'react';
import { Carousel, Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar expand="lg" className="bg-body-black">
    <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
      <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
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
);

const CarouselSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (e.type === 'click') {
      setActiveIndex(selectedIndex);
    }
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  const carouselItems = [
    {
      caption: '“The best way to find yourself is to lose yourself in the service of others.”',
      author: 'Mahatma Gandhi',
      imageSrc: 'https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      caption: '“Alone, we can do so little; together, we can do so much.”',
      author: 'Helen Keller',
      imageSrc: 'https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      caption: '“Act as if what you do makes a difference. It does.”',
      author: 'William James',
      imageSrc: 'https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7',
    },
  ];

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      data-bs-theme="dark"
      interval={null} // Disable automatic sliding
      keyboard={false} // Disable keyboard controls
      touch={false} // Disable swipe
    >
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} onClick={(e) => e.stopPropagation()}>
          <Container className="position-absolute top-0 start-0 end-0">
            <Navigation />
          </Container>
          <img
            className="d-block w-100 img-fluid"
            src={item.imageSrc}
            alt={`Slide ${index + 1}`}
            style={imageStyle}
          />
          <Carousel.Caption className="position-absolute bottom-0 start-0 end-0">
            <h5>{item.caption}</h5>
            <p>- {item.author}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
