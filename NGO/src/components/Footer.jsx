import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-5">
        <Row>
          <Col lg={6} className="mb-4">
            <div className="mb-3">
              <h4>Main Content</h4>
              <p>This is the main content of the big box in the footer.</p>
            </div>
           
            <div className="d-flex justify-content-start">
              {[1, 2, 3, 4].map((imageNumber) => (
                <img
                  key={imageNumber}
                  src={`https://via.placeholder.com/50x50?text=Image${imageNumber}`}
                  alt={`Image ${imageNumber}`}
                  rounded
                />
              ))}
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
    </footer>
  );
};

export default Footer;
