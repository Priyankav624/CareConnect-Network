import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import eventsData from '../../data/events.json';
import { AuthContext } from '../../App';
import { ToastContext } from '../../context/ToastContext';

const RegisteredEvents = () => {
  const { user } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const [regs, setRegs] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    setRegs(all.filter(r => r.email === user?.email));
  }, [user]);

  const handleDelete = (eventId) => {
    const updated = JSON.parse(localStorage.getItem('eventRegistrations') || '[]')
      .filter(r => !(r.email === user.email && r.eventId === eventId));
    localStorage.setItem('eventRegistrations', JSON.stringify(updated));
    setRegs(updated.filter(r => r.email === user.email));
    setToast({ show: true, message: 'Registration deleted' });
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Registered Events</h2>
      {regs.length === 0 ? (
        <p className="text-muted">You haven’t registered yet.</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {regs.map((r, idx) => {
            const ev = eventsData.find(e => e.id === r.eventId);
            return (
              <Col key={idx}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{ev.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      📅 {ev.date} &nbsp;|&nbsp; 🕒 {ev.time}
                    </Card.Subtitle>
                    <Card.Text><strong>Phone:</strong> {r.phone}</Card.Text>
                    {r.message && <Card.Text><strong>Message:</strong> {r.message}</Card.Text>}
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(ev.id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default RegisteredEvents;
