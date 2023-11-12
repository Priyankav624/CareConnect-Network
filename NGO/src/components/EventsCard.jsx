import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

const EventCard = ({ id, title, description, date, time, registrationLink }) => {
  return (
    <Col md={4} className="mb-4">
      <Link to={`/event/${id}`} className="text-decoration-none">
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Date: {date}</Card.Text>
            <Card.Text>Time: {time}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Register</Button>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default EventCard;
