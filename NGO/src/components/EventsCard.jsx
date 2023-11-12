import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


const EventCard = ({ id,title, description, date, time, registrationLink }) => {
  return (
    <>
      <Link to={`/event/${id}`}>
            <Card style={{ width: '200px', height: '200px' }} className="m-2">
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Date: {date}</Card.Text>
            <Card.Text>Time: {time}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Register</Button>
            </Card.Body>
            </Card>
            </Link>
    </>
  );
};

export default EventCard;

// onClick={() => handleEventClick(id)}