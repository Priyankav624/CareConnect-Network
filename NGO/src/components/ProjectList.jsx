import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import ProjectDetails from './ProjectDetails';

const projectsData = [
    {
      id: 1,
      name: 'Clean Water Initiative',
      description: 'Providing clean and safe drinking water to remote communities.',
      images: 'https://picsum.photos/200/400',
      status: 'Ongoing',
    },
    {
      id: 2,
      name: 'Education for All',
      description: 'Ensuring access to quality education for children in underserved areas.',
      images: 'https://picsum.photos/200/401',
      status: 'Completed',
    },
    {
      id: 3,
      name: 'Healthcare Outreach',
      description: 'Providing healthcare services and awareness campaigns in rural regions.',
      images: 'https://picsum.photos/200/402',
      status: 'Ongoing',
    } , {
      id: 4,
      name: 'Environmental Conservation',
      description: 'Preserving natural habitats and promoting eco-friendly practices.',
      images: 'https://picsum.photos/200/403',
      status: 'Planned',
    },
    {
      id: 5,
      name: 'Community Empowerment',
      description: 'Empowering local communities through skill development and support programs.',
      images: 'https://picsum.photos/200/404',
      status: 'In Progress',
    },
    {
      id: 6,
      name: 'Technology for Education',
      description: 'Integrating technology to enhance education accessibility and quality.',
      images: 'https://picsum.photos/200/405',
      status: 'Completed',
    },
    {
      id: 7,
      name: 'Food Security Initiative',
      description: 'Addressing food insecurity through sustainable agriculture and distribution.',
      images: 'https://picsum.photos/200/406',
      status: 'Ongoing',
    },
    {
      id: 8,
      name: 'Women\'s Empowerment',
      description: 'Promoting gender equality and empowering women in various aspects of life.',
      images: 'https://picsum.photos/200/407',
      status: 'In Progress',
    },
    {
      id: 9,
      name: 'Renewable Energy for Communities',
      description: 'Providing sustainable energy solutions to off-grid and rural communities.',
      images: 'https://picsum.photos/200/408',
      status: 'Planned',
    },
    {
      id: 10,
      name: 'Youth Skill Development',
      description: 'Empowering youth through skill development programs for a better future.',
      images: 'https://picsum.photos/200/409',
      status: 'In Progress',
    }
  ];

const ProjectList = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  const handleFilterChange = (newStatusFilter) => {
    setStatusFilter(newStatusFilter);
    setSelectedProject(null);
  };

  const filteredProjects =
    statusFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.status === statusFilter);

      
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="statusFilter">Filter by Status:</Form.Label>
            <Form.Control
              as="select"
              id="statusFilter"
              value={statusFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
              <option value="In Progress">In Progress</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        {filteredProjects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>Status: {project.status}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;

