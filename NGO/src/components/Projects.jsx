import React from 'react'
import ProjectList from './ProjectList';
import Donation from './Donation';

const Projects = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h2>NGO Projects</h2>
      <ProjectList />
      <Donation />
    </div>
  );
}

export default Projects