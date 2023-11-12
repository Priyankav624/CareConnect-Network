import React from 'react';
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
    },
  ];


const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id)
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <h5>{project.status}</h5>
      <img src={project.images} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
