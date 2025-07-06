import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ToastContext } from '../../context/ToastContext';

const Contact = () => {
  const { setToast } = useContext(ToastContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const position = [37.7749, -122.4194];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    setToast({ show: true, message: 'Message submitted successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container fluid className="mb-5">
      <Container className="text-center my-5">
        <h2 className="mb-3">Contact Us</h2>
        <p>If you have any questions or inquiries, please fill out the form below:</p>
        <Form onSubmit={handleSubmit} className="mx-auto mt-4" style={{ maxWidth: '600px' }}>
          <Form.Group controlId="name" className="mb-3 text-start">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3 text-start">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email address"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="message" className="mb-3 text-start">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="primary" className="px-4">
              Submit
            </Button>
          </div>
        </Form>
      </Container>

      <Container className="text-center">
        <h2 className="mb-3">NGO Contact Details</h2>
        <p>Reach out to us using the following contact information:</p>
        <p><strong>Email:</strong> info@example.org</p>
        <p><strong>Phone:</strong> +123 456 7890</p>

        <div className="mt-4 rounded overflow-hidden shadow" style={{ height: '300px', width: '100%' }}>
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
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
