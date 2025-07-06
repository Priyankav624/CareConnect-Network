import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import { ToastContext } from '../../context/ToastContext';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return setError('All fields are required');
    }
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      return setError('Invalid email format');
    }
    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === form.email)) {
      return setError('User already exists');
    }

    const newUser = { ...form };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    login(newUser);
    setToast({ show: true, message: `🎉 Welcome, ${newUser.name}!` });
    navigate('/events');
  };

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center"> Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Your Name" value={form.name} required
              onChange={e => setForm({ ...form, name: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="you@example.com" value={form.email} required
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Min 6 characters" value={form.password} required
              onChange={e => setForm({ ...form, password: e.target.value })} />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button type="submit" variant="success" className="w-100">Sign Up</Button>
        </Form>
        <p className="mt-3 text-center text-muted">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </Container>
  );
};

export default Signup;
