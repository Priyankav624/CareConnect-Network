import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  
  return (
    <>
      <Navbar bg="transparent" data-bs-theme="white">
        <Container>
          <Navbar.Brand as={Link} to="/"  className='d-flex justify-content-end align-items-center' >
          <img
              alt="logo"
              src="https://th.bing.com/th/id/OIP.XwYFe07ZN-pBCkhp9jYIIgHaHa?pid=ImgDet&rs=1"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Non 
          </Navbar.Brand>
            <NavDropdown title=" Follow Us" id="basic-nav-dropdown" className="ms-auto">
              <NavDropdown.Item href="/">
                <img
                  alt="Instagram"
                  src="https://imgs.search.brave.com/2h-NuEcS2uSMOFCQSE3xDEG0SPq2f1oci7FQsVDkkDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnN0YWdy/YW0vSW5zdGFncmFt/LUdseXBoLUJsYWNr/LUxvZ28ud2luZS5z/dmc.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <img
                  alt="FaceBook"
                  src="https://imgs.search.brave.com/kaecgXGxskzEoBDlpzKOVZOH690C9K7lQ7MfsG3I2Vk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9GYWNlYm9v/ay9GYWNlYm9vay1m/X0xvZ28tQmxhY2st/TG9nby53aW5lLnN2/Zw.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <img
                  alt="Twitter"
                  src="https://imgs.search.brave.com/ziHbylAtJ5uQ92s3qGKm7OlxRnyN9Whcy5ImsdgHMVA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS90d2l0dGVy/LXNxdWFyZS1pY29u/LnN2Zw.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  />{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                <img
                  alt="Linked In"
                  src="https://imgs.search.brave.com/NEJ5KMm2yHFypxpuVZiu_TUC2Vz43URYudu2k3v7HBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW5rZWRJ/bi9MaW5rZWRJbi1J/Y29uLUJsYWNrLUxv/Z28ud2luZS5zdmc.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
              />{' '}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav>
              <Nav as={Link} to="/contact" >
                <img
                  alt="Call"
                  src="https://imgs.search.brave.com/162cWViyJpxJ_u1VZUH_gBet0dXrA2tFNxtuLkDNHfg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy81MjM2L3Bo/b25lLWNhbGwuc3Zn.svg"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{' '}
              </Nav>
              <Nav as={Link} to="/events">
                <img
                  alt="Mail"
                  src="https://logodix.com/logo/1072537.png"
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />{' '}
              </Nav>
            </Nav>
        </Container>
      </Navbar>

      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" bg-body-transparent mb-3" >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='ms-auto'/>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  NGO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/events">Events</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog/News</Nav.Link>
                  <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  

  );
};

export default NavBar;
