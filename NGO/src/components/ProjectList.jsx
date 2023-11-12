import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    }
  ];

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <div>
      {/* Add filters or categories here */}
      {projectsData.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`}>
            <Card style={{ width: '200px', height: '400px' }} className="m-2">
            <Card.Img variant="top" src={project.images} style={{ objectFit: 'cover', height: '100%' }} />
            <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary" onClick={() => handleProjectClick(project.id)} >View Details</Button>
            </Card.Body>
            </Card>
            </Link>
      ))}
      {selectedProject && <ProjectDetails projectId={selectedProject} />}
    </div>
  );
};

export default ProjectList;
