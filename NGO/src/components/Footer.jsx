import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footerr from "react-bootstrap/CardFooter"

const Footer = () => {
  return (
    <>
      <Footerr className="bg-dark text-light">
        <Container className="py-5">
          <Row>
            <Col lg={6} className="mb-4">
              <div className="mb-3">
                <h4>Main Content</h4>
                <p>This is the main content of the big box in the footer.</p>
              </div>
            
              <div className="d-flex justify-content-start">

              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Box 1</h5>
                <p>Content for Box 1.</p>
              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Box 2</h5>
                <p>Content for Box 2.</p>
              </div>
            </Col>

            <Col lg={2} className="mb-4">
              <div className="mb-3">
                <h5>Box 3</h5>
                <p>Content for Box 3.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Footerr>
      
      <Footerr className='bg-light d-flex justify-content-center align-items-center' style={{ height: "80px" }}>
        <h3 style={{ margin: '0' }}>
          Copyright © 2023 NGO Inc.
        </h3>
      </Footerr>

      
    </>
  );
};

export default Footer;
