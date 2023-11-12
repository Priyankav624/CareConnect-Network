import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id)
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">{project.name}</h2>
          <h5 className="text-center">{project.status}</h5>
          <img src={project.images} alt={project.name} className="img-fluid rounded mx-auto d-block" />
          <p className="text-center mt-3">{project.description}</p>
        </Col>
      </Row>
    </Container>
  );
};


export default ProjectDetails;
