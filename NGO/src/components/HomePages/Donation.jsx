import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Donation.css';

const Donation = () => {
  return (
    <Container className="donation-section text-center my-5">
      <Card className="bg-light p-4 shadow-sm border-0 rounded-4">
        <h2 className="mb-4 fw-bold">Empower Positive Change</h2>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <div className="donation-image-wrapper">
              <Card.Img
                src="https://plus.unsplash.com/premium_photo-1683134563505-cc5d4f20a22a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Donation impact"
                className="img-fluid rounded donation-img"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Card.Body>
              <p className="lead text-muted mb-4" style={{fontWeight:"bold"}}>
                Your generosity fuels our mission. Every donation you make becomes a stepping stone
                for someone’s brighter future. Let’s build it together.
              </p>
              <Nav.Link as={Link} to="/volunteer">
                <Button variant="success" size="lg" className="donate-btn">
                  Donate Now
                </Button>
              </Nav.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Donation;
