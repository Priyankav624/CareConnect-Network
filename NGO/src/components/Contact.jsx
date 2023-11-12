import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const position = [37.7749, -122.4194];

  return (
    <Container fluid style={{ marginBottom: '90px' }}>
      <Row className="align-items-center">
        <Col xs={12} lg={6}>
          <Card className="h-100">
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Volunteer</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={6} className="p-0">
          <img
            src="https://www.akshayapatra.org/wp-content/themes/akshay-patra/himage/milestones/2009.jpg"
            alt="NGO"
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderBottomLeftRadius:"70px"}}
          />
        </Col>
      </Row>
      <div className="bg-light" style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* First Card */}
      <Card style={{ width: '200px', height: '200px' }} className="m-2">
        <Card.Img variant="top" src="your_first_image_url.jpg" style={{ objectFit: 'cover', height: '100%' }} />
        <Card.Body>
          <Card.Title>Card Title 1</Card.Title>
          <Button variant="primary">Click me</Button>
        </Card.Body>
      </Card>

      {/* Second Card */}
      <Card style={{ width: '200px', height: '200px' }} className="m-2">
        <Card.Img variant="top" src="your_second_image_url.jpg" style={{ objectFit: 'cover', height: '100%' }} />
        <Card.Body>
          <Card.Title>Card Title 2</Card.Title>
          <Button variant="primary">Click me</Button>
        </Card.Body>
      </Card>
    </div>

      <Container className='text-center' style={{ marginTop: '90px',marginBottom: '90px' }}>
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, please fill out the form below:</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Container>
        
        <Container className='text-center'>
          <h2>NGO Contact Details</h2>
          <p>Reach out to us using the following contact information:</p>
          <p>Email: info@example.org</p>
          <p>Phone: +123 456 7890</p>
          <div style={{ height: '300px', width: '100%', marginTop: '20px' }}>
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Your NGO's Location</Popup>
              </Marker>
            </MapContainer>
          </div>
          </Container>
    </Container>
  );
};

export default Contact;
