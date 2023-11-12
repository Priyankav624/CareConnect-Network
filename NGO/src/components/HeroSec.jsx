import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroSec = () => {
  return (
    <>
      <Navbar bg="blue" data-bs-theme="white" style={{marginLeft:"15px", marginRight:"15px"}}>
        <Nav as={Link} to="/events">
              <img
                alt="Mail"
                src="https://logodix.com/logo/1072537.png"
                width="20"
                height="20"
                className="d-inline-block align-top"
              />{' '}ngo@gmail.com
            </Nav>
            <Nav className='ms-auto'>
            <Nav as={Link} to="/events">
                <Button>Donate</Button>
            </Nav>
            </Nav>
          
 
      </Navbar>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='text-center'>
        <Nav className=''>
        <Navbar.Brand as={Link} to="/"className="ms-auto">
          <img
            alt="logo"
            src="https://th.bing.com/th/id/OIP.XwYFe07ZN-pBCkhp9jYIIgHaHa?pid=ImgDet&rs=1"
            width="40"
            height="40"
            
          />{' '}
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>VALSCO NGO</span>
        </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center ms-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default HeroSec;
