import React from 'react';
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';
import CardFooter from 'react-bootstrap/CardFooter';

const Footer = () => {
  return (
    <>
      <CardFooter className="bg-dark text-light">
        <Container className="py-5">
          <Row>
            <Col lg={6} className="mb-4">
              <div className="mb-3">
                <h4>VALSCO NGO</h4>
                <p>
                  Valsco Ngo is dedicated to transforming lives through various initiatives. Connect with us on social media to stay updated on our latest projects and events.
                </p>
                <NavDropdown title="Follow Us" id="basic-nav-dropdown" className='ms-auto' >
                  <NavDropdown.Item href="/">
                    <img
                      alt="Instagram"
                      src="https://imgs.search.brave.com/2h-NuEcS2uSMOFCQSE3xDEG0SPq2f1oci7FQsVDkkDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnN0YWdy/YW0vSW5zdGFncmFt/LUdseXBoLUJsYWNr/LUxvZ28ud2luZS5z/dmc.svg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />
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
              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Our Projects</h5>
                <p>Explore the impactful projects we're working on to make a difference in the community.</p>
              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Get Involved</h5>
                <p>Learn how you can get involved in our initiatives as a volunteer or donor.</p>
              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Contact Us</h5>
                <p>Reach out to us for inquiries or collaboration opportunities.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </CardFooter>

      <CardFooter className='bg-light d-flex justify-content-center align-items-center' style={{ height: "40px" }}>
        <h6 style={{ margin: '0' }}>
          Copyright © 2023 Valsco Ngo .
        </h6>
      </CardFooter>
    </>
  );
};

export default Footer;
