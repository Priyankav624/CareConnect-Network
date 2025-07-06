// src/components/EventRegisterModal.js
import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../App';
import { ToastContext } from '../../context/ToastContext';

const EventRegisterModal = ({ show, onHide, event }) => {
  const { user } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user && event) {
      setForm({
        name: user.name || '',
        email: user.email || '',
        phone: '',
        message: '',
      });
    }
  }, [user, event]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = 'Invalid email';
    if (!form.phone.match(/^[0-9]{7,}$/)) e.phone = 'Invalid phone';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    const registrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    registrations.push({ eventId: event.id, ...form });
    localStorage.setItem('eventRegistrations', JSON.stringify(registrations));
    setToast({ show: true, message: `✅ Registered for "${event.title}"` });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton><Modal.Title>Register for {event?.title}</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control value={form.name} readOnly />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control value={form.email} readOnly />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Phone*</Form.Label>
            <Form.Control
              isInvalid={errors.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EventRegisterModal;
