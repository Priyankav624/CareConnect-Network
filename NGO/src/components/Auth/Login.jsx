import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import { ToastContext } from '../../context/ToastContext';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const { setToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || localStorage.getItem('redirectAfterLogin') || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return setError('All fields are required');
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (!user) return setError('Invalid credentials');

    login(user);
    setToast({ show: true, message: ` Welcome back, ${user.name}!` });
    navigate(from, { replace: true });
  };

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="you@example.com" value={form.email} required
              onChange={e => setForm({ ...form, email: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={form.password} required
              onChange={e => setForm({ ...form, password: e.target.value })} />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button type="submit" variant="primary" className="w-100">Login</Button>
        </Form>
        <p className="mt-3 text-center text-muted">
          Not registered? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
