import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { getWishlist } from '../../utils/wishlistUtils';
import eventsData from '../../data/events.json';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [profile, setProfile] = useState({ name: '', email: '' });
  const [form, setForm] = useState({ name: '', email: '' });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const [volunteerForms, setVolunteerForms] = useState([]);
  const [allVolunteers, setAllVolunteers] = useState([]);

  useEffect(() => {
    if (!user) return navigate('/login');

    const saved = localStorage.getItem(`profile_${user.email}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setForm(parsed);
    } else {
      setForm({ name: user.name || '', email: user.email });
    }

    const savedForms = JSON.parse(localStorage.getItem('volunteerFeedbacks')) || [];
    const userForms = savedForms.filter(f => f.email === user.email);
    setVolunteerForms(userForms);

    const volunteers = JSON.parse(localStorage.getItem('volunteers')) || [];
    setAllVolunteers(volunteers);
  }, [user, navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    setProfile(form);
    localStorage.setItem(`profile_${user.email}`, JSON.stringify(form));
    alert('Profile updated!');
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setPasswordMsg('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordMsg("Passwords don't match");
      return;
    }
    localStorage.setItem(`password_${user.email}`, password);
    setPasswordMsg('Password updated successfully!');
    setPassword('');
    setConfirmPassword('');
  };

  const registeredEventIds = getWishlist();
  const registeredEvents = eventsData.filter(e => registeredEventIds.includes(e.id));

  return (
    <Container className="py-5 mt-5 mb-5" >
      <h2 className="text-center mb-5 fw-bold">Welcome, {form.name || user.name}</h2>

      <Row className="gy-4">
        {/* Profile Update */}
        <Col xs={12} md={6}>
          <Card className="border-0 shadow-sm h-100" >
            <Card.Body>
              <Card.Title className="mb-4 fs-4 fw-semibold">Update Profile</Card.Title>
              <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    readOnly 
                    plaintext
                    className="bg-light border rounded px-2 py-2"
                  />
                </Form.Group>
                <Button style={{backgroundColor:"#778899", border:"none", color:"black"}} type="submit" className="w-100 fw-semibold">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Password Update */}
        <Col xs={12} md={6}>
          <Card className="border-0 shadow-sm h-100" >
            <Card.Body>
              <Card.Title className="mb-4 fs-4 fw-semibold ">Change Password</Card.Title>
              <Form onSubmit={handlePasswordUpdate}>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="fw-semibold">New Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                    placeholder="Enter new password"
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    value={confirmPassword} 
                    onChange={handleConfirmPasswordChange} 
                    placeholder="Confirm new password"
                    required 
                  />
                </Form.Group>
                {passwordMsg && (
                  <div className={`mb-3 fw-semibold ${passwordMsg.includes('success') ? 'text-success' : 'text-danger'}`}>
                    {passwordMsg}
                  </div>
                )}
                <Button style={{backgroundColor:"#778899", border:"none", color:"black"}} type="submit" className="w-100 fw-semibold">
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gy-4 mt-5">
        {/* Registered Events */}
        <Col xs={12} md={6}>
          <Card className="border-0 shadow-sm h-100" >
            <Card.Body>
              <Card.Title className="mb-4 fs-4 fw-semibold text-success">Your Registered Events</Card.Title>
              {registeredEvents.length === 0 ? (
                <p className="text-muted fst-italic">You have not registered for any events yet.</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {registeredEvents.map(event => (
                    <div key={event.id} className="p-3 border rounded bg-light">
                      <h6 className="mb-1 fw-semibold">{event.title}</h6>
                      <small className="text-secondary">{event.date} | {event.time}</small>
                    </div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm" >
            <Card.Body>
              <Card.Title className="mb-4 fs-4 fw-semibold">All Volunteer Submitted</Card.Title>
              {allVolunteers.length === 0 ? (
                <p className="text-muted fst-italic">No volunteer submissions found.</p>
              ) : (
                <Table hover responsive bordered striped className="align-middle">
                  <thead className="table-info text-center">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Donation Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allVolunteers.map((v, idx) => (
                      <tr key={idx} className="text-center">
                        <td>{v.firstName} {v.lastName}</td>
                        <td>{v.email}</td>
                        <td>{v.phoneNumber}</td>
                        <td>${v.donationAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
