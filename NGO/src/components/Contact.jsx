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

      <Container className='text-center' style={{ marginTop: '40px',marginBottom: '90px' }}>
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, please fill out the form below:</p>
          <Form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <br />
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Form.Group>
            <br />
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
            </Form.Group>
            <br />
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
