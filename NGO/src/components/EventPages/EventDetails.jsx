import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import eventsData from '../../data/events.json';
import { AuthContext } from '../../App';
import EventRegisterModal from './EventRegisterModal';

const EventDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find(e => e.id === +id);
  const [show, setShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (user && event) {
      const regs = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
      const exists = regs.some(r => r.email === user.email && r.eventId === event.id);
      setIsRegistered(exists);
    }
  }, [user, event, show]);

  const handleLoginRedirect = () => {
    localStorage.setItem('redirectAfterLogin', `/event/${id}`);
    navigate('/login');
  };

  if (!event) {
    return (
      <Container className="py-5">
        <h2>Event not found</h2>
        <Link to="/events">
          <Button variant="outline-dark" className="mt-3">Back to Events</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow-sm p-4 mb-4" style={{ borderRadius: 12 }}>
        <Card.Body>
          <Card.Title as="h2">{event.title}</Card.Title>
          <Row>
            <Col><strong>Date:</strong> {event.date}</Col>
            <Col><strong>Time:</strong> {event.time}</Col>
          </Row>
          <p><strong>Category:</strong> {event.category}</p>
          <p className="text-secondary">{event.description}</p>

          <div className="mt-3">
            {user ? (
              isRegistered ? (
                <Button variant="secondary" disabled>Already Registered</Button>
              ) : (
                <Button variant="success" onClick={() => setShow(true)}>Register Now</Button>
              )
            ) : (
              <Button variant="success" onClick={handleLoginRedirect}>Login to Register</Button>
            )}
            <Link to="/events">
              <Button variant="outline-dark" className="ms-2">Back</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      {/* Modal (shared component) */}
      <EventRegisterModal show={show} onHide={() => setShow(false)} event={event} />
    </Container>
  );
};

export default EventDetails;
