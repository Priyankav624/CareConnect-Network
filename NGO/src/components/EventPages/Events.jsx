import React, { useEffect, useState, useContext } from 'react';
import { getWishlist, toggleWishlist, isInWishlist } from '../../utils/wishlistUtils';

import {
  Container, Row, Button, ButtonGroup, Pagination,
  Modal, Form, Col
} from 'react-bootstrap';
import EventsCard from './EventsCard';
import Donation from '../HomePages/Donation';
import eventsData from '../../data/events.json';
import { ToastContext } from '../../context/ToastContext';
import { AuthContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

const Events = () => {
  const { user } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [category, setCategory] = useState('All');
  const [month, setMonth] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => setEvents(eventsData), []);
  useEffect(() => filterEvents(), [events, category, month, timeFilter]);
  useEffect(() => {
    if (user) {
      setForm(prev => ({ ...prev, name: user.name, email: user.email }));
    }
  }, [user]);

  const filterEvents = () => {
    let fe = [...events];
    if (category !== 'All') fe = fe.filter(e => e.category === category);
    if (month !== 'All') fe = fe.filter(e => e.date.split('-')[1] === (month === 'August' ? '08' : '09'));
    if (timeFilter !== 'All') fe = fe.filter(e => {
      const hour = +e.time.split(':')[0];
      return (timeFilter === 'Morning' && hour < 12) ||
             (timeFilter === 'Afternoon' && hour >= 12 && hour < 17) ||
             (timeFilter === 'Evening' && hour >= 17);
    });
    setFilteredEvents(fe);
    setCurrentPage(1);
  };

  const isRegistered = (id) => {
    const regs = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    return regs.some(r => r.email === user?.email && r.eventId === id);
  };

  const handleRegister = (event) => {
    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/events");
      return navigate('/login');
    }
    setSelectedEvent(event);
    setForm({
      name: user.name,
      email: user.email,
      phone: '',
      message: ''
    });
    setErrors({});
    setShowModal(true);
  };

  const validate = () => {
    const e = {};
    if (!form.phone.match(/^[0-9]{7,}$/)) e.phone = 'Invalid phone number';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    const regs = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    regs.push({ eventId: selectedEvent.id, ...form });
    localStorage.setItem('eventRegistrations', JSON.stringify(regs));
    setToast({ show: true, message: `✅ Registered for "${selectedEvent.title}"` });
    setShowModal(false);
  };

  const eventsPerPage = 9;
  const indexLast = currentPage * eventsPerPage;
  const current = filteredEvents.slice(indexLast - eventsPerPage, indexLast);
  const pages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
        <Button variant="secondary" onClick={() => {
          setCategory('All'); setMonth('All'); setTimeFilter('All');
        }}>
          Reset Filters
        </Button>
      </div>

      <div className="d-flex flex-column flex-md-row gap-3 mb-4 justify-content-center align-items-center">
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {['All', ...new Set(events.map(e => e.category))].map(c => (
          <Button key={c} variant={category === c ? 'dark' : 'outline-dark'} size="sm" onClick={() => setCategory(c)}>
            {c}
          </Button>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {['All', 'August', 'September'].map(m => (
          <Button key={m} variant={month === m ? 'dark' : 'outline-dark'} size="sm" onClick={() => setMonth(m)}>
            {m}
          </Button>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {['All', 'Morning', 'Afternoon', 'Evening'].map(t => (
          <Button key={t} variant={timeFilter === t ? 'dark' : 'outline-dark'} size="sm" onClick={() => setTimeFilter(t)}>
            {t}
          </Button>
        ))}
      </div>
    </div>

      

      <Row xs={1} md={2} lg={3} className="g-4">
        {current.map(e => {
          const wishlisted = isInWishlist(e.id);

          return (
            <EventsCard
              key={e.id}
              {...e}
              isWishlisted={wishlisted}
              onWishlistClick={() => {
                toggleWishlist(e.id);
                setToast({
                  show: true,
                  message: !wishlisted
                    ? `❤️ Added "${e.title}" to wishlist`
                    : `❌ Removed "${e.title}" from wishlist`
                });
                // Force re-render
                setEvents([...events]);
              }}
            >
              {isRegistered(e.id) ? (
                <Button variant="secondary" size="sm" disabled>Registered</Button>
              ) : (
                <Button variant="success" size="sm" onClick={() => handleRegister(e)}>
                  Register
                </Button>
              )}
            </EventsCard>
          );
        })}
      </Row>


      {pages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} />
            {[...Array(pages)].map((_, i) => (
              <Pagination.Item key={i + 1} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === pages} />
            <Pagination.Last onClick={() => setCurrentPage(pages)} disabled={currentPage === pages} />
          </Pagination>
        </div>
      )}

      {/* Registration Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Register for {selectedEvent?.title}</Modal.Title></Modal.Header>
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
              <Form.Control isInvalid={errors.phone} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </Form.Group>
            <div className="text-end">
              <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Donation />
    </Container>
  );
};

export default Events;
