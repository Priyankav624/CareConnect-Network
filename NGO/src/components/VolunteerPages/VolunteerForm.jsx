import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '', donationAmount: ''
  });
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveToLocalJson = (newEntry) => {
    const existing = JSON.parse(localStorage.getItem('volunteers')) || [];
    existing.push(newEntry);
    localStorage.setItem('volunteers', JSON.stringify(existing));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      saveToLocalJson(formData);
      console.log('Saved to local JSON:', formData);
      setSubmitted(true);
      setFormData({
        firstName: '', lastName: '', email: '', phoneNumber: '', donationAmount: ''
      });
      setValidated(false);
    }

    setValidated(true);
  };

  return (
    <>
      <h2 className="mb-3">Volunteer Information Form</h2>
      {submitted && <Alert variant="success">Thank you for volunteering! 🎉</Alert>}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Same fields as before... */}
        {/* First Name */}
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            First name is required.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Last name is required.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Valid email required.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Enter valid 10-digit phone number.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Donation Amount */}
        <Form.Group className="mb-3" controlId="donationAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Select
            name="donationAmount"
            value={formData.donationAmount}
            onChange={handleChange}
            required
          >
            <option value="">Select amount</option>
            <option value="10">$10</option>
            <option value="20">$20</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please choose an amount.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default VolunteerForm;
