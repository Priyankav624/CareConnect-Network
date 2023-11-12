import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <div className="who-we-are-section text-center" style={{ marginTop: '50px' }}>
        <Container>
          <h2 className="hero-title">Welcome to Valsco NGO</h2>
          <p className="hero-subtitle lead">
            Empowering communities through sustainable initiatives and positive change.
          </p>
        </Container>
      </div>

      <Container className="history-section text-center">
        <h2 className="mb-4" style={{ marginTop: '40px' }}>Our History</h2>
        <Row className="mb-5 justify-content-center align-items-center">
          <Col md={6}>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
              alt="History Image"
            />
          </Col>
          <Col md={6}>
            <p>
              Over the years, Valsco NGO has made significant strides in community development and welfare.
              Guided by the belief that every action, no matter how small, contributes to a brighter future,
              we've steadily grown into a beacon of hope and impact.
            </p>
          </Col>
        </Row>
        <h2 className="mb-4" style={{ marginTop: '50px' }}>Our Mission</h2>
        <Row className="mb-5 justify-content-center align-items-center">
          <Col md={6}>
            <p>
              Valsco NGO's mission is to empower communities through initiatives that foster inclusivity and
              sustainable development. We are committed to upholding the highest standards of integrity,
              ensuring transparency and ethical practices in all our endeavors.
            </p>
          </Col>
          <Col md={6}>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.VGuDJZ6yzZcKVtMtVS6J0gHaD5?w=298&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Mission Image"
            />
          </Col>
        </Row>
      </Container>
      <Container className="card-section text-center" style={{ marginBottom: '70px' }}>
        <Card style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
          <Card.Title className="mb-4">Join Us in Making a Difference</Card.Title>
          <Card.Text>
            Your support enables us to create positive change and build a better future for all.
            Together, we can make a lasting impact on communities and lives.
          </Card.Text>
          <Nav.Link as={Link} to="/volunteer">
                      <Button variant='dark'>Donate Now</Button>
                    </Nav.Link>
        </Card>
      </Container>
    </>
  );
};

export default AboutUs;
