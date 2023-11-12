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
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="statusFilter">Filter by Status:</label>
                <select
                  id="statusFilter"
                  className="form-control"
                  value={statusFilter}
                  onChange={(e) => handleFilterChange(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Completed">Completed</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </div>
            </div>
          </div>
    
          <div className="row">
            {filteredProjects.map((project) => (
            <Link to={`/project/${project.id}`}>
              <div key={project.id} className="col-md-4 mb-4" onClick={() => handleProjectClick(project.id)}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">Status: {project.status}</p>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
    
        </div>
      );
    };

export default ProjectList;
